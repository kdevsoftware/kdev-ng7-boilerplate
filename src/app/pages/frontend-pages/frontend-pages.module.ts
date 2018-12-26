import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KdevSharedModule } from '@kdev/shared.module';

const routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'page-1',
    loadChildren: './frontend-page1/frontend-page1.module#FrontendPage1Module'
  },
  {
    path: 'page-2',
    loadChildren: './frontend-page2/frontend-page2.module#FrontendPage2Module'
  },
  {
    path: 'page-3',
    loadChildren: './frontend-page3/frontend-page3.module#FrontendPage3Module'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule
  ]
})
export class FrontendPagesModule { }
