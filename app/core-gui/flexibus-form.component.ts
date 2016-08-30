import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {UUID} from "angular2-uuid";
import {FlexibusEntity} from "../core/flexibus-entity";
import {FlexibusAttribute} from "../core/flexibus-attribute";
import {FlexibusType} from "../core/flexibus-type";
import {FlexibusAttributeValue} from "../core/flexibus-attribute-value";
import {FlexibusClass} from "../core/flexibus-class";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'flexibus-form',
    templateUrl: 'flexibus-form.component.html',
    styleUrls: ['flexibus-form.component.css'],
    providers: []
})
export class FlexibusForm implements OnInit, OnDestroy {

    @Input() model:FlexibusEntity;
    active:boolean;
    flexibusForm:FormGroup;
    firstName = new FormControl("", Validators.required);
    valueObserver:string;

    constructor(fb:FormBuilder) {
        //http://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/
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
        let attributeValueFive = new FlexibusAttributeValue("", flexibusAttributeFive);
        this.model = new FlexibusEntity(UUID.UUID(), new FlexibusClass("flexibusEntity", "Flexibus Entity Label", [flexibusAttributeOne, flexibusAttributeTwo, flexibusAttributeThree, flexibusAttributeFour, flexibusAttributeFive], []), [attributeValueOne, attributeValueTwo, attributeValueThree, attributeValueFour, attributeValueFive], []);

        this.active = true;
        this.flexibusForm = new FormGroup({});
    }

    ngOnInit() {
        this.flexibusForm.valueChanges.subscribe((value) => {
            this.valueObserver = value;
        });
    }

    ngOnDestroy() {
    }

    diagnostic() {
        return JSON.stringify(this.model);
    }

    onSubmit() {
        console.log("submitting");
    }


}