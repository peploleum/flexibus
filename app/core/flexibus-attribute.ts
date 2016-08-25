import {FlexibusType} from "./flexibus-type";
export class FlexibusAttribute{
    private _name:string;
    private _label:string;
    private _type:FlexibusType;

    constructor(name:string, label:string, type:FlexibusType) {
        this._name = name;
        this._label = label;
        this._type = type;
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
}