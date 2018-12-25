import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';
import { KdevSidebarModule } from '@kdev/components';

import { ContentModule } from 'app/layout/components/content/content.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { BackendComponent } from './backend.component';

@NgModule({
  declarations: [BackendComponent],
  imports: [
    RouterModule,
    KdevSharedModule,
    KdevSidebarModule,

    ContentModule,
    FooterModule,
    NavbarModule,
    ToolbarModule
  ],
  exports: [
    BackendComponent
  ]
})
export class BackendModule { }
