/**
 * Created by tbonavia on 17/08/2016.
 */
import {IGuiComponent} from "../gui/gui-component";

export class GuiItem {
    descriptor:GuiItemDescriptor;

    constructor(descriptor:GuiItemDescriptor) {
        this.descriptor = descriptor;
    }
}

export class GuiItemDescriptor {
    name:string;
    componentType:IGuiComponent;
    type:GuiItemType = GuiItemType.normal;

    constructor(name:string, componentType:IGuiComponent, type?:GuiItemType) {
        this.name = name;
        this.componentType = componentType;
        if(type){
            this.type = type;
        }
    }
}

export enum GuiItemType {
    normal,
    warning,
    error
}