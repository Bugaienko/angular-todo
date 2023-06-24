import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CategoriesComponent } from './views/categories/categories.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MainComponent } from './views/main/main.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import { EditTaskDialogComponent } from './views/dialog/edit-task-dialog/edit-task-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
   declarations: [
      AppComponent,
      CategoriesComponent,
      TaskListComponent,
      MainComponent,
      EditTaskDialogComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      RouterOutlet,
      AppRoutingModule,
      MatDialogModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,


   ],
   providers: [],
   // entryComponents: [EditTaskDialogComponent], в версиях выше 9 не нужно указывать компоненты, которые могут быть поверх всех
   bootstrap: [AppComponent]
})
export class AppModule {
}
