import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { KdevConfirmDialogComponent } from '@kdev/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        KdevConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        KdevConfirmDialogComponent
    ],
})
export class KdevConfirmDialogModule
{
}
