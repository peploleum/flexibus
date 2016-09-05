import {FlexibusAttributeDescriptor} from "./flexibus-attribute-descriptor";
export class FlexibusAttributeValue{
    private _value:string;
    private _attribute:FlexibusAttributeDescriptor;

    constructor(value:string, attribute:FlexibusAttributeDescriptor) {
        this._value = value;
        this._attribute = attribute;
    }

    get value():string {
        return this._value;
    }

    set value(value:string) {
        this._value = value;
    }

    get attribute():FlexibusAttributeDescriptor {
        return this._attribute;
    }

    set attribute(value:FlexibusAttributeDescriptor) {
        this._attribute = value;
    }
}