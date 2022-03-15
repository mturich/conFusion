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
    //will be executed by creation/update of the component
    this.dishes = this.dishService.getDishes();

  }
  
  // THis neeeds to be implemented to understand the 'onSelect' funtion in the // menu.component.html
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

     


}