import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { KdevProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        KdevProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports     : [
        KdevProgressBarComponent
    ]
})
export class KdevProgressBarModule
{
}
