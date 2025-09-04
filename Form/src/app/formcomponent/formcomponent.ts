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
  @ViewChild('loginForm') formlogin!: ElementRef<any>;
  onSubmit(form : NgForm) {
  console.log(form.valid);
    if(form.valid) {

      console.log(form.value.email);
      console.log(form.value.password);
    }
    else{
      alert("Formulario non valido ");
    }
  }
}
