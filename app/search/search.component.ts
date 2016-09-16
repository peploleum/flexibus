import {Component, ElementRef, AfterViewInit, OnChanges, OnDestroy} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {SearchService} from "./search.service";

@Component({
    moduleId: module.id,
    selector: 'business-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    providers: [SearchService]
})
export class SearchComponent extends GuiComponent implements AfterViewInit, OnChanges, OnDestroy {


    constructor(private element:ElementRef, private gcs:GuiContextService, private ss:SearchService) {
        super();
    }

    onGuiContext(guiContext:GuiContext) {
    }

    onResize(event) {
    }

    ngOnChanges() {

    }

    ngOnDestroy(){
    }

    ngAfterViewInit() {
    }
}