import {FlexibusType} from "./flexibus-type";
export class FlexibusAttributeDescriptor {
    private _name:string;
    private _label:string;
    private _type:FlexibusType;
    private _qualifiedName:string;
    private _dictionary:Array<Dictionary>;


    constructor(name:string, label:string, type:FlexibusType) {
        this._name = name;
        this._label = label;
        this._type = type;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get label():string {
        return this._label;
    }

    set label(value:string) {
        this._label = value;
    }

    get type():FlexibusType {
        return this._type;
    }

    set type(value:FlexibusType) {
        this._type = value;
    }

    get qualifiedName():string {
        return this._qualifiedName;
    }

    set qualifiedName(value:string) {
        this._qualifiedName = value;
    }

    get dictionary():Array<Dictionary> {
        return this._dictionary;
    }

    set dictionary(value:Array<Dictionary>) {
        this._dictionary = value;
    }
}

export interface Dictionary {
    [key:string]:string;
}