import { baseURL } from "./../../shared/baseurl";
import { DishService } from "../../service/dish.service";
import { Component, Inject, OnInit } from "@angular/core";
import { Dish } from "../../shared/dish";
import { flyInOut, expand } from "src/app/animations/app.animation";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  errMess: string;

  // service has to be declared in the constructor
  constructor(
    // for services, just the private keyword is used
    private dishService: DishService,
    // for values, the @Inject keyword has to be used
    // needs to be injected to update the dish.image with the baseURL
    @Inject("BaseURL") public baseURL: string ) {}

  ngOnInit() {
    //handels the promise of the dishService ()
    this.dishService.getDishes().subscribe(
      dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess
    );
  }
}
