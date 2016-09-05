import {Component, AfterViewInit, OnChanges, OnInit} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";

@Component({
    moduleId: module.id,
    selector: 'class-explorer',
    templateUrl: 'class-explorer.component.html',
    styleUrls: ['class-explorer.component.css']
})
export class ClassExplorerComponent implements OnInit, AfterViewInit, OnChanges {

    private toubidou:string = "test";

    constructor(private gcs:GuiContextService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });

    }

    onGuiContext(guiContext:GuiContext) {
    }

    ngOnChanges() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }
}