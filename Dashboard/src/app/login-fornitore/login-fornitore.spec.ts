import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFornitore } from './login-fornitore';

describe('LoginFornitore', () => {
  let component: LoginFornitore;
  let fixture: ComponentFixture<LoginFornitore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFornitore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFornitore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
