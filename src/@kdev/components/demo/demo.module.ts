import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule } from '@angular/material';

import { KdevDemoContentComponent } from './demo-content/demo-content.component';
import { KdevDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        KdevDemoContentComponent,
        KdevDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        KdevDemoContentComponent,
        KdevDemoSidebarComponent
    ]
})
export class KdevDemoModule
{
}
