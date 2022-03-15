import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { Leader } from '../../shared/leader';
import { LeaderService } from 'src/app/service/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(
    private leaderService: LeaderService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.leaders = this.leaderService.getLeaders();
  }

}
