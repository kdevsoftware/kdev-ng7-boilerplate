import { NgModule } from '@angular/core';

import { KdevWidgetComponent } from './widget.component';
import { KdevWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        KdevWidgetComponent,
        KdevWidgetToggleDirective
    ],
    exports     : [
        KdevWidgetComponent,
        KdevWidgetToggleDirective
    ],
})
export class KdevWidgetModule
{
}
