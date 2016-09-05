import {FlexibusEntityDescriptor} from "./flexibus-entity-descriptor";
export class FlexibusRelationValue{
    private _relation:FlexibusEntityDescriptor;
    private _fromId:string;
    private _toId:string;

    constructor(relation:FlexibusEntityDescriptor, fromId:string, toId:string) {
        this._relation = relation;
        this._fromId = fromId;
        this._toId = toId;
    }

    get relation():FlexibusEntityDescriptor {
        return this._relation;
    }

    set relation(value:FlexibusEntityDescriptor) {
        this._relation = value;
    }

    get fromId():string {
        return this._fromId;
    }

    set fromId(value:string) {
        this._fromId = value;
    }

    get toId():string {
        return this._toId;
    }

    set toId(value:string) {
        this._toId = value;
    }
}