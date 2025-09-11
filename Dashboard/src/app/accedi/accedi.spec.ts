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

  it('should have user data', () => {
    expect(component.nomeUtente).toBeDefined();
    expect(component.iscrittoDa).toBeDefined();
  });

  it('should have statistics data', () => {
    expect(component.spesaTotale).toBeDefined();
    expect(component.mediaMensile).toBeDefined();
    expect(component.transazioni).toBeDefined();
  });

  it('should have purchased products', () => {
    expect(component.prodottiAcquistati).toBeDefined();
    expect(component.prodottiAcquistati.length).toBeGreaterThan(0);
  });

  it('should have supermarkets data', () => {
    expect(component.supermercati).toBeDefined();
    expect(component.supermercati.length).toBeGreaterThan(0);
  });

  it('should have monthly expenses', () => {
    expect(component.spesaMensile).toBeDefined();
    expect(component.spesaMensile.length).toBeGreaterThan(0);
  });

  it('should have recent transactions', () => {
    expect(component.transazioniRecenti).toBeDefined();
    expect(component.transazioniRecenti.length).toBeGreaterThan(0);
  });

  it('should toggle supermarket favorite status', () => {
    const initialStatus = component.supermercati[0].preferito;
    component.togglePreferito(component.supermercati[0]);
    expect(component.supermercati[0].preferito).toBe(!initialStatus);
  });

  it('should return correct trend icon', () => {
    expect(component.getTendenzaIcona('up')).toBe('↗');
    expect(component.getTendenzaIcona('down')).toBe('↘');
    expect(component.getTendenzaIcona('stable')).toBe('→');
  });

  it('should return correct trend class', () => {
    expect(component.getTendenzaClasse('up')).toBe('tendenza-up');
    expect(component.getTendenzaClasse('down')).toBe('tendenza-down');
    expect(component.getTendenzaClasse('stable')).toBe('tendenza-stable');
  });
});