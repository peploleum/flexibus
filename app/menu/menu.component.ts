import {Component, ElementRef, AfterViewInit, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {GuiContext} from "../gui/gui-context.service";
import {MenuService} from "./menu.service";
import {MenuItem} from "./menu-item";

@Component({
    moduleId: module.id,
    selector: 'flexibus-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css'],
    providers: [MenuService]
})
export class MenuComponent extends GuiComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    menuItems: MenuItem[] = [];

    constructor(private element: ElementRef, private ms: MenuService) {
        super();
    }

    ngOnInit() {
        this.ms.getResults().then((results) => {
            this.menuItems = results
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