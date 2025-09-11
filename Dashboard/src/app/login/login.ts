import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
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

  // inutilizzato ma capire come funzionava signal piuttosto guardando su main com era 
  errorMessage = signal(''); //forse se non fosse signal quando cambia non lo aggiornerebbe nell html.. o magari si ma facendo con workaround piu sbatta. approfondire

  toggleHide(event: MouseEvent) {
    // funziona giustamente solo con click ma li c'è scritto mouseEvent .. perch?
    this.hide.update((bool) => !bool); // set vs update ? in questo caso both OK .. (?)
    event.stopPropagation(); //seconco chat qui inutile (e penso abbia ragione non ci sono elementi sottostanti cliccabili in questo caso), quindi potevamo anche non passare $event
  }

  onSubmit() {
    this.submitted = true;

    if (this.email.invalid || this.password.invalid) {
      this.email.markAsTouched();
      this.password.markAsTouched();
      alert('HAI SBAGLIATO, RIPROVA.');
      return;
    }
    alert('BRAVO');
  }

  /* noi stiamo gestendo queste cose nel template non qui nel tx qundi non serve sto blocco: queste cose utili se vuoi gestire statusChanges e valueChanges (lanciati da ReactiveForm penso o forse da coso template perchè stiamo usando FormControl approfondire)
  // sta roba angular material la metteva nel costruttore. si può anche in ngOnInit e visto che non inizializzi niente mi piaceva di più. ma sto cercando il modo di non usarla affatto perchè secondo me inutile per nostro livello / situazione
  ngOnInit() {
    merge(this.email.statusChanges, this.email.valueChanges) //unisce due stream in uno (stream di eventi in questo caso o forse sempre approfondire) : ora li puoi ascoltare 2 in uno ( fusi)
      .pipe(takeUntilDestroyed()) // .pipe aggiunge operatori agli stream ( e forse non solo approfondire) ; in questo caso Angular Material ha aggiunto quel op che auto-disiscrive quando comp distrutto => evita memory leak
      .subscribe(() => this.updateErrorMessage()); //   email.valueChanges.subscribe(v => console.log(v));    "ti iscrivi" / " inizi ad ascoltare lo stream e ogni volta che EVENTO  funz si attiva"
  }
      */

  /* anche questo avrebbe senso se gestisci errori stati dei controller qua e qua pure errormessage, ma stiamo facendo nel template. poi fare anche versione qua
  updateErrorMessage() {
    //ok grazie a angular material abbiamo scoperto che il costruttore può usare metodi, comunque approfondire
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
    */
}
