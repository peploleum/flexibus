import {Directive, ElementRef, Input, HostListener, Renderer} from '@angular/core';

@Directive({selector: '[flexibusTextHover]'})
export class FlexibusTextHoverDirective {
    private _defaultColor = 'yellow';

    constructor(private _el:ElementRef, private _renderer:Renderer) {
    }

    @Input('flexibusTextHover') highlightColor:string;

    @HostListener('mouseenter') onMouseEnter() {
        this.changeStyle(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.changeStyle(null);
    }

    private changeStyle(color:string) {
        this._renderer.setElementStyle(this._el.nativeElement, 'cursor', 'pointer');
        this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', color);
    }
}
