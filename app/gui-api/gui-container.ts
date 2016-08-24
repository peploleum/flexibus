import {GuiItem, GuiItemDescriptor} from "./gui-item";
import {UUID} from "angular2-uuid";
/**
 * Created by tbonavia on 17/08/2016.
 */

export class GuiContainer {
    title:string;
    mainItem:GuiItem;
    leftItems:Array<GuiItem> = new Array();
    rightItems:Array<GuiItem> = new Array();

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

    collectLefts():Array<GuiItemDescriptor> {
        return this.collectDescriptors(Side.Left);
    }

    collectRights():Array<GuiItemDescriptor> {
        return this.collectDescriptors(Side.Right);
    }

    private collectDescriptors(side:Side):Array<GuiItemDescriptor> {
        var itemsToCollect:Array<GuiItem>;
        var itemsDescriptors:Array<GuiItemDescriptor> = new Array();

        switch (side) {
            case Side.Left:
                itemsToCollect = this.leftItems;
                break;
            case Side.Right:
                itemsToCollect = this.rightItems;
                break;
            default:
                break;
        }

        for (let item of itemsToCollect) {
            itemsDescriptors.push(item.descriptor);

        }
        return itemsDescriptors;
    }
}

enum Side {
    Left,
    Right
}