import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({selector: '[flexibusAttributeHighlight]'})
export class FlexibusAttributeHighlightDirective {
    private _el:HTMLElement;
    private _defaultColor = 'red';

    constructor(el:ElementRef) {
        this._el = el.nativeElement;
    }

    @Input('flexibusAttributeHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color:string) {
        this._el.style.backgroundColor = color;
    }
}
