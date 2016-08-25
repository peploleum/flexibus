import {FlexibusAttribute} from "./flexibus-attribute";
import {FlexibusRelation} from "./flexibus-relation";
export class FlexibusClass{
    private _name:string;
    private _label:string;
    private _attributes:Array<FlexibusAttribute>;
    private _relations:Array<FlexibusRelation>;

    constructor(name:string, label:string, attributes:Array<FlexibusAttribute>, relations:Array<FlexibusRelation>) {
        this._name = name;
        this._label = label;
        this._attributes = attributes;
        this._relations = relations;
    }

    get name():string {
        return this._name;
    }

    get label():string {
        return this._label;
    }

    get attributes():Array<FlexibusAttribute> {
        return this._attributes;
    }

    get relations():Array<FlexibusRelation> {
        return this._relations;
    }
}