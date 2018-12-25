import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { KdevConfigService } from '@kdev/services/config.service';
import { KdevNavigationService } from '@kdev/components/navigation/navigation.service';
import { KdevPerfectScrollbarDirective } from '@kdev/directives/kdev-perfect-scrollbar/kdev-perfect-scrollbar.directive';
import { KdevSidebarService } from '@kdev/components/sidebar/sidebar.service';

@Component({
    selector: 'navbar-style-2',
    templateUrl: './style-2.component.html',
    styleUrls: ['./style-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarStyle2Component implements OnInit, OnDestroy {
    kdevConfig: any;
    navigation: any;

    private _kdevPerfectScrollbar: KdevPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _kdevConfigService: KdevConfigService,
        private _kdevNavigationService: KdevNavigationService,
        private _kdevSidebarService: KdevSidebarService,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }

    @ViewChild(KdevPerfectScrollbarDirective)
    set directive(theDirective: KdevPerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this._kdevPerfectScrollbar = theDirective;

        this._kdevNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._kdevPerfectScrollbar.update();
            });

        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                setTimeout(() => {
                    const activeNavItem: any = document.querySelector('navbar .nav-link.active');

                    if (activeNavItem) {
                        const activeItemOffsetTop = activeNavItem.offsetTop,
                            activeItemOffsetParentTop = activeNavItem.offsetParent.offsetTop,
                            scrollDistance = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3);

                        this._kdevPerfectScrollbar.scrollToTop(scrollDistance);
                    }
                });
            });
    }

    ngOnInit(): void {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                if (this._kdevSidebarService.getSidebar('navbar')) {
                    this._kdevSidebarService.getSidebar('navbar').close();
                }
            }
            );

        this._kdevNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._kdevNavigationService.getCurrentNavigation();
            });

        this._kdevConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.kdevConfig = config;
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpened(): void {
        this._kdevSidebarService.getSidebar('navbar').toggleOpen();
    }

    toggleSidebarFolded(): void {
        this._kdevSidebarService.getSidebar('navbar').toggleFold();
    }
}
