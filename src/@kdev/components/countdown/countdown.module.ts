import { NgModule } from '@angular/core';

import { KdevCountdownComponent } from '@kdev/components/countdown/countdown.component';

@NgModule({
    declarations: [
        KdevCountdownComponent
    ],
    exports: [
        KdevCountdownComponent
    ],
})
export class KdevCountdownModule
{
}
