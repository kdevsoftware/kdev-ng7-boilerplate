import { NgModule } from '@angular/core';

import { KdevIfOnDomDirective } from '@kdev/directives/kdev-if-on-dom/kdev-if-on-dom.directive';
import { KdevInnerScrollDirective } from '@kdev/directives/kdev-inner-scroll/kdev-inner-scroll.directive';
import { KdevPerfectScrollbarDirective } from '@kdev/directives/kdev-perfect-scrollbar/kdev-perfect-scrollbar.directive';
import { KdevMatSidenavHelperDirective, KdevMatSidenavTogglerDirective } from '@kdev/directives/kdev-mat-sidenav/kdev-mat-sidenav.directive';

@NgModule({
    declarations: [
        KdevIfOnDomDirective,
        KdevInnerScrollDirective,
        KdevMatSidenavHelperDirective,
        KdevMatSidenavTogglerDirective,
        KdevPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        KdevIfOnDomDirective,
        KdevInnerScrollDirective,
        KdevMatSidenavHelperDirective,
        KdevMatSidenavTogglerDirective,
        KdevPerfectScrollbarDirective
    ]
})
export class KdevDirectivesModule
{
}
