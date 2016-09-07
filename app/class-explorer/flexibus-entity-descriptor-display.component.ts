import {Component, AfterViewInit, OnChanges, OnInit, Input, Output} from "@angular/core";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";
import {EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'flexibus-entity-descriptor-display',
    templateUrl: 'flexibus-entity-descriptor-display.component.html',
    styleUrls: ['flexibus-entity-descriptor-display.component.css']
})
export class FlexibusEntityDescriptorDisplayComponent implements OnInit, AfterViewInit, OnChanges {

    @Input()
    private flexibusEntity:FlexibusEntityDescriptor;
    @Output()
    private entityEmitter: EventEmitter<FlexibusEntityDescriptor> = new EventEmitter<FlexibusEntityDescriptor>();
    @Input()
    private filterValue:string;

    constructor() {
    }

    isLeaf() {
        return this.flexibusEntity.subDescriptors.length == 0 || this.flexibusEntity.subDescriptors == null || this.flexibusEntity.subDescriptors == undefined;
    }

    ngOnChanges(changes) {
        if (changes.filterValue && changes.filterValue != undefined){
            let regExpMatchArray = this.flexibusEntity.label.match(this.filterValue);
            if (regExpMatchArray != null && regExpMatchArray.length != 0){
                console.log(this.flexibusEntity.label + ' matches');
            }
        }
    }

    onEntityClicked() {
        console.log("clicked on " + this.flexibusEntity.label);
        this.entityEmitter.emit(this.flexibusEntity);
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        // this.filterValue.changes.
    }
}