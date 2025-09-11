import { Component, EventEmitter, output, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-barra-ricerca',
  templateUrl: './barra-ricerca.html',
  imports: [MatFormFieldModule],
})
export class BarraRicerca {
  cerca: string = '';
  ritornaRicerca() {
    

  }
}