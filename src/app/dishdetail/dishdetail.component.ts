import { Component, Input, OnInit } from "@angular/core";
// import Dish class
import { Dish } from "../shared/dish";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
})
export class DishdetailComponent implements OnInit {
  // when data is passed from the parent to the child, it has to be imported
  // It us definded as Dish class which has to be imported for that purpose
  @Input() dish: Dish;

  constructor() {}

  ngOnInit() {}
}
