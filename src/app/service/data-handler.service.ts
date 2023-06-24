import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {TaskDAOarray} from "../data/dao/impl/TaskDAOarray";
import {CategoryDAOarray} from "../data/dao/impl/CategoryDAOarray";
import {Priority} from "../model/Priority";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

   taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
   categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

   private taskDataArray = new TaskDAOarray();
   private categoryDataArray = new CategoryDAOarray()

  constructor() {

  }

  getAllTasks(): Observable<Task[]> {
     return this.taskDataArray.getAll();
  }

  getAllCategories(): Observable<Category[]> {
     return this.categoryDataArray.getAll();
  }


  // fillCategory() {
  //    this.categorySubject.next(TestData.categories);
  // }


  fillTasksByCategory(category :Category): void {
     const tasks = TestData.tasks.filter(task => task.category === category);

     console.log(tasks);
     this.taskSubject.next(tasks);
  }

   searchTasks(category?: Category | undefined, searchText?: string, status?: boolean, priority? :Priority): Observable<Task[]> {
      return this.taskDataArray.search(category, searchText, status, priority)

   }
}
