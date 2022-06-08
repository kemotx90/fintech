import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auth} from "../../../../models/auth";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  selector: 'dc-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponentComponent implements OnInit, OnDestroy {
  @Output() logIn: EventEmitter<Auth> = new EventEmitter<Auth>();
  @Output() goToRegister: EventEmitter<void> = new EventEmitter<void>();

  private subscriptionContainer: Subscription = new Subscription();
  showPassword$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  progressbarColor: BehaviorSubject<'warn' | 'accent' | 'primary'> = new BehaviorSubject<'warn' | 'accent' | 'primary'>('warn');
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
    this.subscriptionContainer.add(
      this.passwordInput.valueChanges.subscribe(password => {
        if(!password || password.length < 8) { this.progressbarColor.next('warn'); }
        else if(password.length >= 8 && password.length < 15) { this.progressbarColor.next('accent'); }
        else if(password.length > 15) { this.progressbarColor.next('primary'); }
      })
    );
  }

  accedi() {
    if(this.emailInput.invalid || this.passwordInput.invalid) {
      console.error('errore form invalid');
      return;
    }

    console.log(this.signInForm.value);
  }

  get emailInput() { return this.signInForm.get('email')!; }
  get passwordInput() { return this.signInForm.get('password')!; }

  ngOnDestroy(): void {
    this.subscriptionContainer.unsubscribe();
  }

}
