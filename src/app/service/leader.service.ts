import { baseURL } from "./../shared/baseurl";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Leader } from "../shared/leader";
import { Observable } from "rxjs";

import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LeaderService {
  constructor(
    private ProcessHTTPMsgService: ProcessHTTPMsgService,
    private http: HttpClient
  ) {}

  getLeaders(): Observable<Leader[]> {
    return this.http
      .get<Leader[]>(baseURL + "leadership")
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http
      .get<Leader>(baseURL + "leadership/" + id)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http
      .get<Leader>(baseURL + "leadership?featured=true")
      .pipe(map((leader) => leader[0]))
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
}
