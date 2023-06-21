import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
   selector: 'app-task-list',
   templateUrl: './task-list.component.html',
   styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

   displayedColumns: string[] =
      ['color', 'id', 'title', 'date', 'priority', 'category'];
   dataSource!: MatTableDataSource<Task>;

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
   }
}
