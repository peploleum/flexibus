import {GuiItem} from "./gui-item";
import {UUID} from "angular2-uuid";

export class GuiContainer {
    title:string;
    mainItem:GuiItem;
    leftItems:Array<GuiItem> = new Array();
    rightItems:Array<GuiItem> = new Array();
    loaded:boolean = false;
    active:boolean = false;

    id: UUID = UUID.UUID();

    constructor(title:string, mainItem:GuiItem) {
        this.title = title;
        this.mainItem = mainItem;
    }

    addLeftItem(item:GuiItem):void {
        this.leftItems.push(item);
    }

    addRightItem(item:GuiItem):void {
        this.rightItems.push(item);
    }
}

enum Side {
    Left,
    Right
}