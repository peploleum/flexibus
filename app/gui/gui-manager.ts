/**
 * Created by tbonavia on 17/08/2016.
 */
import {GuiContainer} from "../gui-api/gui-container";

export class GuiManager {
    containers: Array<GuiContainer> = new Array<GuiContainer>();

    addGuiContainer(container: GuiContainer): void {
        this.containers.push(container);
    }

    getGuiContainers(): Array<GuiContainer> {
        return this.containers;
    }
}