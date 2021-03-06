import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { switchMap } from "rxjs/operators";
// import Dish class
import { Dish } from "../../shared/dish";
import { DishService } from "../../service/dish.service";

import { Comment } from "../../shared/comment";

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
  commentForm: FormGroup;
  comment: Comment;
  @ViewChild("fform") commentFormDirective;

  formErrors = {
    author: "",
    rating: "",
    comment: "",
  };

  validationMessages = {
    author: {
      required: "Author is required.",
      minlength: "Author must be at least 2 characters long.",
    },
    rating: {
      required: "Rating is required.",
    },
    comment: {
      required: "Comment is required.",
    },
  };

  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.dishService
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));

    // every time the link is updated (is done by clicking the left/right button and loading another ID in the route)
    // the route is changes and this triggers the switchmap function to get fetch the Dish for the changed ID
    // the subscription makes sure that the dish and the corresponding next and previous dishes are updated.
    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishService.getDish(params["id"]))
      )
      .subscribe((dish) => {
        this.dish = dish;

        this.setPrevNext(dish.id);
      });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm(): void {
    this.commentForm = this.fb.group({
      rating: 5,
      comment: ["", Validators.required],
      author: ["", [Validators.required, Validators.minLength(2)]],
      date: new Date().toISOString(),
    });

    this.commentForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + "";
          }
        }
      }
    }
  }

  onSubmitRating() {
    this.comment = this.commentForm.value;
    this.dish.comments.push(this.comment);
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      rating: 5,
      comment: "",
      author: "",
      date: Date(),
    });
  }
}
