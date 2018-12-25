import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[kdevWidgetToggle]'
})
export class KdevWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
