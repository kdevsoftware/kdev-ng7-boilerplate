import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent {
    // Private
    _layout: string;

    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2
    ) {
        this._layout = 'frontend';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    get layout(): string {
        return this._layout;
    }

    @Input()
    set layout(value: string) {
        // Remove the old class name
        this._renderer.removeClass(this._elementRef.nativeElement, this.layout);

        // Store the layout value
        this._layout = value;

        // Add the new class name
        this._renderer.addClass(this._elementRef.nativeElement, value);
    }
}
