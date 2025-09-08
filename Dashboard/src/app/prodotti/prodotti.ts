import { Component, Input } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-prodotti',
  import { CommonModule } from '@angular/common';
export class Prodotti {
  @Input() supermarket: number = 0;
  Lista : Array<ProdottiModel> = [];
  Coop : Array<ProdottiModel> = [];;
  Esselunga : Array<ProdottiModel> = [];;
  Carrefour : Array<ProdottiModel> = [];;
  export class Prodotti {
    this.Coop.push(new ProdottiModel('Puma',75,'https://imgs.search.brave.com/B287woB3ugESSzHuDAx0D-_2ixt17bp6Ei8XCtdEEVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RpbGVvLml0/L2ltZy8yMjh4Mjk4/YmUvNTIxMDQwNzQ3/LXNuZWFrZXJzLXB1/bWEuanBn','Scarpe di alta qualità',true));
    this.Esselunga.push(new ProdottiModel('Nike',100,'https://imgs.search.brave.com/wwLSRonHMqWRGSHVaOHnR-o6C9PMF1lJmfEZcIRzAgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pOC5h/bXBsaWVuY2UubmV0/L3QvanBsL2pkaXRf/cHJvZHVjdF9saXN0/P3BsdT1qZF80NTcw/NjdfYWwmcWx0PTky/Jnc9MzYzJmg9MzYz/JnY9MSZmbXQ9YXV0/bw','Scarpe  di alta qualità',true));
    this.Carrefour.push( new ProdottiModel('Adidas',50,'https://imgs.search.brave.com/4U_RefmLxNwtb1qZJQBVCqgl9Lb-zlgSnA-MluhtLJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zY2Fy/cGFtb25kby5pdC9k/dy9pbWFnZS92Mi9C/SERGX1BSRC9vbi9k/ZW1hbmR3YXJlLnN0/YXRpYy8tL1NpdGVz/LVNDQVJQQU1PTkRP/LU1BU1RFUi9kZWZh/dWx0L2R3N2JhMzdj/YmIvaW1hZ2VzL2xh/cmdlL1NDNTM1MzIw/LTAwMDEuanBnP3N3/PTQwMCZzaD00MDA','Scarpe  di alta qualità',false));
  }
  ngOnInit(){
    switch(this.supermarket)
    {
      case 0:
        this.Lista = this.Coop;
        break;
      case 1:
        this.Lista = this.Esselunga;
        break;
      case 2:
        this.Lista = this.Carrefour;
        break;
      default:
        this.Lista = this.Coop;
        break;
    }

    }
}