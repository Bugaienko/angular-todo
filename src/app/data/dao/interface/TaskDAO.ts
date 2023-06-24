import {CommonDAO} from "./CommonDAO";
import {Task} from "../../../model/Task";
import {Category} from "../../../model/Category";
import {Observable} from "rxjs";
import {Priority} from "../../../model/Priority";

export interface TaskDAO extends CommonDAO<Task> {

   search(category?: Category, searchText?: string, status?: boolean, priority?: Priority): Observable<Task[] | undefined>;

   getCompletedCountInCategory(category :Category): Observable<number | undefined>;

   getUncompletedCountInCategory(category :Category): Observable<number | undefined>;

   getTotalCountInCategory(category:Category): Observable<number | undefined>;

   getTotalCount(): Observable<number | undefined>;


}
