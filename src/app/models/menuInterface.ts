import { DecimalPipe } from '@angular/common';

export interface IStarter {
	id: number;
	name: string;
	price: DecimalPipe;
}

export interface IMain {
	id: number;
	name: string;
	price: DecimalPipe;
}

export interface IDessert {
	id: number;
	name: string;
	price: DecimalPipe;
}

export interface IRootObject {
	starters: Starter[];
	mains: Main[];
	desserts: Dessert[];
}
