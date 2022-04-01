import { Component, Inject, OnInit } from "@angular/core";
import { LeaderService } from "./../../service/leader.service";
import { Leader } from "./../../shared/leader";
import { PromotionService } from "./../../service/promotion.service";
import { Promotion } from "./../../shared/promotion";
import { DishService } from "./../../service/dish.service";
import { Dish } from "./../../shared/dish";
import { baseURL } from "src/app/shared/baseurl";
import { expand, flyInOut } from "src/app/animations/app.animation";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promErrMess: string;
  leaderErrMess: string;

  constructor(
    private DishService: DishService,
    private PromotionService: PromotionService,
    private LeaderService: LeaderService,
    @Inject("BaseURL") public baseURL
  ) {}

  ngOnInit() {
    // using Promises to deal with the async element of some server, API calls
    this.DishService.getFeaturedDish().subscribe(
      (dish) => (this.dish = dish),
      (errmess) => (this.dishErrMess = <any>errmess)
    );

    this.PromotionService.getFeaturedPromotion().subscribe(
      (promotion) => (this.promotion = promotion),
      (errmess) => (this.promErrMess = <any>errmess)
    );

    this.LeaderService.getFeaturedLeader().subscribe(
      (leader) => (this.leader = leader),
      (errmess) => (this.leaderErrMess = <any>errmess)
    );
  }
}
