import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'backend',
    loadChildren: './pages/backend-pages/backend-pages.module#BackendPagesModule'
  },
  {
    path: '**',
    redirectTo: 'backend/page-1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
