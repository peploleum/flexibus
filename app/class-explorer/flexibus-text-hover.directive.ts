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
        //'null' does not work in IE 11
        //another default color would work, but it should be possible to remove the background color property from the elementstyle
        this.changeStyle(null);
    }

    private changeStyle(color:string) {
        this._renderer.setElementStyle(this._el.nativeElement, 'cursor', 'pointer');
        this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', color);
    }
}
