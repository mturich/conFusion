import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
// import Dish class
import { Dish } from "../../shared/dish";
import { DishService } from "./../../service/dish.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
})
export class DishdetailComponent implements OnInit {
  // when data is passed from the parent to the child, it has to be imported with @Import
  // It us definded as Dish class which has to be imported for that purpose
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dishService
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
    
    // every time the link is updated (is done by clicking the left/right button and loading another ID in the route)
    // the route is changes and this triggers the switchmap function to get fetch the Dish for the changed ID
    // the subscription makes sure that the dish and the corresponding next and previous dishes are updated. 
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => this.dishService.getDish(params["id"])))
      .subscribe((dish) => {
        
        this.dish = dish;
        this.setPrevNext(dish.id);
      });

    //this.dishService.getDish(id).subscribe((dish) => (this.dish = dish));
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }



  goBack(): void {
    this.location.back();
  }
}
