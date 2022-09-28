import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CoffeeDrink } from './coffeeDrink';
import { COFFEE_DRINKS } from './MockCoffeeData';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  constructor() { }

  getCoffeeDrinks(): Observable<CoffeeDrink[]> {
    return of(COFFEE_DRINKS);
  }
}
