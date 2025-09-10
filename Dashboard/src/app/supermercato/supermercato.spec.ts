import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supermercato } from './supermercato';

describe('Supermercato', () => {
  let component: Supermercato;
  let fixture: ComponentFixture<Supermercato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supermercato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supermercato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
