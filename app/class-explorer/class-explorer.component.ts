import {Component, AfterViewInit, OnChanges, OnInit} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {ClassExplorerService} from "./class-explorer.service";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";

@Component({
    moduleId: module.id,
    selector: 'class-explorer',
    templateUrl: 'class-explorer.component.html',
    styleUrls: ['class-explorer.component.css'],
    providers: [ClassExplorerService]
})
export class ClassExplorerComponent implements OnInit, AfterViewInit, OnChanges {

    private errorMessage:string;
    private flexibusRoot:FlexibusEntityDescriptor;

    constructor(private gcs:GuiContextService, private ces:ClassExplorerService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });

    }

    onGuiContext(guiContext:GuiContext) {

    }

    ngOnChanges() {

    }

    ngOnInit() {
        let root = this.ces.getRoot().subscribe(newRoot => {
            this.flexibusRoot = newRoot.subDescriptors.filter((value) => value.name.indexOf('Racine') != -1)[0];
            console.log('root arrived');
        }, error => this.errorMessage = <any>error);

    }

    ngAfterViewInit() {
    }
}