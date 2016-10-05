import {Component, OnInit, OnDestroy, Input, DoCheck, OnChanges} from "@angular/core";
import * as flexiM from "../core/flexibus-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-input',
    templateUrl: 'flexibus-attribute-input.component.html',
    styleUrls: ['flexibus-attribute-input.component.css'],
    providers: []
})
export class FlexibusAttributeInput implements OnInit, OnDestroy, OnChanges {

    @Input() model:flexiM.FlexibusAttributeValue;
    @Input() flexibusForm:FormGroup;
    attributeControl:FormControl;

    constructor() {
        this.attributeControl = new FormControl('', Validators.required);
    }

    ngOnInit() {
        this.attributeControl.setValue(this.model.value);
        this.flexibusForm.addControl(this.model.attribute.name, this.attributeControl);
    }

    ngOnDestroy() {
    }


    ngOnChanges(changes:any) {
        console.log("attribute changed " + ((this.model) ? this.model.attribute.name : ''));
    }


}