import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

   tasks?: Task[];
   constructor(private dataHandler: DataHandlerService) {
   }
   ngOnInit(): void {
      this.dataHandler.taskSubject.subscribe(tasks => this.tasks=tasks);
   }


   toggleTaskCompleted(task: Task) {
      task.completed = !task.completed;
   }
}
