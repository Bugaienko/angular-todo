import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CategoriesComponent } from './views/categories/categories.component';
import { TaskListComponent } from './views/task-list/task-list.component';

@NgModule({
   declarations: [
      AppComponent,
      CategoriesComponent,
      TaskListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}
