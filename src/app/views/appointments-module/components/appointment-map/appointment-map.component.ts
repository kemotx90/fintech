import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Location} from "../../../../models/location";
import {Observable, of} from "rxjs";

@Component({
  selector: 'dc-appointment-map',
  templateUrl: './appointment-map.component.html',
  styleUrls: ['./appointment-map.component.scss']
})
export class AppointmentMapComponent implements OnInit, AfterViewInit {
  @Input('location') location$: Observable<Location | null> = of(null);

  map: L.Map | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log("aaaa")
  }

  ngAfterViewInit(): void {
    console.log("in map", this.location$)
    //if(!this.location?.coords) { return; }

    this.map = L.map('map').setView([28.644800, 77.216721], 5);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.locateMap();
  }

  private locateMap() {
    this.location$?.subscribe({
      next: location => {
        if(location) { this.map?.setView(location.coords); }
      }
    })
  }

}
