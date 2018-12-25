import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';

import { FooterComponent } from 'app/layout/components/footer/footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        RouterModule,
        KdevSharedModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
}
