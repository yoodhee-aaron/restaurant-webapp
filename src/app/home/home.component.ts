import { Component, OnInit } from "@angular/core";
import { MenuService } from "../service/menu.service";
import { Starter, RootObject } from "../models/menuModel";
import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  //starters: Object;
  //starterArray: [];
  starters = [];
  main = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.getStarter();
    this.getMain();
  }
  getStarter() {
    this.menuService.getStarter().subscribe(data => {
      this.starters = data["starters"];

      console.log(this.starters);
    });
  }
  getMain() {
    this.menuService.getMain().subscribe(data => {
      this.main = data["mains"];
      console.log(this.main);
    });
  }
}
