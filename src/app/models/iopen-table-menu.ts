import { DecimalPipe } from '@angular/common';

export interface IOpenTableMenu {
    id: number;
    name: string;
    price: DecimalPipe;
}
