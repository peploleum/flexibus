import {FlexibusRelationValue} from "./flexibus-relation-value";
import {FlexibusAttributeValue} from "./flexibus-attribute-value";
import {FlexibusEntityDescriptor} from "./flexibus-entity-descriptor";
export class FlexibusFormDescriptor {
    private _flexibusClass:FlexibusEntityDescriptor;
    private _attributesValues:Array<FlexibusAttributeValue>;
    private _relationsValues:Array<FlexibusRelationValue>;

    constructor(flexibusClass:FlexibusEntityDescriptor, attributesValues:Array<FlexibusAttributeValue>, relationsValues:Array<FlexibusRelationValue>) {
        this._flexibusClass = flexibusClass;
        this._attributesValues = attributesValues;
        this._relationsValues = relationsValues;
    }

    get flexibusClass():FlexibusEntityDescriptor {
        return this._flexibusClass;
    }

    set flexibusClass(value:FlexibusEntityDescriptor) {
        this._flexibusClass = value;
    }

    get attributesValues():Array<FlexibusAttributeValue> {
        return this._attributesValues;
    }

    set attributesValues(value:Array<FlexibusAttributeValue>) {
        this._attributesValues = value;
    }

    get relationsValues():Array<FlexibusRelationValue> {
        return this._relationsValues;
    }

    set relationsValues(value:Array<FlexibusRelationValue>) {
        this._relationsValues = value;
    }
}