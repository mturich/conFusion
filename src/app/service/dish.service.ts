import { Injectable } from "@angular/core";
// are needed to config service
import { Dish } from "../shared/dish";
import { Observable } from "rxjs";
import { baseURL } from "../shared/baseurl";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class DishService {
  constructor(
    private http: HttpClient,
    private ProcessHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getDishes(): Observable<Dish[]> {
    return this.http
      .get<Dish[]>(baseURL + "dishes")
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  getDish(id: string): Observable<Dish> {
    return this.http
      .get<Dish>(baseURL + "dishes/" + id)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
  // the query (?) operator gives back an array with only contains one vaule (in this very example)
  // therefore the array has to be accessed and the fist value is selected
  getFeaturedDish(): Observable<Dish> {
    return this.http
      .get<Dish>(baseURL + "dishes?featured=true")
      .pipe(map((dishes) => dishes[0]))
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  getDishIds(): Observable<string[] | any> {
    return this.getDishes()
      .pipe(map((dishes) => dishes.map((dish) => dish.id)))
      .pipe(catchError((error) => error));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));

  }

}
