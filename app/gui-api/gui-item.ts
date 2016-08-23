/**
 * Created by tbonavia on 17/08/2016.
 */
import {IGuiComponent} from "../gui/gui-component";

export class GuiItem {
    name:string;
    componentType:IGuiComponent;

    constructor(name:string, componentType:IGuiComponent) {
        this.name = name;
        this.componentType = componentType;
    }
}