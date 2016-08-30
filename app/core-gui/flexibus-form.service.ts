import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {FlexibusEntity} from "../core/flexibus-entity";
import {FlexibusAttribute} from "../core/flexibus-attribute";
import {FlexibusType} from "../core/flexibus-type";
import {FlexibusAttributeValue} from "../core/flexibus-attribute-value";
import {FlexibusClass} from "../core/flexibus-class";
import {UUID} from "angular2-uuid";
import {Observable, Subject} from "rxjs/Rx";
@Injectable()
export class FlexibusFormService {

    flexibusEntityMockSource = new Subject<FlexibusEntity>();
    flexibusEntityMockObservable = this.flexibusEntityMockSource.asObservable();

    constructor(http:Http) {

    }

    getFormModel():Promise<FlexibusEntity> {
        let flexibusAttributeOne = new FlexibusAttribute("attributeOneName", "attributeOneLabel", FlexibusType.STRING);
        let flexibusAttributeTwo = new FlexibusAttribute("attributeTwoName", "attributeTwoLabel", FlexibusType.STRING);
        let flexibusAttributeThree = new FlexibusAttribute("attributeThreeName", "attributeThreeLabel", FlexibusType.DICTIONARY);
        let flexibusAttributeFour = new FlexibusAttribute("attributeGeom", "attributeGeomLabel", FlexibusType.GEOMETRY);
        let flexibusAttributeFive = new FlexibusAttribute("attributeDate", "attributeDateLabel", FlexibusType.DATE);
        flexibusAttributeThree.values = ['value1', 'value2', 'value3'];
        let attributeValueOne = new FlexibusAttributeValue("", flexibusAttributeOne);
        let attributeValueTwo = new FlexibusAttributeValue("", flexibusAttributeTwo);
        let attributeValueThree = new FlexibusAttributeValue("", flexibusAttributeThree);
        let attributeValueFour = new FlexibusAttributeValue("", flexibusAttributeFour);
        let attributeValueFive = new FlexibusAttributeValue("", flexibusAttributeFive);
        let flexibusEntity = new FlexibusEntity(UUID.UUID(), new FlexibusClass("flexibusEntity", "Flexibus Entity Label", [flexibusAttributeOne, flexibusAttributeTwo, flexibusAttributeThree, flexibusAttributeFour, flexibusAttributeFive], []), [attributeValueOne, attributeValueTwo, attributeValueThree, attributeValueFour, attributeValueFive], []);

        return new Promise<FlexibusEntity>(resolve =>
            setTimeout(() => resolve(flexibusEntity), 2000) // 2 seconds
        );
    }

    getEntity():Promise<FlexibusEntity>{
        let flexibusAttributeOne = new FlexibusAttribute("attributeOneName", "attributeOneLabel", FlexibusType.STRING);
        let flexibusAttributeTwo = new FlexibusAttribute("attributeTwoName", "attributeTwoLabel", FlexibusType.STRING);
        let flexibusAttributeThree = new FlexibusAttribute("attributeThreeName", "attributeThreeLabel", FlexibusType.DICTIONARY);
        let flexibusAttributeFour = new FlexibusAttribute("attributeGeom", "attributeGeomLabel", FlexibusType.GEOMETRY);
        let flexibusAttributeFive = new FlexibusAttribute("attributeDate", "attributeDateLabel", FlexibusType.DATE);
        flexibusAttributeThree.values = ['value1', 'value2', 'value3'];
        let attributeValueOne = new FlexibusAttributeValue("testValueOne", flexibusAttributeOne);
        let attributeValueTwo = new FlexibusAttributeValue("testValueTwo", flexibusAttributeTwo);
        let attributeValueThree = new FlexibusAttributeValue("value1", flexibusAttributeThree);
        let attributeValueFour = new FlexibusAttributeValue("POINT(2 49)", flexibusAttributeFour);
        let attributeValueFive = new FlexibusAttributeValue("121212ZJAN2012", flexibusAttributeFive);
        let flexibusEntity = new FlexibusEntity(UUID.UUID(), new FlexibusClass("flexibusEntity", "Flexibus Entity Label", [flexibusAttributeOne, flexibusAttributeTwo, flexibusAttributeThree, flexibusAttributeFour, flexibusAttributeFive], []), [attributeValueOne, attributeValueTwo, attributeValueThree, attributeValueFour, attributeValueFive], []);

        return Promise.resolve(flexibusEntity);
    }

    getFlexibusEntity(id:string):Observable<FlexibusEntity> {
        // this.flexibusEntityMockSource.next(flexibusEntity);
        return this.flexibusEntityMockObservable;
    }

}