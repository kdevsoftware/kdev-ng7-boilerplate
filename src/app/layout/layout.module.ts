import { NgModule } from '@angular/core';

import { FrontendModule } from './frontend/frontend.module';
import { BackendModule } from './backend/backend.module';

@NgModule({
  declarations: [],
  imports: [
    FrontendModule,
    BackendModule
  ],
  exports: [
    FrontendModule,
    BackendModule
  ]
})
export class LayoutModule { }
