import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';
import { KdevSidebarModule } from '@kdev/components';

import { BackendComponent } from './backend.component';

@NgModule({
  declarations: [BackendComponent],
  imports: [
    RouterModule,
    KdevSharedModule,
    KdevSidebarModule
  ],
  exports: [
    BackendComponent
  ]
})
export class BackendModule { }
