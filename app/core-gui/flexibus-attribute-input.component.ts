import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";//flexibus entity model
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-input',
    templateUrl: 'flexibus-attribute-input.component.html',
    styleUrls: ['flexibus-attribute-input.component.css'],
    providers: []
})
export class FlexibusAttributeInput implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;

    constructor() {
        this.model = new flexiM.FlexibusAttributeValue("test", new flexiM.FlexibusAttribute("attributeName", "attributeLabel", flexiM.FlexibusType.STRING));
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}