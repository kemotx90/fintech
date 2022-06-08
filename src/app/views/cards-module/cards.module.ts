import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardListComponent} from "./components/card-list/card-list.component";
import {CardFormComponent} from "./components/card-form/card-form.component";
import {CardsComponentComponent} from "./components/cards-component/cards-component.component";
import {MaterialModule} from "../../shared/material/material.module";
import {PascalCasePipe} from "./pipe/pascal-case.pipe";
import {CardsRoutingModule} from "./cards-routing.module";



@NgModule({
  declarations: [
    CardListComponent,
    CardFormComponent,
    CardsComponentComponent,
    PascalCasePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
