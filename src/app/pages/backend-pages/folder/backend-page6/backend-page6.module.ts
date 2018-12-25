import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { BackendPage6Component } from './backend-page6.component';

const routes: Routes = [
  {
    path: '**',
    component: BackendPage6Component
  }
];

@NgModule({
  declarations: [BackendPage6Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class BackendPage6Module { }
