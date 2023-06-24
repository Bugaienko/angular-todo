import {PriorityDAO} from "../interface/PriorityDAO";
import {Priority} from "../../../model/Priority";
import {Observable, of} from "rxjs";
import {T} from "@angular/cdk/keycodes";

export class PriorityDAOarray implements PriorityDAO{
   add(ob: Priority): Observable<Priority | undefined> {
      return of(undefined);
   }

   delete(id: number): Observable<Priority | undefined> {
      return of(undefined);
   }

   get(id: number): Observable<Priority | undefined> {
      return of(undefined);
   }

   getAll(): Observable<Priority[]> {
      return of([]);
   }

   update(ob: Priority): Observable<Priority> {
      return of(ob);
   }

}
