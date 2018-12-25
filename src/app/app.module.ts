import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KdevModule } from '@kdev/kdev.module';
import { KdevSharedModule } from '@kdev/shared.module';
import { KdevProgressBarModule, KdevSidebarModule} from '@kdev/components';
import { kdevConfig } from 'app/kdev-config';
import { FakeDbService } from 'app/fake-db/fake-db.service';

import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TranslateModule.forRoot(),
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    KdevModule.forRoot(kdevConfig),
    KdevProgressBarModule,
    KdevSharedModule,
    KdevSidebarModule,

    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
