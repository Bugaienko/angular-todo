import {TaskDAO} from "../interface/TaskDAO";
import {filter, Observable, of} from "rxjs";
import {Task} from "../../../model/Task";
import {Category} from "../../../model/Category";
import {Priority} from "../../../model/Priority";
import {TestData} from "../../TestData";
import {T} from "@angular/cdk/keycodes";

export class TaskDAOarray implements TaskDAO{
   add(ob: Task): Observable<Task | undefined> {
      return of(undefined);
   }

   delete(id: number): Observable<Task | undefined> {
      return of(undefined);
   }

   get(id: number): Observable<Task | undefined> {
      const task = TestData.tasks.find(todo => todo.id === id);
      return of(task);
   }

   getAll(): Observable<Task[]> {
      return of(TestData.tasks);
   }

   getCompletedCountInCategory(category: Category): Observable<number | undefined> {
      return of(undefined);
   }

   getTotalCount(): Observable<number | undefined> {
      return of(undefined);
   }

   getTotalCountInCategory(category: Category): Observable<number | undefined> {
      return of(undefined);
   }

   getUncompletedCountInCategory(category: Category): Observable<number | undefined> {
      return of(undefined);
   }

   search(category?: Category, searchText?: string, status?: boolean, priority?: Priority): Observable<Task[]> {
      return of(this.searchTodos(category, searchText, status, priority));
   }

   update(ob: Task): Observable<Task | undefined> {
      return of(undefined);
   }

   private searchTodos(category: Category | undefined, searchText: string | undefined, status: boolean | undefined, priority: Priority | undefined): Task[] {
      let allTasks = TestData.tasks;

      if (category) {
         allTasks = allTasks.filter(todo => todo.category === category);
      }

      if (priority) {
         allTasks = allTasks.filter(todo => todo.priority === priority);
      }
      return allTasks;
   }
}
