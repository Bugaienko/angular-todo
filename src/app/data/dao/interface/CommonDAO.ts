import {Observable} from "rxjs";

export interface CommonDAO<T> {

   getAll(): Observable<T>[];

   //CRUD
   add(ob: T): Observable<T>;

   get(id: number): Observable<T>;

   update(ob: T): Observable<T>;

   delete(id: number): Observable<T>;


}

