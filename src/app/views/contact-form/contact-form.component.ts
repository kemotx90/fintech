import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../models/contact";
import {MatDialogRef} from "@angular/material/dialog";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'dc-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() initialContact: Contact | null = null;
  @Output() saveContact: EventEmitter<Contact> = new EventEmitter<Contact>();

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      _id: [''],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      iban: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if(this.initialContact) {
      const contactForm = this.initialContact as Omit<Contact, '_id'>;
      this.contactForm.reset(contactForm);
    }
  }

}
