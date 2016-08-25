import {FlexibusClass} from "./flexibus-class";
export class FlexibusRelation{
    private _name:string;
    private _label:string;
    private _from:FlexibusClass;
    private _to:FlexibusClass;

    constructor(name:string, label:string, from:FlexibusClass, to:FlexibusClass) {
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

    get from():FlexibusClass {
        return this._from;
    }

    get to():FlexibusClass {
        return this._to;
    }
}