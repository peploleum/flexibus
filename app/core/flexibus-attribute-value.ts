import {FlexibusAttribute} from "./flexibus-attribute";
export class FlexibusAttributeValue{
    private _value:string;
    private _attribute:FlexibusAttribute;

    constructor(value:string, attribute:FlexibusAttribute) {
        this._value = value;
        this._attribute = attribute;
    }

    get value():string {
        return this._value;
    }

    set value(value:string) {
        this._value = value;
    }

    get attribute():FlexibusAttribute {
        return this._attribute;
    }

    set attribute(value:FlexibusAttribute) {
        this._attribute = value;
    }
}