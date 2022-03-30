import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { Leader } from '../../shared/leader';
import { LeaderService } from 'src/app/service/leader.service';
import { baseURL } from 'src/app/shared/baseurl'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMess: string;

  constructor(
    private leaderService: LeaderService,
    private location: Location,
    private route: ActivatedRoute
    @Inject("BaseURL") public baseURL
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.leaderService.getLeaders()
      .subscribe(
        leaders => this.leaders = leaders,
        errmess => this.errMess = <any>errmess
      ); }     

}
