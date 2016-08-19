/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from '@angular/core';
import {GuiManager} from "./gui-manager";
import {GuiContainer} from "./gui-container";
import {GuiItem} from "./gui-item";
import {ExampleGuiComponent} from "../test-module/example-gui-component.component";
import {TestGuiComponent} from "../test-module/test-gui-component.component";
import {SimplePanelComponent} from "../panels/simple-panel.component";

@Injectable()
export class GuiManagerService {
    guiManager: GuiManager = new GuiManager();

    constructor() {
        let container = new GuiContainer(new GuiItem('Cartographie', SimplePanelComponent));

        container.addLeftItem(new GuiItem('test1', SimplePanelComponent));
        container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
        container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
        container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
        container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
        container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
        container.addRightItem(new GuiItem('test2', SimplePanelComponent));

        let container2 = new GuiContainer(new GuiItem('Test', TestGuiComponent));

        this.guiManager.addGuiContainer(container);
        /*this.guiManager.addGuiContainer(container2);*/
    }

    getGuiContainers(): Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}