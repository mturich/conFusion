import { Injectable } from "@angular/core";
// are needed to config service
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DishService {
  constructor() {}

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(500));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(500));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(500));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id));
  }
}
