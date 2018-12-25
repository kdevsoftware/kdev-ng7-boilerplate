import { NgModule } from '@angular/core';

import { KdevHighlightComponent } from '@kdev/components/highlight/highlight.component';

@NgModule({
    declarations: [
        KdevHighlightComponent
    ],
    exports: [
        KdevHighlightComponent
    ],
})
export class KdevHighlightModule
{
}
