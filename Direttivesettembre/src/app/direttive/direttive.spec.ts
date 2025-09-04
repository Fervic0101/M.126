import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Direttive } from './direttive';

describe('Direttive', () => {
  let component: Direttive;
  let fixture: ComponentFixture<Direttive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Direttive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Direttive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
