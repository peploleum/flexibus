import {Component, AfterViewInit, OnChanges, OnInit, Input, OnDestroy} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";
import {Observable} from "rxjs/Rx";
import {StringUtils} from "../util/string-utils";

@Component({
    moduleId: module.id,
    selector: 'class-explorer-node',
    templateUrl: 'class-explorer-node.component.html',
    styleUrls: ['class-explorer-node.component.css']
})
export class ClassExplorerNodeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    @Input()
    private flexibusNode:FlexibusEntityDescriptor;
    @Input()
    private filterObservable:Observable<string>;
    filterValue:string;

    constructor(private gcs:GuiContextService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });
    }

    onGuiContext(guiContext:GuiContext) {

    }

    ngOnInit() {
        this.filterObservable.subscribe((event) => {
            this.filterValue = StringUtils.sanitizeString(event);
        });
    }

    hasMatch(descriptor:FlexibusEntityDescriptor) {
        return true;
        // return (this.filterValue == null) || (descriptor.label.indexOf(this.filterValue) != -1) || (descriptor.name.toUpperCase().indexOf(this.filterValue.toUpperCase()) != -1)
    }

    onEntityClicked(entity:FlexibusEntityDescriptor) {
        console.log('node received clicked ' + entity.label);
    }

    ngOnChanges(chan) {
        console.log(chan);
    }

    ngOnDestroy() {
        console.log('destroying class explorer node');
    }

    ngAfterViewInit() {
    }
}