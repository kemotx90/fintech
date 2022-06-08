import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/material/material.module";
import {AppointmentsRoutingModule} from "./appointments-routing.module";
import {AppointmentsComponent} from "./components/appointments/appointments.component";
import {AppointmentDateComponent} from "./components/appointment-date/appointment-date.component";
import {AppointmentConfirmComponent} from "./components/appointment-confirm/appointment-confirm.component";
import {AppointmentMapComponent} from "./components/appointment-map/appointment-map.component";
import {LocationListComponent} from "./components/location-list/location-list.component";
import {AppointmentHourComponent} from "./components/appointment-hour/appointment-hour.component";



@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentDateComponent,
    AppointmentHourComponent,
    AppointmentMapComponent,
    AppointmentConfirmComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
