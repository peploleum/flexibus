import {Directive, ElementRef, Renderer, HostListener, Input} from "@angular/core";
import {FlexibusAction} from "../core/flexibus-action";

@Directive({selector: '[flexibus-button-hover]'})
export class FlexibusButtonHoverDirective {

    @Input() flexibusAction:FlexibusAction;

    constructor(private _el: ElementRef, private _renderer: Renderer) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this._renderer.setElementStyle(this._el.nativeElement, 'color', '#43D7FF;');
    }

    @HostListener('mouseleave') onMouseLeave() {
        //'null' does not work in IE 11
        //another default color would work, but it should be possible to remove the background color property from the elementstyle
        this._renderer.setElementStyle(this._el.nativeElement, 'color', null);
    }

}
