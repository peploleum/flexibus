import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({selector: '[flexibusAttribute]'})
export class FlexibusAttributeDirective {
    private _el:HTMLElement;
    private _defaultColor = 'red';

    constructor(el:ElementRef) {
        this._el = el.nativeElement;
    }

    @Input('flexibusAttribute') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color:string) {
        this._el.style.backgroundColor = color;
        // let htmlElement = new HTMLElement();
        // htmlElement.innerHTML = '<p>salut</p>';
        // this._el.insertAdjacentElement("0", htmlElement)
    }
}
