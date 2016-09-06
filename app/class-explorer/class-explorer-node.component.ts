import {Component, AfterViewInit, OnChanges, OnInit, Input} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";

@Component({
    moduleId: module.id,
    selector: 'class-explorer-node',
    templateUrl: 'class-explorer-node.component.html',
    styleUrls: ['class-explorer-node.component.css']
})
export class ClassExplorerNodeComponent implements OnInit, AfterViewInit, OnChanges {

    @Input()
    private flexibusNode:FlexibusEntityDescriptor;

    constructor(private gcs:GuiContextService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });
    }

    onGuiContext(guiContext:GuiContext) {

    }

    onEntityClicked(entity:FlexibusEntityDescriptor){
        console.log('node received clicked ' + entity.label);
    }

    ngOnChanges() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }
}