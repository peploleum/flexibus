import {GuiContainer} from "../gui-api/gui-container";

export class GuiManager {
    containers:Array<GuiContainer> = new Array<GuiContainer>();

    addGuiContainer(container:GuiContainer):void {
        this.containers.push(container);
    }

    getGuiContainers():Array<GuiContainer> {
        return this.containers;
    }

    countLoadedContainers() {
        return this.containers.filter((cont) => cont.loaded).length;
    }

    loadedContainers(){
        return this.containers.filter((cont) => cont.loaded);
    }
}