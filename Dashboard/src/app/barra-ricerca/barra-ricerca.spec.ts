import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRicerca } from './barra-ricerca';

describe('BarraRicerca', () => {
  let component: BarraRicerca;
  let fixture: ComponentFixture<BarraRicerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraRicerca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraRicerca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
