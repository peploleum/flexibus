import {Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, Input, OnDestroy} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {GuiContext} from "./gui-context.service";
@Component({
    selector: 'gui-context-history',
    templateUrl: 'app/test-module/gui-context-history.component.html'
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