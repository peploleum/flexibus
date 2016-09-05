/**
 * Created by tbonavia on 18/08/2016.
 */
import {Injectable, EventEmitter} from "@angular/core";
import {GuiManager} from "./gui/gui-manager";
import {GuiContainer} from "./gui-api/gui-container";
import {GuiItem} from "./gui-api/gui-item";
import {EasyComponent} from "./test-module/easiest-gui-component.component";
import {FooForm} from "./foo-module/foo-form.component";
import {ResultDisplayComponent} from "./test-module/result-display-component.component";
import {MapComponent} from "./map-module/map.component";
import {FlexibusForm} from "./core-gui/flexibus-form.component";
import {TestGuiComponent} from "./test-module/test-gui-component.component";
import {FooFormPolymer} from "./foo-module-polymer/foo-form-polymer.component";

@Injectable()
export class GuiManagerService {
    guiManager:GuiManager = new GuiManager();

    containerEmmitter:EventEmitter<GuiContainer> = new EventEmitter<GuiContainer>();

    constructor() {
    }

    addContainer(name:string) {
        console.log('opening ' + name);
        switch (name) {
            case 'MAP' :
            {
                let container = new GuiContainer("Map", new GuiItem('Map', MapComponent));
                container.addLeftItem(new GuiItem('Form', FooForm));
                container.addLeftItem(new GuiItem('Test componenet', EasyComponent));
                container.addRightItem(new GuiItem('Alléluia !', EasyComponent));
                this.guiManager.addGuiContainer(container);
                this.containerEmmitter.emit(container);
                break;
            }
            case 'FORM' :
            {
                let container = new GuiContainer("Form", new GuiItem('Form', FlexibusForm));
                container.addLeftItem(new GuiItem('Test', TestGuiComponent));
                container.addLeftItem(new GuiItem('Polymer Form', FooFormPolymer));
                container.addRightItem(new GuiItem('Right Form', FlexibusForm));
                this.guiManager.addGuiContainer(container);
                this.containerEmmitter.emit(container);
                break;
            }
            case 'SEARCH' :
            {
                let container = new GuiContainer("Search", new GuiItem('Form', FlexibusForm));
                container.addLeftItem(new GuiItem('Test', TestGuiComponent));
                container.addRightItem(new GuiItem('Search', ResultDisplayComponent));
                this.guiManager.addGuiContainer(container);
                this.containerEmmitter.emit(container);
                break;
            }
            default :
            {
            }
        }
    }

    getGuiContainers():Array<GuiContainer> {
        return this.guiManager.getGuiContainers();
    }

}