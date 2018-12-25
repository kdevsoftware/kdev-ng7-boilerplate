import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '**',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
  ]
})
export class ProfileModule { }
