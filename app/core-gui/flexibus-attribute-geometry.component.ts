import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";
import * as ol from "openlayers";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
    //moduleId: module.id,
    selector: 'flexibus-attribute-geometry',
    templateUrl: 'flexibus-attribute-geometry.component.html',
    styleUrls: ['flexibus-attribute-geometry.component.css']
    // directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FlexibusAttributeGeometry implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;
    @Input() flexibusForm:FormGroup;

    inputControl:FormControl = new FormControl('', [GeometryValidator.isCorrectGeometry]);

    constructor() {
    }

    ngOnInit() {
        this.inputControl.setValue(this.model.value);
        this.flexibusForm.addControl(this.model.attribute.name, this.inputControl);
    }

    ngOnDestroy() {
    }

}

interface ValidationResult {
    [key:string]:boolean;
}
export class WKTValidator {

    static isCorrectWKT(control:FormControl):ValidationResult {
        let wkt:ol.format.WKT = new ol.format.WKT();
        try {
            wkt.readFeature(control.value);
            return null;

        } catch (e) {
            console.log((<Error>e).message);
            return {
                "isCorrectWKT": true
            }
        }
    }

}

export class GeoJSONValidator {

    static isCorrectGeoJSON(control:FormControl):ValidationResult {
        let geoJSON:ol.format.GeoJSON = new ol.format.GeoJSON();
        try {
            geoJSON.readFeature(control.value);
            return null;

        } catch (e) {
            console.log((<Error>e).message);
            return {
                "isCorrectGeoJSON": true
            }
        }
    }

}
export class GeometryValidator {

    static isCorrectGeometry(control:FormControl):ValidationResult {
        let geoJSONValidationResult = GeoJSONValidator.isCorrectGeoJSON(control);
        if (geoJSONValidationResult == null)
            return null;
        let wktValidationResult = WKTValidator.isCorrectWKT(control);
        if (wktValidationResult == null)
            return null;
        return {
            "isCorrectGeometry": true
        }
    }
}