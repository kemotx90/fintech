import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../environments/environment";
import {Card} from "../models/card";
import {CardForm} from "../models/card-form";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  public getCards():  Observable<Card[]> {
    return this.http.get<Card[]>(`${env.api}/cards`);
  }

  public addCard(newCard: CardForm):  Observable<Card> {
    return this.http.post<Card>(`${env.api}/cards`, newCard);
  }

  public removeCard(cardId: string):  Observable<boolean> {
    return this.http.delete<boolean>(`${env.api}/cards/${cardId}`);
  }

  public cardMovements(cardId: string, limit?: number, offset?: number):  Observable<boolean> {
    return this.http.delete<boolean>(`${env.api}/cards/${cardId}/movements?${limit}&${offset}`);
  }

}
