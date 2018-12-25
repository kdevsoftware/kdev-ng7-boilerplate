import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { BackendPage4Component } from './backend-page4.component';

const routes: Routes = [
  {
    path: '**',
    component: BackendPage4Component
  }
];

@NgModule({
  declarations: [BackendPage4Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class BackendPage4Module { }
