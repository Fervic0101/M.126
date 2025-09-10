import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private userType$ = new BehaviorSubject<string | null>(null);

  constructor() {
    const tipo = localStorage.getItem('userType');
    if (tipo === 'operatore' || tipo === 'cliente') {
      this.loggedIn$.next(true);
      this.userType$.next(tipo);
    }
  }

  get isLoggedIn() {
    return this.loggedIn$.asObservable();
  }

  get userType() {
    return this.userType$.asObservable();
  }

  login(tipo: string) {
    localStorage.setItem('userType', tipo);
    this.loggedIn$.next(true);
    this.userType$.next(tipo);
  }

  logout() {
    localStorage.removeItem('userType');
    this.loggedIn$.next(false);
    this.userType$.next(null);
  }
}
