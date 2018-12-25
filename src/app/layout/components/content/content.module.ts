import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KdevSharedModule } from '@kdev/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        KdevSharedModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
