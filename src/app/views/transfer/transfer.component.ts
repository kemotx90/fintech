import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardObjectService} from "../../service/card-object.service";
import {Card} from "../../models/card";
import {MatDialog} from "@angular/material/dialog";
import {ContactsComponent} from "../contacts/contacts.component";
import {Contact} from "../../models/contact";
import {distinctUntilChanged, take} from "rxjs";
import {SnackbarService} from "../../service/snackbar.service";

@Component({
  selector: 'dc-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferComponent implements OnInit {

  cards: Card[] | null = this.fakeCards.getFakeCards();
  contacts: Contact[] | null = this.fakeCards.getFakeContacts();
  transferForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private snackBar: SnackbarService, private fakeCards: CardObjectService) {
    this.transferForm = formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      iban: ['', [Validators.required]],
      importo: ['', [Validators.required, Validators.min(1)]],
      type: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  openListaContatti() {
    const dialogRef = this.dialog.open(ContactsComponent);

    dialogRef.afterClosed().pipe(
      take(1),
      distinctUntilChanged()
    ).subscribe(result => {
      if(result && this.contacts) {
        const contactIndex = this.contacts.findIndex(contact => contact._id === result);
        this.transferForm.reset(this.contacts[contactIndex]);
      }
    });
  }

  trasferisciDenaro() {
    this.snackBar.open("Transazione avvenuta con successo", "chiudi");
    this.transferForm.reset();
  }

}
