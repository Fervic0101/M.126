import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private router: Router) {}

  login(username: string, password: string, userType: string) {
    console.log('Login attempt:', username, password, userType);

    if (!userType) {
      alert('Seleziona il tipo di utente');
      return;
    }

    alert(`Benvenuto ${username}, tipo utente: ${userType}`);

    // Redirect in base al tipo utente
    if (userType === 'cliente') {
      this.router.navigate(['/cliente']);
    } else if (userType === 'admin') {
      this.router.navigate(['/admin']);
    }
  }

}
