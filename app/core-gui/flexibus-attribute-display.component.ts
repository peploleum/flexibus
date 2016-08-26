import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {FlexibusAttributeValue} from "../core/flexibus-attribute-value";
import {FlexibusAttribute} from "../core/flexibus-attribute";
import {FlexibusType} from "../core/flexibus-type";
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-display',
    templateUrl: 'flexibus-attribute-display.component.html',
    styleUrls: ['flexibus-attribute-display.component.css'],
    providers: []
})
export class FlexibusAttributeDisplay implements OnInit, OnDestroy {

    @Input() model:FlexibusAttributeValue;

    flexibusType = FlexibusType;
    
    constructor() {
        this.model = new FlexibusAttributeValue("test", new FlexibusAttribute("attributeName", "attributeLabel", FlexibusType.STRING));
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}