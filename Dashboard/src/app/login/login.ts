import { Component } from '@angular/core';
import { LoginStile } from '../Direttive/login-stile';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { constructorChecks } from '@angular/cdk/schematics';
import { Route, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  imports: [CommonModule,LoginStile, ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  constructor(private router: Router) {}

  mioForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.minLength(3),Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
    ruoloUtente: new FormControl('',[Validators.required])
  });
  onSubmit()
  {
   
    var mail = this.mioForm.get('email');
    var pass = this.mioForm.get('password');
    var utente = this.mioForm.get('ruoloUtente')
   console.log(this.mioForm)
    if(this.mioForm.valid){
      this.router.navigate(['/accedi'], {
      queryParams: { email: String(mail?.value),password : String(pass?.value), ruoloUtente: String(utente?.value)}
      //Consapevole che non sia per niente sicuro!
    });
      alert("Registrazione Effettuata!\nEffettua il login!");
      
    }else{
      alert("Registrazione non Effetuata");
    }
    
    
    
    
  }
}
