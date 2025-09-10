import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginStile } from '../Direttive/login-stile';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-accedi',
  imports: [CommonModule,LoginStile, ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './accedi.html',
  styleUrl: './accedi.css'
})


export class Accedi {
  emailRegistrazione: string = '';
  passwordRegistrazione: string = '';
  utenteRegistrazione: string = '';
  constructor(private route: ActivatedRoute,private router: Router) {}

   mioForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    utente: new FormControl(''),
  });

  ngOnInit(): void {
    
       this.route.queryParams.subscribe(params => {
    if (params['email']) {
      this.emailRegistrazione = params['email'];
     
      localStorage.setItem('emailRegistrazione', this.emailRegistrazione);
    } else {
      
      this.emailRegistrazione = localStorage.getItem('emailRegistrazione') || '';
    }

    if (params['password']) {
      this.passwordRegistrazione = params['password'];
      
      localStorage.setItem('passwordRegistrazione', this.passwordRegistrazione);
    } else {
      this.passwordRegistrazione = localStorage.getItem('passwordRegistrazione') || '';
    }
    if (params['ruoloUtente']) {
      this.utenteRegistrazione = params['ruoloUtente'];
     
      localStorage.setItem('utenteRegistrazione', this.utenteRegistrazione)
    } else {
      
      this.utenteRegistrazione = localStorage.getItem('utenteRegistrazione') || '';
    }

    
  });
  }



   onSubmit()
  {
   //console.log(this.emailRegistrazione);
   //console.log(this.passwordRegistrazione);
     var mail = this.mioForm.get('email');
    var pass = this.mioForm.get('password');

    var uten = this.mioForm.get('utente');
    //console.log(this.utenteRegistrazione)
    //console.log(mail?.value);
    //console.log(pass?.value);
    
    if(this.mioForm.valid && String(mail?.value) == this.emailRegistrazione && String(pass?.value) == this.passwordRegistrazione && String(uten?.value) == this.utenteRegistrazione){
     
      alert("Login Effettuato");
      
      if(this.utenteRegistrazione=='cliente')
      {
         this.router.navigate(['/cliente'])
      }else{
        this.router.navigate(['/supermercato'])
      }
     
      
    }else{
      alert("Login non Effetuato");
    }
    
    
    
    
  }


}

