import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'kdev-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class KdevConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<KdevConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<KdevConfirmDialogComponent>
    )
    {
    }

}
