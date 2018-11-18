import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IRootObject } from '../models/menuInterface';
import { DecimalPipe } from '@angular/common';

// interface IRootObjectData {
//   IRootObject: [
//     {
//       id: number;
//       name: string;
//       price: DecimalPipe;
//     }
//   ];
// }

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService implements IRootObject {
  starters: any[];
  mains: any[];
  desserts: any[];
  constructor(private httpClient: HttpClient) {}

  getMenuStarter(): Observable<IRootObject['starters']> {
    return this.httpClient
      .get<IRootObject['starters']>(this.MenuMap())
      .pipe(map(data => this.starters));
  }
  private MenuMap() {
    return '/restaurant-webapp/src/assets/data/menu-data.json';
  }
}
