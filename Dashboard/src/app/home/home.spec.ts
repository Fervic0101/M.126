import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active market', () => {
    component.setActiveMarket(1);
    expect(component.activeMarket).toBe(1);
  });

  it('should get current market name', () => {
    component.setActiveMarket(0);
    expect(component.getCurrentMarket()).toBe('COOP');
    
    component.setActiveMarket(1);
    expect(component.getCurrentMarket()).toBe('Esselunga');
    
    component.setActiveMarket(2);
    expect(component.getCurrentMarket()).toBe('Carrefour');
  });

  it('should reset filters', () => {
    component.searchTerm = 'test';
    component.minPrice = 5;
    component.maxPrice = 50;
    component.onlyAvailable = true;
    
    component.resetFilters();
    
    expect(component.searchTerm).toBe('');
    expect(component.minPrice).toBe(0);
    expect(component.maxPrice).toBe(100);
    expect(component.onlyAvailable).toBeFalse();
  });
});