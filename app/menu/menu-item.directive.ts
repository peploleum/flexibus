import {Directive, ElementRef, Renderer, HostListener, ComponentFactoryResolver, ViewContainerRef} from "@angular/core";
import {MenuComponent} from "./menu.component";

@Directive({selector: '[menu-item]'})
export class MenuItemDirective {


    constructor(private _el: ElementRef, private _renderer: Renderer, private cfr: ComponentFactoryResolver, private viewContainer: ViewContainerRef) {
    }

    @HostListener('mouseup') onMouseEnter() {
        console.log('popping menu component');
        let menuComponentFactory = this.cfr.resolveComponentFactory(MenuComponent);
        this.viewContainer.createComponent(menuComponentFactory);
    }

}
