import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {UUID} from "angular2-uuid";
import {FlexibusEntity} from "../core/flexibus-entity";
import {FlexibusAttribute} from "../core/flexibus-attribute";
import {FlexibusType} from "../core/flexibus-type";
import {FlexibusAttributeValue} from "../core/flexibus-attribute-value";
import {FlexibusClass} from "../core/flexibus-class";

@Component({
    moduleId: module.id,
    selector: 'flexibus-form',
    templateUrl: 'flexibus-form.component.html',
    styleUrls: ['flexibus-form.component.css'],
    providers: []
})
export class FlexibusForm implements OnInit, OnDestroy {

    @Input() model:FlexibusEntity;

    constructor() {
        let flexibusAttributeOne = new FlexibusAttribute("attributeOneName", "attributeOneLabel", FlexibusType.STRING);
        let flexibusAttributeTwo = new FlexibusAttribute("attributeTwoName", "attributeTwoLabel", FlexibusType.STRING);
        let attributeValueOne = new FlexibusAttributeValue("testValueOne", flexibusAttributeOne);
        let attributeValueTwo = new FlexibusAttributeValue("testValueTwo", flexibusAttributeTwo);
        
        this.model = new FlexibusEntity(UUID.UUID(), new FlexibusClass("flexibusEntity", "Flexibus Entity Label", [flexibusAttributeOne, flexibusAttributeTwo], []),[attributeValueOne, attributeValueTwo], []);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
    
    diagnostic(){
        return JSON.stringify(this.model);
    }


}