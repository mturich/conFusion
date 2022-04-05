import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "../shared/baseurl";
import { catchError } from "rxjs/operators";
import { Feedback } from "../shared/Feedback";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  constructor(
    private http: HttpClient,
    private ProcessHTTPMsgService: ProcessHTTPMsgService
  ) {}

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .post<Feedback>(baseURL + "feedback", feedback, httpOptions)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
}
