import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-formcontrol',
    templateUrl: 'flexibus-attribute-formcontrol.component.html',
    styleUrls: ['flexibus-attribute-formcontrol.component.css'],
    providers: []
})
export class FlexibusAttributeFormControl implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;
    @Input() flexibusForm:FormGroup;
    attributeControl:FormControl;

    constructor() {
        this.model = new flexiM.FlexibusAttributeValue("test", new flexiM.FlexibusAttribute("attributeName", "attributeLabel", flexiM.FlexibusType.STRING));
        this.attributeControl = new FormControl(this.model ? this.model.value : 'test', Validators.required);

        console.log("initiated form control");
    }

    ngOnInit() {
        this.flexibusForm.addControl(this.model.attribute.name, this.attributeControl);
    }

    ngOnDestroy() {
    }


}