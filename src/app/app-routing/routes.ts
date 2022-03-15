import { Dish } from "./../shared/dish";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { Routes } from "@angular/router";
import { DishdetailComponent } from "../components/dishdetail/dishdetail.component";
import { MenuComponent } from "../components/menu/menu.component";
import { HomeComponent } from "../components/home/home.component";
import { AboutComponent } from "../components/about/about.component";
import { ContactComponent } from "../components/contact/contact.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "menu", component: MenuComponent },
  { path: "about", component: AboutComponent },
  { path: "contactus", component: ContactComponent },
  { path: "dishdetail/:id", component: DishdetailComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
