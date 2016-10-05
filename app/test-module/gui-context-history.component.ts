import {Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, Input, OnDestroy} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {GuiContext} from "../gui/gui-context.service";
@Component({
    moduleId: module.id,
    selector: 'gui-context-history',
    templateUrl: 'gui-context-history.component.html'
})
export class GuiContextHistory extends GuiComponent implements OnInit, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit {

    @Input() guiContextHistory:Array<GuiContext> = new Array<GuiContext>();

    constructor() {
        super();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    ngDoCheck() {
    }

    ngAfterViewChecked() {
    }

    ngOnDestroy(){
        console.log("destroying component");
    }
}