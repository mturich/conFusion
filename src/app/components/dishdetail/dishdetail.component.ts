import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
// import Dish class
import { Dish } from "../../shared/dish";
import { DishService } from "./../../service/dish.service";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
})
export class DishdetailComponent implements OnInit {
  // when data is passed from the parent to the child, it has to be imported with @Import
  // It us definded as Dish class which has to be imported for that purpose
  dish: Dish;

  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id']
      
    this.dishService.getDish(id)
      .subscribe((dish) => this.dish = dish);
  }

  goBack():void {
    this.location.back();
  }

}
