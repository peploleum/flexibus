import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-dictionary',
    templateUrl: 'flexibus-attribute-dictionary.component.html',
    styleUrls: ['flexibus-attribute-dictionary.component.css'],
    providers: []
})
export class FlexibusAttributeDictionary implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;
    @Input() flexibusForm:FormGroup;

    inputControl:FormControl;

    constructor() {
        this.inputControl = new FormControl('', Validators.required);
    }

    ngOnInit() {
        this.inputControl.setValue(this.model.value);
        this.flexibusForm.addControl(this.model.attribute.name, this.inputControl);
    }

    ngOnDestroy() {
    }


}