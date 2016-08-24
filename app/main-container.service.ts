/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from "@angular/core";
import {GuiManager} from "./gui/gui-manager";
import {GuiContainer} from "./gui-api/gui-container";
import {GuiItem, GuiItemDescriptor, GuiItemType} from "./gui-api/gui-item";
import {CartoComponent} from "./test-module/carto.component";
import {EasyComponent} from "./test-module/easiest-gui-component.component";
import {FooForm} from "./foo-module/foo-form.component";
import {ResultDisplayComponent} from "./test-module/result-display-component.component";

@Injectable()
export class GuiManagerService {
    guiManager:GuiManager = new GuiManager();

    constructor() {
        let container = new GuiContainer("1er atelier", new GuiItem(new GuiItemDescriptor('Cartographie', CartoComponent)));


        container.addLeftItem(new GuiItem(new GuiItemDescriptor('Plan de classement ', EasyComponent, GuiItemType.error)));
        container.addLeftItem(new GuiItem(new GuiItemDescriptor('Plan de classement 2', EasyComponent, GuiItemType.warning)));
        container.addLeftItem(new GuiItem(new GuiItemDescriptor('J. Peglion', FooForm)));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
        // container.addLeftItem(new GuiItem('test3', EasyComponent));
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
        container.addRightItem(new GuiItem(new GuiItemDescriptor('Alléluia !', EasyComponent, GuiItemType.warning)));
        container.addRightItem(new GuiItem(new GuiItemDescriptor('Alléluia !', EasyComponent, GuiItemType.warning)));
        container.addRightItem(new GuiItem(new GuiItemDescriptor('Moteur de recherche', ResultDisplayComponent)));

        let container2 = new GuiContainer('2nd atelier', new GuiItem(new GuiItemDescriptor('Plan de classement ', EasyComponent, GuiItemType.error)));
        // container2.addLeftItem(new GuiItem('test left item', ResultDisplayComponent));
        // container2.addRightItem(new GuiItem('test left item', TestGuiComponent));


        this.guiManager.addGuiContainer(container);
        this.guiManager.addGuiContainer(container2);
    }

    getGuiContainers():Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}