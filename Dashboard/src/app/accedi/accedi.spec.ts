import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accedi } from './accedi';

describe('Accedi', () => {
  let component: Accedi;
  let fixture: ComponentFixture<Accedi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accedi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accedi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
