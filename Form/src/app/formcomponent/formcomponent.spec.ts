import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcomponent } from './formcomponent';

describe('Formcomponent', () => {
  let component: Formcomponent;
  let fixture: ComponentFixture<Formcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
