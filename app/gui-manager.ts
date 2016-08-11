import {GuiPart} from './gui-part';
export class GuiManager {
    private _guiParts:GuiPart[];

    constructor() {
        this._guiParts = [];
    }

    get guiParts():GuiPart[] {
        return this._guiParts;
    }

    set guiParts(value:GuiPart[]) {
        this._guiParts = value;
    }

    addGuiPart(guiPart:GuiPart) {
        this._guiParts.push(guiPart);
    }

}