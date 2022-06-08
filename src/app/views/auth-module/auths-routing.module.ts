import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponentComponent} from "./components/sign-in-component/sign-in-component.component";

const routes: Routes = [
  {
    path: '', component: SignInComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthsRoutingModule { }
