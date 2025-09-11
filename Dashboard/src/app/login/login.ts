import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { merge } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush, //approfondire come funziona
})
export class Login {
  hide = signal(true);

  submitted = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  errorMessage = signal('');

  userstypes: User[] = [
    { value: 'admin', viewValue: 'Login as admin' },
    { value: 'guest', viewValue: 'Login as guest' },
  ];

  toggleHide(event: MouseEvent) {
    this.hide.update((bool) => !bool);
    event.stopPropagation();
  }

  onSubmit() {
    this.submitted = true;

    if (this.email.invalid || this.password.invalid) {
      this.email.markAsTouched();
      this.password.markAsTouched();
      alert('ERRORE, RIPROVA.');
      return;
    }
    alert('LOGIN EFFETTUATO!');
  }
}
