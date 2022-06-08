import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DayWithSlots, generateDateFromString} from "../../../../models/day-with-slots";
import {FormControl} from "@angular/forms";
import {distinctUntilChanged, Subscription} from "rxjs";

@Component({
  selector: 'dc-appointment-date',
  templateUrl: './appointment-date.component.html',
  styleUrls: ['./appointment-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentDateComponent implements OnInit, OnDestroy {
  @Input() dayWithSlots: DayWithSlots[] | null = null;
  @Output() selectedDay: EventEmitter<Date> = new EventEmitter<Date>();

  myFilter = (d: Date | null): boolean => {
    const slotDays = this.dayWithSlots?.map(slot => {
      const newData = generateDateFromString(slot.day)
      return newData.getTime();
    });

    if (!slotDays || !d) return false;
    return slotDays.includes(d.getTime())
  };

  selectedDate: FormControl = new FormControl('');
  sub: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
    this.sub = this.selectedDate.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(selectedDate => this.selectedDay.emit(selectedDate));
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }


}
