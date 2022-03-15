import { Component, OnInit } from "@angular/core";

import { LeaderService } from './../../service/leader.service';
import { Leader } from './../../shared/leader';
import { PromotionService } from "./../../service/promotion.service";
import { Promotion } from "./../../shared/promotion";
import { DishService } from "./../../service/dish.service";
import { Dish } from "./../../shared/dish";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private DishService: DishService,
    private PromotionService: PromotionService,
    private LeaderService: LeaderService,
  ) {}

  ngOnInit() {
    this.dish = this.DishService.getFeaturedDish()

    this.promotion = this.PromotionService.getFeaturedPromotion()

    this.leader = this.LeaderService.getFeaturedLeader()
  }
}
