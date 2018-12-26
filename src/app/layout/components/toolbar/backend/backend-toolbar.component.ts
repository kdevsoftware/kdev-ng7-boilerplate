import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { KdevConfigService } from '@kdev/services/config.service';
import { KdevSidebarService } from '@kdev/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';

@Component({
    selector: 'backend-toolbar',
    templateUrl: './backend-toolbar.component.html',
    styleUrls: ['./backend-toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class BackendToolbarComponent implements OnInit, OnDestroy {
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _kdevConfigService: KdevConfigService,
        private _kdevSidebarService: KdevSidebarService,
        private _translateService: TranslateService
    ) {
        this.navigation = navigation;

        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._kdevConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        this.selectedLanguage = _.find(this.languages, { 'id': this._translateService.currentLang });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpen(key): void {
        this._kdevSidebarService.getSidebar(key).toggleOpen();
    }
}
