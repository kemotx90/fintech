import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CardObjectService} from "../../../../service/card-object.service";
import {Location} from "../../../../models/location";
import {DayWithSlots, generateDateFromString} from "../../../../models/day-with-slots";
import {BehaviorSubject, distinctUntilChanged, EMPTY, filter, map, Observable, switchMap, tap} from "rxjs";
import {DayWithSlot} from "../../../../models/day-with-slot";
import {MatDialog} from "@angular/material/dialog";
import {AppointmentConfirmComponent} from "../appointment-confirm/appointment-confirm.component";
import {SnackbarService} from "../../../../service/snackbar.service";
import {MatDrawer} from "@angular/material/sidenav";
import {AppointmentsService} from "../../../../service/appointments.service";

@Component({
  selector: 'dc-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentsComponent implements OnInit {

  locations$: Observable<Location[]> = this.appointmentService.getLocations();
  selectedLocation$: BehaviorSubject<Location | null> = new BehaviorSubject<Location | null>(null);

  dayWithSlots$: Observable<DayWithSlots[]> = this.selectedLocation$.pipe(
    distinctUntilChanged(),
    switchMap(location => !location ? EMPTY : this.appointmentService.getLocationSlots(location._id))
  );

  slotHour$: BehaviorSubject<Array<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24> | null> = new BehaviorSubject<Array<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24> | null>(null);
  selectedDayWithSlot$: BehaviorSubject<DayWithSlot | null> = new BehaviorSubject<DayWithSlot | null>(null);

  constructor(private dialog: MatDialog, private snackBar: SnackbarService, private appointmentService: AppointmentsService, private fakeLocations: CardObjectService) { }

  ngOnInit(): void {
  }

  selectedLocation(location: Location, drawer: MatDrawer) {
    console.log("in appount", location)
    this.selectedLocation$.next(location);
    drawer.toggle(true);
  }

  selectedDate(selectedDate: Date) {
    this.dayWithSlots$.pipe(
      map(daysWithSlots => daysWithSlots.filter(dayWithSlot => generateDateFromString(dayWithSlot.day).getTime() === selectedDate.getTime())),
      switchMap(dayWithSlots => dayWithSlots.map(dayWithSlot => dayWithSlot.slots)),
      tap(slots => this.slotHour$.next(slots))
    ).subscribe();

    /*const selectedIndex = this.dayWithSlots.findIndex(dayWithSlot => generateDateFromString(dayWithSlot.day).getTime() === selectedDate.getTime());
    this.slotHour$.next(this.dayWithSlots[selectedIndex].slots);*/

    /*const dayWithSlot = {} as DayWithSlot;
    dayWithSlot.day = this.dayWithSlots[selectedIndex].day;
    this.selectedDayWithSlot$.next(dayWithSlot);*/
  }

  selectSlot(slot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24) {
    const dayWithSlot = this.selectedDayWithSlot$.getValue()!;
    dayWithSlot.slot = slot;
    this.selectedDayWithSlot$.next(dayWithSlot);
    this.openConfirmationDialog();
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(AppointmentConfirmComponent, {
      data: { day: this.selectedDayWithSlot$.getValue()?.day, slot: this.selectedDayWithSlot$.getValue()?.slot }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.snackBar.open("Appuntamento confermato!");
      }
    });
  }

}
