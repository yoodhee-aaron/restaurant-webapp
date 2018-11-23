import { Component, OnInit } from "@angular/core";
import { MenuService } from "../service/menu.service";
@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.scss"]
})
export class ReservationComponent implements OnInit {
  starters: [];
  main: [];
  Order: any = { order: [] };
  valLength: any = { order: [] };
  valLengthMain: any = { main: [] };
  checkedStarter: any;
  checkedMain: any;
  checked: any;
  starterSelected: any;
  mainSelected: any;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.getStarter();
    this.getMain();
  }
  getStarter() {
    this.menuService.getStarter().subscribe(data => {
      this.starters = data["starters"];
    });
  }
  getMain() {
    this.menuService.getMain().subscribe(data => {
      this.main = data["mains"];
      console.log(this.main);
    });
  }
  starterCheckbox(name) {
    console.log(name);
    //const checked = this.Order.order.indexOf(name);
    this.starterSelected = name;
    const checkLength = this.valLength.order.push(name);
    console.log(Array.of(checkLength));

    if (checkLength > 1) {
      alert("you only can select one starter");
      return;
    }
  }
  mainCheckbox(main) {
    console.log(main);

    this.mainSelected = main;
    const maincheckLength = this.valLengthMain.main.push(main);
    console.log(Array.of(maincheckLength));

    if (maincheckLength == null || maincheckLength > 1) {
      alert("you only can select one main course ");
      return false;
    }
  }
  makeOrder() {
    //console.log(this.Order.order);

    this.mainCheckbox(name);
    this.starterCheckbox(name);
    const ojb = this.Order.order.push(name, name);
    if (ojb >= 2) {
      this.Order = { order: [] };
      const ojbq = this.Order.order.push(
        this.mainSelected,
        this.starterSelected
      );
      console.log(ojbq);

      alert("success");
    } else {
      alert("wrong");
      return;
    }
  }
}
