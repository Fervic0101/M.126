import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneUtenti } from './gestione-utenti';

describe('GestioneUtenti', () => {
  let component: GestioneUtenti;
  let fixture: ComponentFixture<GestioneUtenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioneUtenti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneUtenti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
