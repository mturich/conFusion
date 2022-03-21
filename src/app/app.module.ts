import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import "hammerjs";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { DishdetailComponent } from "./components/dishdetail/dishdetail.component";
import { HeaderComponent } from "./components/Footer_Header/header/header.component";
import { FooterComponent } from "./components/Footer_Header/footer/footer.component";
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { DishService } from "./service/dish.service";
import { PromotionService } from './service/promotion.service';
import { LeaderService } from './service/leader.service';
import { LoginComponent } from './components/login/login.component'; 
import { MatDialogModule } from '@angular/material';


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
    MatDialogModule
  ],

  entryComponents: [
    LoginComponent
  ],

  // services are provider
  providers: [
    DishService,
    PromotionService, 
    LeaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
