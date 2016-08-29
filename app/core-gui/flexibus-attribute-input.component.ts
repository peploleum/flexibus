import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-input',
    templateUrl: 'flexibus-attribute-input.component.html',
    styleUrls: ['flexibus-attribute-input.component.css'],
    providers: []
})
export class FlexibusAttributeInput implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;
    @Input() flexibusForm:FormGroup;
    attributeControl:FormControl;

    constructor() {
        this.attributeControl = new FormControl(this.model ? this.model.value : 'test', Validators.required);
    }

    ngOnInit() {
        this.flexibusForm.addControl(this.model.attribute.name, this.attributeControl);
    }

    ngOnDestroy() {
    }


}