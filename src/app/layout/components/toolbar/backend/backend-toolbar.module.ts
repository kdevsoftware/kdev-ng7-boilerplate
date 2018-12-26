import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { KdevSharedModule } from '@kdev/shared.module';

import { BackendToolbarComponent } from './backend-toolbar.component';

@NgModule({
    declarations: [
        BackendToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        KdevSharedModule,
    ],
    exports     : [
        BackendToolbarComponent
    ]
})
export class BackendToolbarModule
{
}
