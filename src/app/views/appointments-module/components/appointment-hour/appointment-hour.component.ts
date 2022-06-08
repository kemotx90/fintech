import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'dc-appointment-hour',
  templateUrl: './appointment-hour.component.html',
  styleUrls: ['./appointment-hour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentHourComponent implements OnInit {
  @Input() slots: Array<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24> | null = null;
  @Output() selectedSlot: EventEmitter<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24> = new EventEmitter<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24>();

  constructor() { }

  ngOnInit(): void {
  }

}
