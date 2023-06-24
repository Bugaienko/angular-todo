import {Observable} from "rxjs";
import {Task} from "../../../model/Task";

export interface CommonDAO<T> {

   getAll(): Observable<T[] | undefined>;

   //CRUD
   add(ob: T): Observable<T | undefined>;

   get(id: number): Observable<T | undefined>;

   update(ob: T): Observable<T |undefined>;

   delete(id: number): Observable<T | undefined>;


}

