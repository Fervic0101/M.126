import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrati } from './registrati';

describe('Registrati', () => {
  let component: Registrati;
  let fixture: ComponentFixture<Registrati>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrati]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrati);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
