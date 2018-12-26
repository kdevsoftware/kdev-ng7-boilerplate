import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { FrontendPage2Component } from './frontend-page2.component';

const routes: Routes = [
  {
    path: '**',
    component: FrontendPage2Component
  }
];

@NgModule({
  declarations: [FrontendPage2Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class FrontendPage2Module { }
