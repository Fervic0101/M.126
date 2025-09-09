import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdottiModel } from '../Model/ProdottiModel';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient) {}

  getProdotti() {
    return this.http.get<any>('/prodotti.json'); 
  }
}
