import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { KdevConfigService } from '@kdev/services/config.service';
import { KdevSidebarService } from '@kdev/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';

@Component({
    selector: 'frontend-toolbar',
    templateUrl: './frontend-toolbar.component.html',
    styleUrls: ['./frontend-toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FrontendToolbarComponent implements OnInit, OnDestroy {
    mobileMenu: Boolean = false;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _kdevConfigService: KdevConfigService,
        private _kdevSidebarService: KdevSidebarService,
        private _translateService: TranslateService,
        private _router: Router
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

    showMenu() {
        this.mobileMenu = true;
    }

    hideMenu() {
        this.mobileMenu = false;
    }

    navigateTo(route) {
        this._router.navigate(['frontend', route]);
        this.hideMenu();
    }
}
