import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KdevConfigService } from '@kdev/services/config.service';
import { KdevNavigationService } from '@kdev/components/navigation/navigation.service';
import { KdevSidebarService } from '@kdev/components/sidebar/sidebar.service';
import { KdevSplashScreenService } from '@kdev/services/splash-screen.service';
import { KdevTranslationLoaderService } from '@kdev/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationTurkish } from 'app/navigation/i18n/tr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  kdevConfig: any;
  navigation: any;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _kdevSplashScreenService: KdevSplashScreenService,
    @Inject(DOCUMENT) private document: any,
    private _kdevConfigService: KdevConfigService,
    private _kdevNavigationService: KdevNavigationService,
    private _kdevSidebarService: KdevSidebarService,
    private _kdevTranslationLoaderService: KdevTranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform
  ) {

    this.navigation = navigation;

    this._kdevNavigationService.register('main', this.navigation);

    this._kdevNavigationService.setCurrentNavigation('main');

    this._translateService.addLangs(['en', 'tr']);

    this._translateService.setDefaultLang('en');

    this._kdevTranslationLoaderService.loadTranslations(navigationEnglish, navigationTurkish);

    this._translateService.use('en');

    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this._kdevConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.kdevConfig = config;

        if (this.kdevConfig.layout.width === 'boxed') {
          this.document.body.classList.add('boxed');
        }
        else {
          this.document.body.classList.remove('boxed');
        }

        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.kdevConfig.colorTheme);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  toggleSidebarOpen(key): void {
    this._kdevSidebarService.getSidebar(key).toggleOpen();
  }
}
