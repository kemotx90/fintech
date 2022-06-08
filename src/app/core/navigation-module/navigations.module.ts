import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/material/material.module";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {NavigationsRoutingModule} from "./navigations-routing.module";



@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavigationsRoutingModule
  ]
})
export class NavigationsModule { }
