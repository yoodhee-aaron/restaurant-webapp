import { DecimalPipe } from "@angular/common";

export interface Starter {
  id: number;
  name: string;
  price: number;
}

export interface Main {
  id: number;
  name: string;
  price: number;
}

export interface Dessert {
  id: number;
  name: string;
  price: number;
}

export interface RootObject {
  starters: Starter[];
  mains: Main[];
  desserts: Dessert[];
}
