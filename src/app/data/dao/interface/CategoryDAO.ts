import {CommonDAO} from "./CommonDAO";
import {Category} from "../../../model/Category";
import {Observable} from "rxjs";

export interface CategoryDAO extends CommonDAO<Category> {

   searchByTitle(title: string): Observable<Category[] | undefined>;

}
