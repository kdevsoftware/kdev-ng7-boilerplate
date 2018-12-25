import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { KdevSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        KdevSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        KdevSearchBarComponent
    ]
})
export class KdevSearchBarModule
{
}
