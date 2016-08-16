import {Injectable} from '@angular/core';
import {GuiManager} from './gui-manager';
import {GuiContainer} from "./gui-container";
import {ExampleOnePart} from "./gui-example-one-part";
import {ExampleTwoPart} from "./gui-example-two-part";
@Injectable()
export class GuiManagerService {
    private guiManager = new GuiManager();

    constructor() {
        this.guiManager.addGuiPart(new ExampleOnePart());
        this.guiManager.addGuiPart(new ExampleTwoPart());
    }

    getGuiParts(): GuiContainer[] {
        return this.guiManager.guiParts;
    }
}