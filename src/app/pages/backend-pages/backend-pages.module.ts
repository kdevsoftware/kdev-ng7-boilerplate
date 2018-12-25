import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KdevSharedModule } from '@kdev/shared.module';

const routes = [
  {
    path: 'page-1',
    loadChildren: './backend-page1/backend-page1.module#BackendPage1Module'
  },
  {
    path: 'page-2',
    loadChildren: './backend-page2/backend-page2.module#BackendPage2Module'
  },
  {
    path: 'page-3',
    loadChildren: './backend-page3/backend-page3.module#BackendPage3Module'
  },
  {
    path: 'page-4',
    loadChildren: './folder/backend-page4/backend-page4.module#BackendPage4Module'
  },
  {
    path: 'page-5',
    loadChildren: './folder/backend-page5/backend-page5.module#BackendPage5Module'
  },
  {
    path: 'page-6',
    loadChildren: './folder/backend-page6/backend-page6.module#BackendPage6Module'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
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
