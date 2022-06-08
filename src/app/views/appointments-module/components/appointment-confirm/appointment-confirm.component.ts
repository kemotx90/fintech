import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DayWithSlot} from "../../../../models/day-with-slot";

@Component({
  selector: 'dc-appointment-confirm',
  templateUrl: './appointment-confirm.component.html',
  styleUrls: ['./appointment-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentConfirmComponent implements OnInit {

  selectedDayWithSlot: DayWithSlot | null = null;

  constructor(public dialogRef: MatDialogRef<AppointmentConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: DayWithSlot) { }

  ngOnInit(): void {
    this.selectedDayWithSlot = this.data;
  }

}
