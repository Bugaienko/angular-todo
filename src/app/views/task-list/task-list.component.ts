import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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
export class TaskListComponent implements OnInit, AfterViewInit {

   displayedColumns: string[] =
      ['color', 'id', 'title', 'date', 'priority', 'category'];
   dataSource!: MatTableDataSource<Task>;

   @ViewChild(MatPaginator, {static: false}) private paginator!: MatPaginator;
   @ViewChild(MatSort, {static: false}) private sort!: MatSort;

   tasks?: Task[];

   constructor(private dataHandler: DataHandlerService) {

   }

   ngOnInit(): void {
      this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);

      this.dataSource = new MatTableDataSource();

      this.refreshTable();

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

   private refreshTable() {
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
}
