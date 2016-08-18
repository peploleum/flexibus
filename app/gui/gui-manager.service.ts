/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from '@angular/core';
import {GuiManager} from "./gui-manager";
import {GuiContainer} from "./gui-container";
import {GuiItem} from "./gui-item";
import {ExampleGuiComponent} from "../test-module/example-gui-component.component";


@Injectable()
export class GuiManagerService {
    guiManager: GuiManager = new GuiManager();

    constructor() {
        let container = new GuiContainer(new GuiItem('Carto', ExampleGuiComponent));
        container.addLeftItem(new GuiItem('test1', ExampleGuiComponent));
        container.addLeftItem(new GuiItem('test3', ExampleGuiComponent));
        container.addLeftItem(new GuiItem('test3', ExampleGuiComponent));
        container.addLeftItem(new GuiItem('test3', ExampleGuiComponent));
        container.addLeftItem(new GuiItem('test3', ExampleGuiComponent));
        container.addLeftItem(new GuiItem('test3', ExampleGuiComponent));
        container.addRightItem(new GuiItem('test2', ExampleGuiComponent));


        this.guiManager.addGuiContainer(container);
    }

    getGuiContainers(): Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}