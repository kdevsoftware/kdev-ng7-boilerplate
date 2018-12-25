import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class LoginModule { }
