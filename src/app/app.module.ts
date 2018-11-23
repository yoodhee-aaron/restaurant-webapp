import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarAppComponent } from "./navbar-app/navbar-app.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { MenuService } from "./service/menu.service";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarAppComponent,
    ReservationComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
