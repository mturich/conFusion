import { Injectable } from "@angular/core";
import { PROMOTIONS } from "./../shared/promotions";
import { Promotion } from "../shared/promotion";
import { Observable, of } from "rxjs";
import { catchError, delay, map } from "rxjs/operators";
import { baseURL } from "../shared/baseurl";

import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PromotionService {
  constructor(
    private ProcessHTTPMsgService: ProcessHTTPMsgService,
    private http: HttpClient
  ) {}

  getPromotions(): Promise<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000)).toPromise();
  }

  getPromotion(id: string): Promise<Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.id === id)[0])
      .pipe(delay(2000))
      .toPromise();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http
      .get<Promotion>(baseURL + "promotions?featured=true")
      .pipe(map((promotion) => promotion[0]))
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
}
