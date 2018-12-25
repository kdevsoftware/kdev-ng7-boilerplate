import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { KdevNavigationModule } from '@kdev/components';
import { KdevSharedModule } from '@kdev/shared.module';

import { NavbarStyle1Component } from 'app/layout/components/navbar/style-1/style-1.component';

@NgModule({
    declarations: [
        NavbarStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        KdevSharedModule,
        KdevNavigationModule
    ],
    exports     : [
        NavbarStyle1Component
    ]
})
export class NavbarStyle1Module
{
}
