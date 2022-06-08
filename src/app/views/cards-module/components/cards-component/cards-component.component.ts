import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Card} from "../../../../models/card";
import {CardForm} from "../../../../models/card-form";
import {MatDrawer} from "@angular/material/sidenav";
import {SnackbarService} from "../../../../service/snackbar.service";
import {CardsService} from "../../../../service/cards.service";
import {catchError, EMPTY, map, Observable, of, switchMap, tap} from "rxjs";

@Component({
  selector: 'dc-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponentComponent implements OnInit {

  cards$: Observable<Card[]> = this.cardsService.getCards();

  constructor(private snackbar: SnackbarService, private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getCards()
  }

  addCard(card: CardForm, drawer: MatDrawer) {
    let addedCard = {} as Card;
    this.cardsService.addCard(card).pipe(
      tap(card => addedCard = card),
      switchMap(() => this.cards$),
      tap(cards => {
        this.cards$ = of([...cards, addedCard])
        this.snackbar.open("Carta aggiunta con successo", 'CHIUDI');
      }),
      catchError(error => {
        this.snackbar.open("Errore durante l'inserimento della carta", 'CHIUDI');
        return EMPTY;
      })
    ).subscribe();
  }

  movimenti() {
    //TODO
  }

  rimuoviCard(idCarta: string) {
    this.cardsService.removeCard(idCarta).pipe(
      map(isDeleted => {
        if(isDeleted) {
          this.snackbar.open('Carta rimossa correttamente', 'CHIUDI');
          return isDeleted;
        } else {
          this.snackbar.open('Errore durante la rimozione della carta', 'CHIUDI');
          return EMPTY;
        }
      }),
      switchMap(() => this.cards$),
      map(cards => cards.filter(card => card._id !== idCarta)),
      tap(cards => this.cards$ = of(cards))
    ).subscribe();
  }

}
