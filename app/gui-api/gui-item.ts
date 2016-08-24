/**
 * Created by tbonavia on 17/08/2016.
 */
import {IGuiComponent} from "../gui/gui-component";
import {PanelType} from "../gui/simple-panel.component";

export class GuiItem {
    descriptor:GuiItemDescriptor;

    constructor(descriptor:GuiItemDescriptor) {
        this.descriptor = descriptor;
    }
}

export class GuiItemDescriptor {
    name:string;
    componentType:IGuiComponent;
    type:PanelType = PanelType.normal;

    constructor(name:string, componentType:IGuiComponent, type?:PanelType) {
        this.name = name;
        this.componentType = componentType;
        if(type){
            this.type = type;
        }
    }
}