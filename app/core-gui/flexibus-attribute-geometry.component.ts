import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";
import * as ol from "openlayers";
import {FormControl, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-geometry',
    templateUrl: 'flexibus-attribute-geometry.component.html',
    styleUrls: ['flexibus-attribute-geometry.component.css'],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FlexibusAttributeGeometry implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;
    private inputControl:FormControl = new FormControl('POINT (2 49)', WKTValidator.isCorrectWKT);

    constructor() {
    }

    ngOnInit() {
        this.inputControl.valueChanges.debounceTime(200);
    }

    ngOnDestroy() {
    }

}

interface ValidationResult {
    [key:string]:boolean;
}
export class WKTValidator {

    static isCorrectWKT(control:FormControl):ValidationResult {

        if (new ol.format.WKT().readFeature(control.value) == null) {
            return {
                "isCorrectWKT": true
            }
        }

        return null;
    }

}