import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';
import { KdevSidebarModule } from '@kdev/components';

import { ContentModule } from 'app/layout/components/content/content.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    RouterModule,
    KdevSharedModule,
    KdevSidebarModule,

    ContentModule,
    FooterModule,
    ToolbarModule
  ],
  exports: [
    FrontendComponent
  ]
})
export class FrontendModule { }
