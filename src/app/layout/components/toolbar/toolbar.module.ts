import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';
import { FrontendToolbarModule } from './frontend/frontend-toolbar.module';
import { BackendToolbarModule } from './backend/backend-toolbar.module';

import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        KdevSharedModule,

        FrontendToolbarModule,
        BackendToolbarModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
