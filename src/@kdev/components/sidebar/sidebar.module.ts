import { NgModule } from '@angular/core';

import { KdevSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        KdevSidebarComponent
    ],
    exports     : [
        KdevSidebarComponent
    ]
})
export class KdevSidebarModule
{
}
