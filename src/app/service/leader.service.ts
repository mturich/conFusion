import { baseURL } from "./../shared/baseurl";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { LEADERS } from "../shared/leaders";
import { Leader } from "../shared/leader";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LeaderService {
  constructor(private http: HttpClient) {}

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + "leadership");
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + "leadership/" + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http
      .get<Leader>(baseURL + "leadership?featured=true")
      .pipe(map((leader) => leader[0]));
  }
}
