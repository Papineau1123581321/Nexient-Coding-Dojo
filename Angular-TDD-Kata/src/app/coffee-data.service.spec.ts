import { TestBed } from '@angular/core/testing';
import { map } from 'rxjs';
import { CoffeeDataService } from './coffee-data.service';
import { CoffeeDrink } from './coffeeDrink';

describe('CoffeeDataService', () => {
  let service: CoffeeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeDataService);
  });

  describe('getCoffeeDrinks', () => {
    it('should return a list of coffee beverages', () => {
      service.getCoffeeDrinks().pipe(
        map((res: CoffeeDrink[]) => {
          expect(res).toBeDefined()
          expect(res.length).toBeGreaterThan(0)
          res.forEach(coffee => {
            expect(coffee.id).toBeDefined()
            expect(coffee.name).toBeDefined()
            expect(coffee.description).toBeDefined()
          })
        })).subscribe();
    })
  })
});
