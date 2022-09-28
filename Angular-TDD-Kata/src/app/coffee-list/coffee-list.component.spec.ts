import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoffeeDataService } from '../coffee-data.service';
import { CoffeeListComponent } from './coffee-list.component';
import { COFFEE_DRINKS } from '../MockCoffeeData'

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffeeDataService: CoffeeDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    coffeeDataService = TestBed.inject(CoffeeDataService);

    fixture.detectChanges();
  });

  it('should have a title', () => {
    const headers = fixture.debugElement.queryAll(By.css('h1'));
    expect(headers.length).toBeGreaterThan(0);
    expect(headers[0].nativeElement.innerHTML).toBe('A List of Coffee Drinks');
  })

  it('should have a table to display the coffee-list', () => {
    const tables = fixture.debugElement.queryAll(By.css('table'));
    expect(tables.length).toBeGreaterThan(0);
  })

  describe('coffee-list table', () => {
    it('should have have rows to display data', () => {
      const tableRows = fixture.debugElement.queryAll(By.css('tr'));
      expect(tableRows.length).toBeGreaterThan(0);
    })

    it('should have column headers for the table', () => {
      const tableHeaders = fixture.debugElement.queryAll(By.css('th'));
      expect(tableHeaders.length).toBeGreaterThan(0);
      expect(tableHeaders[0].nativeElement.innerHTML).toBe('Name');
      expect(tableHeaders[1].nativeElement.innerHTML).toBe('Description');
    })
  })

  describe('coffee-list data', () => {
    it('should get a list of coffee drinks from the service', () => {
      spyOn(coffeeDataService, 'getCoffeeDrinks');
      component.ngOnInit();
      expect(coffeeDataService.getCoffeeDrinks).toHaveBeenCalled();
    })

    it('should have data after the service is called', () => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.coffeeData$).toBeDefined();
    })
  })

  describe('coffee-list display', () => {
    it('should show all the coffee drink data', () => {
      const drinkElements = fixture.debugElement.queryAll(By.css('#drink'));
      expect(drinkElements.length).toBe(COFFEE_DRINKS.length)
    })

    it('should have data in each row', () => {
      const drinkElements = fixture.debugElement.queryAll(By.css('#drink'));
      drinkElements.forEach((ele, index) => {
        let childElements = ele.queryAll(By.css('td'));
        expect(childElements.length).toBe(2)
        expect(childElements[0].nativeElement.innerHTML).toBe(COFFEE_DRINKS[index].name)
        expect(childElements[1].nativeElement.innerHTML).toBe(COFFEE_DRINKS[index].description)
      })
    })
  })

});
