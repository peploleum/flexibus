import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
    //moduleId: module.id,
    selector: 'flexibus-attribute-date',
    templateUrl: 'flexibus-attribute-date.component.html',
    styleUrls: ['flexibus-attribute-date.component.css'],
    providers: []
})
export class FlexibusAttributeDateControl implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;
    @Input() flexibusForm:FormGroup;
    attributeControl:FormControl;

    constructor() {
        this.attributeControl = new FormControl(this.model ? this.model.value : '', DateTimeGroupValidator.isCorrectDtg);
    }

    ngOnInit() {
        this.attributeControl.setValue(this.model.value);
        this.flexibusForm.addControl(this.model.attribute.name, this.attributeControl);
    }

    ngOnDestroy() {
    }


}
interface ValidationResult {
    [key:string]:boolean;
}
export class DateTimeGroupValidator {

    static dtgRegex = /^(\d{2})(\d{2})(\d{2})\s*([a-ik-zA-IK-Z]\*?)\s*([a-zA-Z]{3})?\s*(\d{4}|\d{2})?$/;

    static isCorrectDtg(control:FormControl):ValidationResult {
        let matches = DateTimeGroupValidator.dtgRegex.test(control.value);
        if (matches) {
            return null;
        } else {
            return {
                "isCorrectWKT": true
            }
        }
    }
}
