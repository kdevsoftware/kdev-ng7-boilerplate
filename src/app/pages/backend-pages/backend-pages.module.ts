import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KdevSharedModule } from '@kdev/shared.module';

const routes = [
  {
    path: 'page-1',
    loadChildren: './backend-page1/backend-page1.module#BackendPage1Module'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule
  ]
})
export class BackendPagesModule { }
