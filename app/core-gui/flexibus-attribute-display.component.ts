import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {FlexibusAttributeValue} from "../core/flexibus-attribute-value";
import {FlexibusType} from "../core/flexibus-type";
import {FormGroup} from "@angular/forms";
@Component({
    //moduleId: module.id,
    selector: 'flexibus-attribute-display',
    templateUrl: 'flexibus-attribute-display.component.html',
    styleUrls: ['flexibus-attribute-display.component.css'],
    providers: []
})
export class FlexibusAttributeDisplay implements OnInit, OnDestroy {

    @Input() model:FlexibusAttributeValue;
    @Input() flexibusForm:FormGroup;
    flexibusType = FlexibusType;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}