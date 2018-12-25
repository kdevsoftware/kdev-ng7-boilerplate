import { NgModule } from '@angular/core';
import { KdevSharedModule } from '@kdev/shared.module';
import { NavbarStyle1Module } from 'app/layout/components/navbar/style-1/style-1.module';
import { NavbarStyle2Module } from 'app/layout/components/navbar/style-2/style-2.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        KdevSharedModule,

        NavbarStyle1Module,
        NavbarStyle2Module,
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
