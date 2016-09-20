import {Directive, ElementRef, Renderer, HostListener, HostBinding} from "@angular/core";

@Directive({selector: '[hoverable]'})
export class HoverableDirective {

    // hoverColor:string = '#e9e9f3';
    hoverColor:string = '#EFEFF2';

    constructor(private _el: ElementRef, private _renderer: Renderer) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.changeStyle(this.hoverColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        //'null' does not work in IE 11
        //another default color would work, but it should be possible to remove the background color property from the elementstyle
        this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', null);
        this._renderer.setElementClass(this._el.nativeElement, 'unselectable', true);
        this._renderer.setElementClass(this._el.nativeElement, 'selectable', false);
    }

    private changeStyle(color:string) {
        this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', color);
        this._renderer.setElementStyle(this._el.nativeElement, 'transition-duration', '.5s');
        this._renderer.setElementClass(this._el.nativeElement, 'selectable', true);
        this._renderer.setElementClass(this._el.nativeElement, 'unselectable', false);

    }
}
