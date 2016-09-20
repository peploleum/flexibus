import {Component, OnInit, OnDestroy, Input, EventEmitter, Output} from "@angular/core";
import {FlexibusAction} from "../core/flexibus-action";
@Component({
    moduleId: module.id,
    selector: 'flexibus-button',
    templateUrl: 'flexibus-button.component.html',
    styleUrls: ['flexibus-button.component.css'],
    providers: []
})
export class FlexibusButtonComponent implements OnInit, OnDestroy {

    @Input() action: FlexibusAction;
    @Output() actionEvent:EventEmitter<FlexibusAction> = new EventEmitter<FlexibusAction>();

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    onClick(event) {
        console.log('clicked ' + event + ' ' + this.action.title);
    }


}
