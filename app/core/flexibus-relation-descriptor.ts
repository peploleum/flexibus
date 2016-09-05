import {FlexibusEntityDescriptor} from "./flexibus-entity-descriptor";
import {FlexibusAttributeDescriptor} from "./flexibus-attribute-descriptor";
export class FlexibusRelationDescriptor{
    private _name:string;
    private _label:string;
    private _from:FlexibusEntityDescriptor;
    private _to:FlexibusEntityDescriptor;
    private _attributes:Array<FlexibusAttributeDescriptor>;

    constructor(name:string, label:string, from:FlexibusEntityDescriptor, to:FlexibusEntityDescriptor) {
        this._name = name;
        this._label = label;
        this._from = from;
        this._to = to;
    }
   
    get name():string {
        return this._name;
    }

    get label():string {
        return this._label;
    }

    get from():FlexibusEntityDescriptor {
        return this._from;
    }

    get to():FlexibusEntityDescriptor {
        return this._to;
    }

    get attributes():Array<FlexibusAttributeDescriptor> {
        return this._attributes;
    }

    set attributes(value:Array<FlexibusAttributeDescriptor>) {
        this._attributes = value;
    }
}