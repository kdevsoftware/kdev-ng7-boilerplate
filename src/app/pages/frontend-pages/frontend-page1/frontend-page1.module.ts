import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { FrontendPage1Component } from './frontend-page1.component';

const routes: Routes = [
  {
    path: '**',
    component: FrontendPage1Component
  }
];

@NgModule({
  declarations: [FrontendPage1Component],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class FrontendPage1Module { }
