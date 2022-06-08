import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {CardForm} from "../../../../models/card-form";

@Component({
  selector: 'dc-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFormComponent {
  @Output() aggiungiCarta: EventEmitter<CardForm> = new EventEmitter<CardForm>();
  @Output() annullaInserimento: EventEmitter<void> = new EventEmitter<void>();

  optionTipoCarta = ['visa', 'mastercard'];
  cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cardForm = formBuilder.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      csc: ['', [Validators.required, Validators.min(100), Validators.max(999)]]
    });
  }

  aggiungi() {
    if(this.emailInput.invalid || this.nomeInput.invalid || this.cognomeInput.invalid ||
      this.numeroCartaInput.invalid || this.codiceSicurezzaInput.invalid) {
      console.error('form non valido');
      return;
    }

    const card = this.cardForm.value as CardForm;
    this.aggiungiCarta.emit(card);
    this.cleanup();
  }

  annulla() {
    this.annullaInserimento.emit();
    this.cleanup();
  }

  cleanup() {
    this.cardForm.reset();
  }

  get emailInput() { return this.cardForm.get('type')!; }
  get nomeInput() { return this.cardForm.get('name')!; }
  get cognomeInput() { return this.cardForm.get('surname')!; }
  get numeroCartaInput() { return this.cardForm.get('number')!; }
  get codiceSicurezzaInput() { return this.cardForm.get('csc')!; }

}
