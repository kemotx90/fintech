import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../environments/environment";
import {Transfer} from "../models/transfer";

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  public setTransfer(transfer: Transfer):  Observable<boolean> {
    return this.http.post<boolean>(`${env.api}/transfer`, transfer);
  }
}
