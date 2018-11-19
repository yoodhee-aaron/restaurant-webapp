import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Starter, Main } from "../models/menuModel";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor(private http: HttpClient) {}
  getStarter(): Observable<Starter[]> {
    return this.http.get<Starter[]>(this.MenuMap());
  }

  getMain(): Observable<Main[]> {
    return this.http.get<Main[]>(this.MenuMap());
  }
  private MenuMap() {
    return "/assets/data/menu-data.json";
  }
}
