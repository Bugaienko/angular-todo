import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../../model/Task";
import {DataHandlerService} from "../../../service/data-handler.service";
import {Category} from "../../../model/Category";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit{

   constructor(
      private dialogRef: MatDialogRef<EditTaskDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: [Task, string],
      private dataHandler :DataHandlerService,
      private dialog :MatDialog,
   ) {
   }


   dialogTitle!: string;
   task!: Task;
   tmpTitle!: string;

   categories! : Category[];
   tmpCategory!: Category;

   ngOnInit(): void {
      this.task = this.data[0];
      this.dialogTitle = this.data[1];

      this.tmpTitle = this.task.title;
      this.tmpCategory = this.task.category!;

      this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);

   }

   onConfirm() {
      this.task.title = this.tmpTitle;
      this.task.category = this.tmpCategory;

      // передаем измененную задачу в обработку
      this.dialogRef.close(this.task);
   }

   onCancel() {
      this.dialogRef.close(null);
   }
}
