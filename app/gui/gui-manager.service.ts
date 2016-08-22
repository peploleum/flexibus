/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from "@angular/core";
import {GuiManager} from "./gui-manager";
import {GuiContainer} from "./gui-container";
import {GuiItem} from "./gui-item";
import {TestGuiComponent} from "../test-module/test-gui-component.component";
import {AnotherTestGuiComponent} from "../test-module/another-test-gui-component.component";
import {CartoComponent} from "../test-module/carto.component";
import {ResultDisplayComponent} from "../test-module/result-display-component.component";

@Injectable()
export class GuiManagerService {
    guiManager:GuiManager = new GuiManager();

    constructor() {
        let container = new GuiContainer(new GuiItem('Cartographie', CartoComponent));


        container.addLeftItem(new GuiItem('test1', CartoComponent));
        container.addLeftItem(new GuiItem('test3', CartoComponent));
        /*container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
         container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
         container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
         container.addLeftItem(new GuiItem('test3', SimplePanelComponent));
         container.addRightItem(new GuiItem('test2', SimplePanelComponent));
         container.addRightItem(new GuiItem('test2', SimplePanelComponent));
         container.addRightItem(new GuiItem('test2', SimplePanelComponent));
         */
         let container2 = new GuiContainer(new GuiItem('Test', AnotherTestGuiComponent));
         container2.addLeftItem(new GuiItem('test left item', ResultDisplayComponent));
         container2.addRightItem(new GuiItem('test left item', TestGuiComponent));


        // this.guiManager.addGuiContainer(container);
        this.guiManager.addGuiContainer(container2);
    }

    getGuiContainers():Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}