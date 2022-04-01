import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule, MatProgressSpinnerModule,  MatSliderModule} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { baseURL } from "./shared/baseurl";


import "hammerjs";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { DishdetailComponent } from "./components/dishdetail/dishdetail.component";
import { HeaderComponent } from "./components/Footer_Header/header/header.component";
import { FooterComponent } from "./components/Footer_Header/footer/footer.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginComponent } from "./components/login/login.component";

import { ProcessHTTPMsgService } from './service/process-httpmsg.service';
import { DishService } from "./service/dish.service";
import { PromotionService } from "./service/promotion.service";
import { LeaderService } from "./service/leader.service";
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    //new components are registered here with the Angular CLI
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,

  ],

  entryComponents: [LoginComponent],

  // services are provider
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    { provide: "BaseURL", useValue: baseURL }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
