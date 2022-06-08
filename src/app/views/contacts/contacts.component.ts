import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import {MatDialogRef} from "@angular/material/dialog";
import {BehaviorSubject, catchError, EMPTY, filter, map, Observable, switchMap} from "rxjs";
import {ContactsService} from "../../service/contacts.service";
import {SnackbarService} from "../../service/snackbar.service";

@Component({
  selector: 'dc-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contact[]> = this.contactsService.getContacts();

  nuovoContatto$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  manipulatedContact$: BehaviorSubject<Contact | null> = new BehaviorSubject<Contact | null>(null);

  constructor(private dialogRef: MatDialogRef<string>, private contactsService: ContactsService, private snackBar: SnackbarService) { }

  ngOnInit(): void { }

  newContact() {
    this.manipulatedContact$.next(null);
    this.nuovoContatto$.next(true)
  }

  back() {
    this.manipulatedContact$.next(null);
    this.nuovoContatto$.next(false)
  }

  removeContact(id: string) {
    this.contactsService.removeContacts(id).subscribe( {
          next: response =>  {
            response=== true ?
              this.snackBar.open("Contatto rimosso con successo") :
              this.snackBar.open("contatto non rimosso.");
          },
          error: error => {
            console.error(error);
            this.snackBar.open("Errore durante la rimozione del contatto.")
          }
    });
  }

  editContact(id: string) {
    this.contacts$.pipe(
      switchMap(contacts => {
        const contactIndex = contacts.findIndex(contact => contact._id === id);
        this.manipulatedContact$.next(contacts[contactIndex]);
        this.nuovoContatto$.next(true);
        return this.contactsService.updateContacts(contacts[contactIndex]);
      }),
      catchError(error => {
        console.error(error);
        return EMPTY;
      })
    ).subscribe();
  }

  selectContact(id: string) {
    this.dialogRef.close(id);
  }

  saveContact(newContact: Contact) {
    this.contactsService.addContacts(newContact).subscribe();

    /*if(!this.manipulatedContact$.getValue()) {
      newContact._id = '' + Math.random();
      this.contacts = [ ...this.contacts, newContact ];
    } else {
      this.contacts = this.contacts.map(contact => {
        if(contact._id === newContact._id) return { ...contact, ...newContact };
        else return contact;
      });

    }*/

    this.manipulatedContact$.next(null);
    this.nuovoContatto$.next(false)
  }

}
