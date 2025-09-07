import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute) {}
   mioForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
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

    
  });
  }



   onSubmit()
  {
   //console.log(this.emailRegistrazione);
   //console.log(this.passwordRegistrazione);
     var mail = this.mioForm.get('email');
    var pass = this.mioForm.get('password');
    //console.log(mail?.value);
    //console.log(pass?.value);
    
    if(this.mioForm.valid && String(mail?.value) == this.emailRegistrazione && String(pass?.value) == this.passwordRegistrazione){
     
      alert("Login Effettuato");
      
    }else{
      alert("Login non Effetuato");
    }
    
    
    
    
  }


}

