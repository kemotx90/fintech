import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material/material.module";
import { TransferComponent } from './views/transfer/transfer.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { FiltraContactPipe } from './views/pipe/filtra-contact.pipe';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    ContactsComponent,
    FiltraContactPipe,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
