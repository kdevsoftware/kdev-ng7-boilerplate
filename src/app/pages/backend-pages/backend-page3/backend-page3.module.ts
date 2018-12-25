import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { BackendPage3Component } from './backend-page3.component';

const routes: Routes = [
  {
    path: '**',
    component: BackendPage3Component
  }
];

@NgModule({
  declarations: [BackendPage3Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class BackendPage3Module { }
