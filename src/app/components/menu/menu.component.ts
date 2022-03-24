import { DISHES } from 'src/app/shared/dishes';
import { DishService } from '../../service/dish.service';
import { Component, OnInit } from "@angular/core";
import { Dish } from "../../shared/dish";



@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] ;

  selectedDish: Dish;

  // service has to be declared in the constructor
  constructor(private dishService: DishService) {}

  ngOnInit() { 
    //handels the promise of the dishService ()
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);

  }
  
  // THis neeeds to be implemented to understand the 'onSelect' funtion in the // menu.component.html
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

     


}
