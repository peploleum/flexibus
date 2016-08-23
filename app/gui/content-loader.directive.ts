/**
 * Created by tbonavia on 23/08/2016.
 */

import {Directive, Input, ComponentFactoryResolver, ViewContainerRef, ComponentRef} from "@angular/core";
import {GuiComponent, IGuiComponent} from "./gui-component";
@Directive({
    selector: '[contentLoader]'
})
export class ContentLoader {
    private _component: ComponentRef<GuiComponent>;

    constructor(private cfr:ComponentFactoryResolver, private viewContainer:ViewContainerRef) {

    }

    get component(){
        return this._component;
    }

    @Input() set contentLoader(componentType:IGuiComponent) {
        if (componentType) {
            let factory = this.cfr.resolveComponentFactory(componentType);
            this._component = this.viewContainer.createComponent(factory);
        } else {
            throw new Error('Aucun composant à charger');
        }
    }
}