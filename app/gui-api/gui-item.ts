import {IGuiComponent} from "../gui/gui-component";

export class GuiItem {
    name:string;
    componentType:IGuiComponent;

    constructor(name:string, componentType:IGuiComponent) {
        this.name = name;
        this.componentType = componentType;
    }
}