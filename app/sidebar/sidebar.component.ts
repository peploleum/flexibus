import {Component, AfterViewInit, OnChanges, OnInit} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";

@Component({
    moduleId: module.id,
    selector: 'flexibus-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    providers: [GuiContextService]
})
export class SideBarComponent implements OnInit, AfterViewInit, OnChanges {
    private minimized:boolean = false;

    private sideBarModel:SideBarModel;

    constructor(private gcs:GuiContextService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });

        let subItem1 = new SideBarSubItem('subItem1', 'subItem1', false);
        let subItem2 = new SideBarSubItem('subItem2', 'subItem2', false);
        let subItem3 = new SideBarSubItem('subItem3', 'subItem3', false);
        let subItem4 = new SideBarSubItem('subItem4', 'subItem5', false);
        let subItem5 = new SideBarSubItem('subItem6', 'subItem6', false);
        let item1 = new SideBarItem('item1', 'item1', false, [subItem1, subItem2, subItem3]);
        let item2 = new SideBarItem('item2', 'item2', false, [subItem4, subItem5]);
        this.sideBarModel = new SideBarModel([item1, item2]);
    }

    onGuiContext(guiContext:GuiContext) {
        console.log("map received: " + guiContext.freeContent);
    }

    ngOnChanges() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }

    onMinimized() {
        console.log("requested minimized " + !this.minimized);
    }
}

export class SideBarModel {
    sidebarItems:Array<SideBarItem>;

    constructor(sidebarItems:Array<SideBarItem>) {
        this.sidebarItems = sidebarItems;
    }
}
export class SideBarItem {
    name:string;
    label:string;
    collapsed:boolean;
    subItems:Array<SideBarSubItem>;

    constructor(name:string, label:string, collapsed:boolean, subItems:Array<SideBarSubItem>) {
        this.name = name;
        this.label = label;
        this.collapsed = collapsed;
        this.subItems = subItems;
    }
}
export class SideBarSubItem {
    name:string;
    label:string;
    active:boolean;

    constructor(name:string, label:string, active:boolean) {
        this.name = name;
        this.label = label;
        this.active = active;
    }
}