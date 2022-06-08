import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "../../../../models/location";
import {CardObjectService} from "../../../../service/card-object.service";

@Component({
  selector: 'dc-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationListComponent implements OnInit {
  @Input() locations: Location[] | null = null;
  @Output() selectedLocation: EventEmitter<Location> = new EventEmitter<Location>();

  constructor() { }

  ngOnInit(): void {
  }

}
