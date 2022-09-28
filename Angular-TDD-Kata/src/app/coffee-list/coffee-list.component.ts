import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeDataService } from '../coffee-data.service';
import { CoffeeDrink } from '../coffeeDrink';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffeeData$: Observable<CoffeeDrink[]>

  constructor(private coffeeService: CoffeeDataService) { }

  ngOnInit(): void {
    this.coffeeData$ = this.coffeeService.getCoffeeDrinks()
  }

}
