import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    RouterModule,
    KdevSharedModule,
  ],
  exports: [
    FrontendComponent
  ]
})
export class FrontendModule { }
