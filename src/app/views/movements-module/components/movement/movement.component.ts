import {ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {Movement} from "../../../../models/movement";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'dc-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovementComponent implements OnInit {
  @Input() movement: Movement | null = null;

  isIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hideDescriptionPanel$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    if(this.movement?.type === 'in') { this.isIn$.next(true); }
  }

}
