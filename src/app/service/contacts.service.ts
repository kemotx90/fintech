import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment as env} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  public getContacts():  Observable<Contact[]> {
    return this.http.get<Contact[]>(`${env.api}/contacts`);
  }

  public addContacts(contact: Partial<Contact>):  Observable<Contact> {
    return this.http.post<Contact>(`${env.api}/contacts`, contact);
  }

  public updateContacts(contact: Partial<Contact>):  Observable<Contact> {
    return this.http.put<Contact>(`${env.api}/contacts/${contact._id}`, contact);
  }

  public removeContacts(contactId: string):  Observable<boolean> {
    return this.http.delete<boolean>(`${env.api}/contacts/${contactId}`);
  }
}
