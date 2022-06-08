import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Card} from "../../../../models/card";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject, distinctUntilChanged, map, Observable, switchMap, tap} from "rxjs";
import {SnackbarService} from "../../../../service/snackbar.service";
import {CardsService} from "../../../../service/cards.service";

@Component({
  selector: 'dc-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovementsComponent implements OnInit {

  cards$: Observable<Card[]> = this.cardsService.getCards();

  selectedCard$: Observable<Card> | undefined;
  loadElement$: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  movementForm: FormGroup;

  movementsNumber: number | undefined = 0;

    constructor(private formBuilder: FormBuilder, private snackBar: SnackbarService, private cardsService: CardsService) {
    this.movementForm = formBuilder.group({
      carta: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.selectedCard$ = this.movementForm.get('carta')?.valueChanges.pipe(
      distinctUntilChanged(),
      tap(() => this.loadElement$.next(5)),
      switchMap(cardNumber => this.cards$.pipe(
          map(cards => {
            const index = cards.findIndex(card => card.number === cardNumber);
            this.movementsNumber = cards[index].movements?.length;
            return cards[index];
          })
        )
      )
    )
  }

  loadOtherElements() {
    const loadedElement = this.loadElement$.getValue();
    let hasOtherElement = true;

    if(this.movementsNumber) {
      hasOtherElement = this.movementsNumber > loadedElement;
    }

    if(!hasOtherElement) {
      this.snackBar.open('Non ci sono altri elementi da caricare', 'CHIUDI');
      return;
    }

    this.loadElement$.next(loadedElement + 5);
  }

}
