import {Component, AfterViewInit, OnInit, Input, Output, EventEmitter, OnDestroy} from "@angular/core";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";
import {StringUtils} from "../util/string-utils";
import {Observable, Subscription} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'flexibus-entity-descriptor-display',
    templateUrl: 'flexibus-entity-descriptor-display.component.html',
    styleUrls: ['flexibus-entity-descriptor-display.component.css'],

})
export class FlexibusEntityDescriptorDisplayComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input()
    flexibusEntity: FlexibusEntityDescriptor;
    @Output()
    entityEmitter: EventEmitter<FlexibusEntityDescriptor> = new EventEmitter<FlexibusEntityDescriptor>();
    filterValue: string;
    @Input()
    filterObservable: Observable<string>;
    _resultingCuts: Array<SubCut>;
    hasMatch = true;
    sanitizedLabel: string;

    subscription: Subscription;

    constructor() {
    }

    isLeaf() {
        return this.flexibusEntity.subDescriptors.length == 0 || this.flexibusEntity.subDescriptors == null || this.flexibusEntity.subDescriptors == undefined;
    }

    /**
     * Appends all matching and non matching parts in a SubCut Array to build consecutive spans with custom styles for matching parts
     */
    private smartCut() {
        let remainingStringToCut = this.flexibusEntity.label;
        let resultingCuts: Array<SubCut> = [];
        let resultingSplit = this.sanitizedLabel.split(this.filterValue);
        let remainingSanitizedToParse = this.sanitizedLabel;
        let indexInOriginalSanitizedLabel:any;
        for (let n = 0; n < resultingSplit.length; n++) {
            let part = resultingSplit[n];
            let i = remainingSanitizedToParse.indexOf(part);
            indexInOriginalSanitizedLabel = this.sanitizedLabel.indexOf(part);
            remainingSanitizedToParse = remainingSanitizedToParse.substring(i + part.length);
            let resultPart = remainingStringToCut.substring(i, i + part.length);
            remainingStringToCut = remainingStringToCut.substring(i + part.length);
            resultingCuts.push({
                value: resultPart,
                match: false,
                index: indexInOriginalSanitizedLabel,
                length: part.length
            });
            let start = indexInOriginalSanitizedLabel + part.length;
            let fillerValue = this.flexibusEntity.label.substring(start, start + this.filterValue.length);
            //dirty quick fix
            if (StringUtils.sanitizeString(fillerValue) != this.filterValue) {
                continue;
            }
            resultingCuts.push({
                value: fillerValue,
                match: true,
                index: indexInOriginalSanitizedLabel + part.length,
                length: this.filterValue.length
            });
        }
        this._resultingCuts = resultingCuts;

    }

    onEntityClicked() {
        console.log("clicked on " + this.flexibusEntity.label);
        this.entityEmitter.emit(this.flexibusEntity);
    }


    ngOnInit() {
        this.sanitizedLabel = StringUtils.sanitizeString(this.flexibusEntity.label);
        this._resultingCuts = [{
            value: this.flexibusEntity.label,
            match: false
        }];
        this.hasMatch = this.flexibusEntity.customMetadata ? this.flexibusEntity.customMetadata['visible'] : true;
        // this.subscription = this.filterObservable.subscribe((event) => {
        //     this.filterValue = event;
        //     this.hasMatch = this.computeHasMatch();
        //     // this.smartCut();
        // });
    }

    ngOnChanges(changes:any) {
    }

    computeHasMatch() {
        return (this.filterValue == null) || (this.sanitizedLabel.indexOf(this.filterValue) != -1) || (this.flexibusEntity.name.toUpperCase().indexOf(this.filterValue.toUpperCase()) != -1)
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        console.log('destroying EntityDescriptorDisplay');
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    }

    isDisplayed() {
        return this.flexibusEntity.customMetadata ? this.flexibusEntity.customMetadata['visible'] : true;
    }

}

export interface SubCut {
    value: string;
    match: boolean;
    index?: number;
    length?: number
}