import {Component, AfterViewInit, OnChanges, OnInit} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {ClassExplorerService} from "./class-explorer.service";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/observable";
import {StringUtils} from "../util/string-utils";
import {FlexibusUtils} from "../core/flexibus-utils";

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
        // console.log(changes);
    }

    ngOnInit() {
        this.ces.getRoot().subscribe(newRoot => {
            console.log("new root");
            console.log(JSON.stringify(newRoot));
            this.flexibusRoot = newRoot;
        }, error => this.errorMessage = <any>error);

        this.filterObservable.subscribe((event) => {
            FlexibusUtils.filter(this.flexibusRoot, event);
            console.log(JSON.stringify(this.flexibusRoot));
        });
    }

    ngAfterViewInit() {
    }
}