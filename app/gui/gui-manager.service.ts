/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from "@angular/core";
import {GuiManager} from "./gui-manager";
import {GuiContainer} from "./gui-container";
import {GuiItem} from "./gui-item";
import {FooForm} from "../foo-module/foo-form.component";

@Injectable()
export class GuiManagerService {
    guiManager:GuiManager = new GuiManager();

    constructor() {
        // let container = new GuiContainer(new GuiItem('Cartographie', CartoComponent));
        //
        // container.addLeftItem(new GuiItem('test1', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addRightItem(new GuiItem('test2', EasyComponent));
        // container.addRightItem(new GuiItem('test2', EasyComponent));
        // container.addRightItem(new GuiItem('test2', EasyComponent));

        let container2 = new GuiContainer(new GuiItem('FooForm', FooForm));


        // this.guiManager.addGuiContainer(container);
        this.guiManager.addGuiContainer(container2);
    }

    getGuiContainers():Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}