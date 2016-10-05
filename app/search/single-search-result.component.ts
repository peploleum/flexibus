import {Component, ElementRef, AfterViewInit, OnChanges, OnDestroy, Input} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {SearchResult} from "./search-result";
import {FlexibusAction} from "../core/flexibus-action";

@Component({
    moduleId: module.id,
    selector: 'single-search-result',
    templateUrl: 'single-search-result.component.html',
    styleUrls: ['single-search-result.component.css']
})
export class SingleSearchResultComponent extends GuiComponent implements AfterViewInit, OnChanges, OnDestroy {

    @Input()
    result: SearchResult;

    action:FlexibusAction = {
        icon : 'fa fa-eye',
        title : 'see',
        tooltip : 'see tooltip'
    };

    constructor(private element: ElementRef, private gcs: GuiContextService) {
        super();
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