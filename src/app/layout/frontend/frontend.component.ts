import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KdevConfigService } from '@kdev/services/config.service';

@Component({
  selector: 'frontend-layout',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrontendComponent implements OnInit, OnDestroy
{
    kdevConfig: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {KdevConfigService} _kdevConfigService
     */
    constructor(
        private _kdevConfigService: KdevConfigService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._kdevConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.kdevConfig = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
