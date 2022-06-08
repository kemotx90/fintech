import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../../../models/card";

@Component({
  selector: 'dc-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent {
  @Input() cards: Card[] | null = null;
  @Output() movimenti: EventEmitter<string> = new EventEmitter<string>();
  @Output() rimuovi: EventEmitter<string> = new EventEmitter<string>();
  @Output() aggiungi: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

}
