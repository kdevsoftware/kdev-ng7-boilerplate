import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { FrontendPage3Component } from './frontend-page3.component';

const routes: Routes = [
  {
    path: '**',
    component: FrontendPage3Component
  }
];

@NgModule({
  declarations: [FrontendPage3Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class FrontendPage3Module { }
