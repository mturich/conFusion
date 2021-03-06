import { Injectable } from "@angular/core";
import { PROMOTIONS } from "./../shared/promotions";
import { Promotion } from "../shared/promotion";

import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PromotionService {
  constructor() {}

  getPromotions(): Promise<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000)).toPromise()
  }

  getPromotion(id: string): Promise<Promotion>{
    return of(PROMOTIONS.filter((promotion) => promotion.id === id)[0]).pipe(delay(2000)).toPromise();
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)).toPromise();
  }
}
