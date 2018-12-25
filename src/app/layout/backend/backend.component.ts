import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KdevConfigService } from '@kdev/services/config.service';
import { navigation } from 'app/navigation/navigation';

@Component({
  selector: 'backend-layout',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BackendComponent implements OnInit, OnDestroy
{
    kdevConfig: any;
    navigation: any;

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
        // Set the defaults
        this.navigation = navigation;

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
