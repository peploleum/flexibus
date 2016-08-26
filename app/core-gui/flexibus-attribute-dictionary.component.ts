import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";//flexibus entity model
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-dictionary',
    templateUrl: 'flexibus-attribute-dictionary.component.html',
    styleUrls: ['flexibus-attribute-dictionary.component.css'],
    providers: []
})
export class FlexibusAttributeDictionary implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;

    constructor() {
        // this.model = new flexiM.FlexibusAttributeValue("test", new flexiM.FlexibusAttribute("attributeName", "attributeLabel", flexiM.FlexibusType.STRING));
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}