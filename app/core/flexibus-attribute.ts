import {FlexibusType} from "./flexibus-type";
export class FlexibusAttribute{
    private _name:string;
    private _label:string;
    private _type:FlexibusType;
    private _values:Array<string>;

    constructor(name:string, label:string, type:FlexibusType) {
        this._name = name;
        this._label = label;
        this._type = type;
        this._values = [];
    }

    get name():string {
        return this._name;
    }

    get label():string {
        return this._label;
    }

    get type():FlexibusType {
        return this._type;
    }

    get values() {
        return this._values;
    }

    set values(value:Array<string>) {
        this._values = value;
    }
}