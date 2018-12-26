import { NgModule } from '@angular/core';
import { KdevSharedModule } from '@kdev/shared.module';
import { FrontendToolbarModule } from 'app/layout/components/toolbar/frontend/frontend-toolbar.module';
import { BackendToolbarModule } from 'app/layout/components/toolbar/backend/backend-toolbar.module';

import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        KdevSharedModule,

        FrontendToolbarModule,
        BackendToolbarModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {
}
