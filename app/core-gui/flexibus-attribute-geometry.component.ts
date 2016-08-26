import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import * as flexiM from "../core/flexibus-model";//flexibus entity model
@Component({
    moduleId: module.id,
    selector: 'flexibus-attribute-geometry',
    templateUrl: 'flexibus-attribute-geometry.component.html',
    styleUrls: ['flexibus-attribute-geometry.component.css'],
    providers: []
})
export class FlexibusAttributeGeometry implements OnInit, OnDestroy {

    @Input() model:flexiM.FlexibusAttributeValue;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}