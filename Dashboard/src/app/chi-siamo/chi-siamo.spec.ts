import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSiamo } from './chi-siamo';

describe('ChiSiamo', () => {
  let component: ChiSiamo;
  let fixture: ComponentFixture<ChiSiamo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiSiamo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiSiamo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
