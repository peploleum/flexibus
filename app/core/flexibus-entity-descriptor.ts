import {FlexibusAttribute} from "./flexibus-attribute";
import {FlexibusAttributeDescriptor} from "./flexibus-attribute-descriptor";
import {FlexibusRelationDescriptor} from "./flexibus-relation-descriptor";
export class FlexibusEntityDescriptor{
    private _name:string;
    private _label:string;
    private _attributes:Array<FlexibusAttributeDescriptor>;
    private _relations:Array<FlexibusRelationDescriptor>;

    constructor(name:string, label:string, attributes:Array<FlexibusAttributeDescriptor>, relations:Array<FlexibusRelationDescriptor>) {
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

    get attributes():Array<FlexibusAttributeDescriptor> {
        return this._attributes;
    }

    get relations():Array<FlexibusRelationDescriptor> {
        return this._relations;
    }
}