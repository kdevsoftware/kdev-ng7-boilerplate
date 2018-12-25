import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { BackendPage5Component } from './backend-page5.component';

const routes: Routes = [
  {
    path: '**',
    component: BackendPage5Component
  }
];

@NgModule({
  declarations: [BackendPage5Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class BackendPage5Module { }
