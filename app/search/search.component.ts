import {Component, ElementRef, AfterViewInit, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {GuiContext} from "../gui/gui-context.service";
import {SearchService} from "./search.service";
import {SearchResult} from "./search-result";

@Component({
    moduleId: module.id,
    selector: 'business-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    providers: [SearchService]
})
export class SearchComponent extends GuiComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    searchResults: SearchResult[] = [];

    constructor(private element: ElementRef, private ss: SearchService) {
        super();
    }

    ngOnInit() {
        this.ss.getResults().then((results) => {
            this.searchResults = results
        });
    }

    onGuiContext(guiContext: GuiContext) {
    }

    onResize(event:any) {
    }

    ngOnChanges(changes:any) {

    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
    }
}