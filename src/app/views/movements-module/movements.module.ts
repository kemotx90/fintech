import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/material/material.module";
import {MovementComponent} from "./components/movement/movement.component";
import {MovementsComponent} from "./components/movements/movements.component";
import {LazyShowMovementPipe} from "./pipe/lazy-show-movement.pipe";
import {MovementsRoutingModule} from "./movements-routing.module";



@NgModule({
  declarations: [
    MovementComponent,
    MovementsComponent,
    LazyShowMovementPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovementsRoutingModule
  ]
})
export class MovementsModule { }
