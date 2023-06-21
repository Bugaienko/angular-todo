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
import {RouterModule, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
   declarations: [
      AppComponent,
      CategoriesComponent,
      TaskListComponent,
      MainComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      RouterOutlet,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}
