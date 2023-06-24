import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   tasks!: Task[];
   categories!: Category[];

   selectedCategoryMain!: Category;
   selectedTaskMain!: Task;

   constructor(private dataHandler : DataHandlerService) {
   }

   ngOnInit() {
      this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
      this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
   }

   onSelectCategory(selectedCat: Category) {
      this.selectedCategoryMain = selectedCat;
      this.dataHandler.searchTasks(
         this.selectedCategoryMain,
         undefined,
         undefined,
         undefined
      )
         .subscribe((tasks: Task[]) => {
            this.tasks = tasks;
         });
   }

   onSelectTask(selectedTask: Task) {
      this.selectedTaskMain = selectedTask;
      // console.log("mai ts -> ");
      console.log(this.selectedTaskMain);
   }
}
