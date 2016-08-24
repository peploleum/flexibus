/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from "@angular/core";
import {GuiManager} from "./gui/gui-manager";
import {GuiContainer} from "./gui-api/gui-container";
import {GuiItem} from "./gui-api/gui-item";
import {TestGuiComponent} from "./test-module/test-gui-component.component";
import {AnotherTestGuiComponent} from "./test-module/another-test-gui-component.component";
import {CartoComponent} from "./test-module/carto.component";
import {ResultDisplayComponent} from "./test-module/result-display-component.component";
import {EasyComponent} from "./test-module/easiest-gui-component.component";
import {SearchComponent} from "./test-module/search-component.component";
import {FooForm} from "./foo-module/foo-form.component";

@Injectable()
export class GuiManagerService {
    guiManager:GuiManager = new GuiManager();

    constructor() {
        let container = new GuiContainer(new GuiItem('Carte', CartoComponent));


        // container.addLeftItem(new GuiItem('test3', CartoComponent));
        // container.addLeftItem(new GuiItem('test3', TestGuiComponent));
        container.addRightItem(new GuiItem('Form', FooForm));
        container.addLeftItem(new GuiItem('other', AnotherTestGuiComponent));
        container.addLeftItem(new GuiItem('test3', ResultDisplayComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addRightItem(new GuiItem('test2', EasyComponent));
        // container.addRightItem(new GuiItem('test2', EasyComponent));
        // container.addRightItem(new GuiItem('test2', EasyComponent));

        // let container2 = new GuiContainer(new GuiItem('Test', AnotherTestGuiComponent));
        // container2.addLeftItem(new GuiItem('test left item', ResultDisplayComponent));
        // container2.addRightItem(new GuiItem('test left item', TestGuiComponent));


        this.guiManager.addGuiContainer(container);
        // this.guiManager.addGuiContainer(container2);
    }

    getGuiContainers():Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}