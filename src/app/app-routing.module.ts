import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'frontend',
    loadChildren: './pages/frontend-pages/frontend-pages.module#FrontendPagesModule'
  },
  {
    path: 'backend',
    loadChildren: './pages/backend-pages/backend-pages.module#BackendPagesModule'
  },
  {
    path: '**',
    redirectTo: 'frontend'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
