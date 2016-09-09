import {FlexibusAttributeDescriptor} from "./flexibus-attribute-descriptor";
import {FlexibusRelationDescriptor} from "./flexibus-relation-descriptor";
export class FlexibusEntityDescriptor {
    private _name:string;
    private _label:string;
    private _attributes:Array<FlexibusAttributeDescriptor>;
    private _relations:Array<FlexibusRelationDescriptor>;
    private _subDescriptors:Array<FlexibusEntityDescriptor>;
    private _customMetadata:CustomMetadata;

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

    get subDescriptors():Array<FlexibusEntityDescriptor> {
        return this._subDescriptors;
    }

    set subDescriptors(value:Array<FlexibusEntityDescriptor>) {
        this._subDescriptors = value;
    }

    get customMetadata():CustomMetadata {
        return this._customMetadata;
    }

    set customMetadata(value:CustomMetadata) {
        this._customMetadata = value;
    }
}

export interface CustomMetadata {
    [key:string]:boolean;
}