import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'dc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  @Output() registrazione: EventEmitter<NgForm> = new EventEmitter<NgForm>();
  @Output() goToSignIn: EventEmitter<void> = new EventEmitter<void>();

  showPassword$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showPasswordConfirmation$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  registrazioneForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrazioneForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
  }

  registrati() {
    if(this.emailInput.invalid || this.nomeInput.invalid || this.cognomeInput.invalid ||
      this.passwordInput.invalid || this.passwordConfirmationInput.invalid) {
      console.error('Form non valido');
      return;
    }

    //TODO aggiungere un controllo di validazione delle password uguali
    console.log(this.registrazioneForm.value)
  }

  get emailInput() { return this.registrazioneForm.get('email')!; }
  get nomeInput() { return this.registrazioneForm.get('nome')!; }
  get cognomeInput() { return this.registrazioneForm.get('cognome')!; }
  get passwordInput() { return this.registrazioneForm.get('password')!; }
  get passwordConfirmationInput() { return this.registrazioneForm.get('passwordConfirmation')!; }

}
