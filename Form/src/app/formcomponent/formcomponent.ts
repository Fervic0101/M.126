import { Component, ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-formcomponent',
  imports: [CommonModule,FormsModule],
  templateUrl: './formcomponent.html',
  styleUrl: './formcomponent.css'
})
export class Formcomponent {
  onSubmit(form : NgForm) {
    if(form.valid) 
    {
      console.log(form.value.email);
      console.log(form.value.password);
      console.log(form.value.nome)
    }
    else
    {
      alert("Formulario non valido ");
    }
  }
}
