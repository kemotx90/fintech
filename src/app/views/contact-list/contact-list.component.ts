import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Contact} from "../../models/contact";
import {BehaviorSubject, distinctUntilChanged, map, Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'dc-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit, OnDestroy {
  @Input() contacts: Contact[] | null = null;
  @Output() selezionato: EventEmitter<string> = new EventEmitter<string>();
  @Output() modifica: EventEmitter<string> = new EventEmitter<string>();
  @Output() rimuovi: EventEmitter<string> = new EventEmitter<string>();

  private sub: Subscription = new Subscription();
  filtro$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      cerca: ['']
    });
  }

  ngOnInit(): void {
    this.sub.add(this.contactForm.get('cerca')?.valueChanges.pipe(
      distinctUntilChanged(),
      map(testo => this.filtro$.next(testo))
    ).subscribe());
  }

  cleanRicerca() {
    this.filtro$.next('');
    this.contactForm.get('cerca')?.patchValue('');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
