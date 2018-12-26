import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';
import { KdevHighlightModule } from '@kdev/components';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
    KdevHighlightModule,
  ]
})
export class HomeModule { }
