import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaxesService {

  constructor(private http: HttpClient) { }

  public setTaxes(taxes: any):  Observable<boolean> {
    return this.http.post<boolean>(`${env.api}/taxes`, taxes);
  }
}
