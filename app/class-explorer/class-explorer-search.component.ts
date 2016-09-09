import {Component, AfterViewInit, OnChanges, OnInit} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {ClassExplorerService} from "./class-explorer.service";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Rx";
import {StringUtils} from "../util/string-utils";
import {FlexibusUtils} from "../core/flexibus-utils";

@Component({
    moduleId: module.id,
    selector: 'class-explorer-search',
    templateUrl: 'class-explorer-search.component.html',
    styleUrls: ['class-explorer-search.component.css']
})
export class ClassExplorerSearchComponent implements OnInit, AfterViewInit, OnChanges {

    private searchBox:FormControl = new FormControl();

    private filterObservable:Observable<string>;

    constructor(private gcs:GuiContextService, private ces:ClassExplorerService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });
        this.filterObservable = this.searchBox
            .valueChanges
            .debounceTime(5).map((value) => {
                return StringUtils.sanitizeString(value)
            });

    }

    onGuiContext(guiContext:GuiContext) {

    }

    ngOnChanges(changes) {
        console.log(changes);
    }

    ngOnInit() {

        this.filterObservable.subscribe((event) => {
        });
    }

    ngAfterViewInit() {
    }
}