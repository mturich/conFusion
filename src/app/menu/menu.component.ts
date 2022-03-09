import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;

  selectedDish: Dish;




  constructor() {}

  ngOnInit() { }
  
  // THis neeeds to be implemented to understand the 'onSelect' funtion in the // menu.component.html
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
