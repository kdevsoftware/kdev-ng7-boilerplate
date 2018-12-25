import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { BackendPage2Component } from './backend-page2.component';

const routes: Routes = [
  {
    path: '**',
    component: BackendPage2Component
  }
];

@NgModule({
  declarations: [BackendPage2Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class BackendPage2Module { }
