/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable} from "@angular/core";
import {GuiManager} from "./gui/gui-manager";
import {GuiContainer} from "./gui-api/gui-container";
import {GuiItem} from "./gui-api/gui-item";
import {CartoComponent} from "./test-module/carto.component";
import {EasyComponent} from "./test-module/easiest-gui-component.component";
import {FooForm} from "./foo-module/foo-form.component";
import {ResultDisplayComponent} from "./test-module/result-display-component.component";
import {MapComponent} from "./map-module/map.component";
import {Foo} from "./foo-module/foo";
import {BarForm} from "./bar-module/bar-form.component";
import {FlexibusForm} from "./core-gui/flexibus-form.component";
import {TestGuiComponent} from "./test-module/test-gui-component.component";

@Injectable()
export class GuiManagerService {
    guiManager:GuiManager = new GuiManager();

    constructor() {
        let container = new GuiContainer("1er atelier", new GuiItem('Map', MapComponent));


        container.addLeftItem(new GuiItem('Plan de classement ', FooForm));
        container.addLeftItem(new GuiItem('Plan de classement 2', EasyComponent));
        // container.addLeftItem(new GuiItem('J. Peglion', FooForm));
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
        container.addRightItem(new GuiItem('Alléluia !', EasyComponent));
        // container.addRightItem(new GuiItem(new GuiItemDescriptor('Alléluia !', EasyComponent)));
        container.addRightItem(new GuiItem('Moteur de recherche', ResultDisplayComponent));

        let container2 = new GuiContainer('2nd atelier', new GuiItem('Form ', FlexibusForm));
        container2.addRightItem(new GuiItem('test left item', TestGuiComponent));


        this.guiManager.addGuiContainer(container2);
        this.guiManager.addGuiContainer(container);
    }

    getGuiContainers():Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }
}