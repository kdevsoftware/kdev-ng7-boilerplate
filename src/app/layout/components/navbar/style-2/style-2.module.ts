import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { KdevNavigationModule } from '@kdev/components';
import { KdevSharedModule } from '@kdev/shared.module';

import { NavbarStyle2Component } from 'app/layout/components/navbar/style-2/style-2.component';

@NgModule({
    declarations: [
        NavbarStyle2Component
    ],
    imports: [
        MatButtonModule,
        MatIconModule,

        KdevSharedModule,
        KdevNavigationModule
    ],
    exports: [
        NavbarStyle2Component
    ]
})
export class NavbarStyle2Module {
}
