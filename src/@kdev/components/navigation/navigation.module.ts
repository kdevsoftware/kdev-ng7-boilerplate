import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { KdevNavigationComponent } from './navigation.component';
import { KdevNavVerticalItemComponent } from './vertical/item/item.component';
import { KdevNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { KdevNavVerticalGroupComponent } from './vertical/group/group.component';
import { KdevNavHorizontalItemComponent } from './horizontal/item/item.component';
import { KdevNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        KdevNavigationComponent
    ],
    declarations: [
        KdevNavigationComponent,
        KdevNavVerticalGroupComponent,
        KdevNavVerticalItemComponent,
        KdevNavVerticalCollapsableComponent,
        KdevNavHorizontalItemComponent,
        KdevNavHorizontalCollapsableComponent
    ]
})
export class KdevNavigationModule
{
}
