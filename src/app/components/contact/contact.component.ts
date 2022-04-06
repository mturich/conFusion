import { delay } from "rxjs/operators";
import { FeedbackService } from "../../service/feedback.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { expand, flyInOut, visibility } from "src/app/animations/app.animation";

import { Feedback, ContactType } from "src/app/shared/Feedback";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  host: {
    "[@flyInOut]": "true",
    style: "display: block;",
  },
  animations: [flyInOut(), expand(), visibility()],
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback = null;
  contactType = ContactType;
  errMess: string;
  submitting: boolean = false;
  //needed to reset the form
  @ViewChild("fform") feedbackFormDirective;

  formErrors = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
  };

  validationMessages = {
    firstname: {
      required: "First Name is required.",
      minlength: "First Name must be at least 2 characters long.",
      maxlength: "FirstName cannot be more than 25 characters long.",
    },
    lastname: {
      required: "Last Name is required.",
      minlength: "Last Name must be at least 2 characters long.",
      maxlength: "Last Name cannot be more than 25 characters long.",
    },
    telnum: {
      required: "Tel. number is required.",
      pattern: "Tel. number must contain only numbers.",
    },
    email: {
      required: "Email is required.",
      email: "Email not in valid format.",
    },
  };

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm(): void {
    this.feedbackForm = this.fb.group({
      firstname: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      lastname: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      telnum: [0, [Validators.pattern]],
      email: ["", [Validators.email]],
      agree: false,
      contacttype: "None",
      message: ["", Validators.required],
    });

    this.feedbackForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    // resets the validation message
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
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

  onSubmit() {
    (this.submitting = true),
      this.feedbackService.submitFeedback(this.feedbackForm.value).subscribe(
        (fb) => {
          (this.submitting = false), (this.feedback = fb),
          setTimeout(() => {
            this.submitting = false;
            this.feedback = null;
          }, 5000);
        },
        // handle any errors if they occure
        (errmess) => {
          (this.feedback = null),
            (this.submitting = false),
            (this.errMess = <any>errmess);
        }
      );

    this.feedbackForm.reset({
      firstname: "",
      lastname: "",
      telnum: 0,
      email: "",
      agree: false,
      contacttype: "None",
      message: "",
    });
    this.feedbackFormDirective.resetForm();
  }
}
