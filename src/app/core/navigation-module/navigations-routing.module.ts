import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'cards', loadChildren: () => import('../../views/cards-module/cards.module').then(m => m.CardsModule) },
  { path: 'movements', loadChildren: () => import('../../views/movements-module/movements.module').then(m => m.MovementsModule) },
  { path: 'appointments', loadChildren: () => import('../../views/appointments-module/appointments.module').then(m => m.AppointmentsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationsRoutingModule { }
