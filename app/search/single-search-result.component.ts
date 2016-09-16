import {Component, ElementRef, AfterViewInit, OnChanges, OnDestroy, Input} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {SearchResult} from "./search-result";

@Component({
    moduleId: module.id,
    selector: 'single-search-result',
    templateUrl: 'single-search-result.component.html',
    styleUrls: ['single-search-result.component.css']
})
export class SingleSearchResultComponent extends GuiComponent implements AfterViewInit, OnChanges, OnDestroy {

    @Input()
    result: SearchResult

    constructor(private element: ElementRef, private gcs: GuiContextService) {
        super();
    }

    onGuiContext(guiContext: GuiContext) {
    }

    onResize(event) {
    }

    ngOnChanges() {

    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
    }
}