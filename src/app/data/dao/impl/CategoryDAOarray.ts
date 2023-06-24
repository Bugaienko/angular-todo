import {CategoryDAO} from "../interface/CategoryDAO";
import {Category} from "../../../model/Category";
import {Observable, of} from "rxjs";
import {T} from "@angular/cdk/keycodes";
import {TestData} from "../../TestData";

export class CategoryDAOarray implements CategoryDAO{
   add(ob: Category): Observable<Category | undefined> {
      return of(undefined);
   }

   delete(id: number): Observable<Category | undefined> {
      return of(undefined);
   }

   get(id: number): Observable<Category | undefined> {
      return of(undefined);
   }

   getAll(): Observable<Category[]> {
      return of(TestData.categories);
   }

   searchByTitle(title: string): Observable<Category[] | undefined> {
      return of(undefined);
   }

   update(ob: Category): Observable<Category | undefined> {
      return of(undefined);
   }

}
