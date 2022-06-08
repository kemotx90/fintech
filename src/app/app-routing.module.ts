import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./views/auth-module/auths.module').then(m => m.AuthsModule) },
  { path: 'dashboard', loadChildren: () => import('./core/navigation-module/navigations.module').then(m => m.NavigationsModule) },
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
