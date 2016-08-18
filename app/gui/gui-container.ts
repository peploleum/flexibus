import {GuiItem} from "./gui-item";
/**
 * Created by tbonavia on 17/08/2016.
 */

export class GuiContainer {
    mainItem: GuiItem;
    leftItems: Array<GuiItem>;
    rightItems: Array<GuiItem>;

    constructor(mainItem: GuiItem){
        this.mainItem = mainItem;
    }
}