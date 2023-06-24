import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
   selector: 'app-task-list',
   templateUrl: './task-list.component.html',
   styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

   displayedColumns: string[] =
      ['color', 'id', 'title', 'date', 'priority', 'category'];
   dataSource!: MatTableDataSource<Task>;

   @ViewChild(MatPaginator, {static: false}) private paginator!: MatPaginator;
   @ViewChild(MatSort, {static: false}) private sort!: MatSort;

   private tasks!: Task[];

   @Input('tasks')
   set setTasks(tasks : Task[]) {
      this.tasks = tasks;
      this.fillTable();
   }

   @Output()
   updateTask = new EventEmitter<Task>();



   get getTasks() {
      return this.tasks;
   }



   constructor(private dataHandler: DataHandlerService) {

   }

   ngOnInit(): void {
      // this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
      // this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);

      this.dataSource = new MatTableDataSource();

      this.fillTable();

   }


   toggleTaskCompleted(task: Task) {
      task.completed = !task.completed;
   }

   getPriorityColor(task: Task): string {
      if (task.completed) {
         return '#0094FD26'; //Todo вынести цвета в константы
      }

      if (task.priority && task.priority.color) {
         return task.priority.color;
      }
      return '#fff';
   }

   private fillTable() {

      if (!this.dataSource) {
         return;
      }
      // @ts-ignore
      this.dataSource.data = this.tasks;

      this.addTableObjects();

      this.dataSource.sortingDataAccessor = (task: Task, colName: string) => {
         switch (colName) {
            case 'priority': {
               return task.priority ? task.priority.id : 0;
            }
            case 'category': {
               return task.category ? task.category.title : '';
            }
            case 'date': {
               return task.date ? task.date.getDate() : '';
            }
            case 'title': {
               return task.title;
            }
            default: {
               return '';
            }
         }
      };
   }

   private addTableObjects() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   }

   ngAfterViewInit(): void {
      this.addTableObjects();
   }

   clickByTaskTitle(task: Task) {
      // console.log(row);
      this.updateTask.emit(task);
   }
}
