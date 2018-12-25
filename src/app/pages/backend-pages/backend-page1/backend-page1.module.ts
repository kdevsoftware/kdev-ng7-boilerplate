import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { BackendPage1Component } from './backend-page1.component';

const routes: Routes = [
  {
    path: '**',
    component: BackendPage1Component
  }
];

@NgModule({
  declarations: [BackendPage1Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class BackendPage1Module { }
