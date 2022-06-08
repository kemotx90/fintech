import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/material/material.module";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {SignInComponentComponent} from "./components/sign-in-component/sign-in-component.component";
import {AuthsRoutingModule} from "./auths-routing.module";
import {StrengthPasswordPipe} from "./pipe/strength-password.pipe";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SignInComponentComponent,
    StrengthPasswordPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthsRoutingModule
  ]
})
export class AuthsModule { }
