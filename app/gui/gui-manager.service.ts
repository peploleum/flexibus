/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from '@angular/core';
import {GuiManager} from "./gui-manager";
import {GuiContainer} from "./gui-container";
import {GuiItem} from "./gui-item";
import {ExampleGuiComponent} from "./examples/ExampleGuiComponent";


@Injectable()
export class GuiManagerService {
    guiManager: GuiManager = new GuiManager();

    constructor() {
        this.guiManager.addGuiContainer(new GuiContainer(new GuiItem('Carto', ExampleGuiComponent)));
    }

    getGuiContainers(): Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}