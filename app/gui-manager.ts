import {GuiContainer} from './gui-container';
export class GuiManager {
    private _guiParts:GuiContainer[];

    constructor() {
        this._guiParts = [];
    }

    get guiParts():GuiContainer[] {
        return this._guiParts;
    }

    set guiParts(value:GuiContainer[]) {
        this._guiParts = value;
    }

    addGuiPart(guiPart:GuiContainer) {
        this._guiParts.push(guiPart);
    }

}