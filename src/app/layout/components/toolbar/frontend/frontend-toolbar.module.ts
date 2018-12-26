import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { KdevSharedModule } from '@kdev/shared.module';

import { FrontendToolbarComponent } from './frontend-toolbar.component';

@NgModule({
    declarations: [
        FrontendToolbarComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        KdevSharedModule,
    ],
    exports: [
        FrontendToolbarComponent
    ]
})
export class FrontendToolbarModule {
}
