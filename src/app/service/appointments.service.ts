import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location} from "../models/location";
import {environment as env } from "../../environments/environment";
import {Observable} from "rxjs";
import {DayWithSlots} from "../models/day-with-slots";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  public getLocations():  Observable<Location[]> {
    return this.http.get<Location[]>(`${env.api}/locations`);
  }

  public getLocationSlots(locationId: string):  Observable<DayWithSlots[]> {
    return this.http.get<DayWithSlots[]>(`${env.api}/slots/${locationId}`);
  }

  public setAppointment(appointment: DayWithSlots):  Observable<boolean> {
    return this.http.post<boolean>(`${env.api}/schedule`, appointment);
  }
}
