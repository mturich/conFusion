import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DishService } from 'src/app/service/dish.service';
import { Promotion } from 'src/app/shared/promotion';
import { PromotionService } from 'src/app/service/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
