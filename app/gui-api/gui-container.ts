import {GuiItem} from "./gui-item";
/**
 * Created by tbonavia on 17/08/2016.
 */

export class GuiContainer {
    mainItem:GuiItem;
    leftItems:Array<GuiItem> = new Array();
    rightItems:Array<GuiItem> = new Array();

    constructor(mainItem:GuiItem) {
        this.mainItem = mainItem;
    }

    addLeftItem(item:GuiItem):void {
        this.leftItems.push(item);
    }

    addRightItem(item:GuiItem):void {
        this.rightItems.push(item);
    }
}