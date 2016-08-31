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
    private minimized:boolean = true;

    private sideBarModel:SideBarModel;

    constructor(private gcs:GuiContextService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });

        let subItem1 = new SideBarSubItem('subItem1', 'subItem1', 'fa fa-globe', false);
        let subItem2 = new SideBarSubItem('subItem2', 'subItem2', 'fa fa-search-plus', false);
        let subItem3 = new SideBarSubItem('subItem3', 'subItem3', 'fa fa-tasks', false);
        let subItem4 = new SideBarSubItem('subItem4', 'subItem4', 'fa fa-folder-open', false);
        let subItem5 = new SideBarSubItem('subItem5', 'subItem5', 'fa fa-sitemap', false);
        let item1 = new SideBarItem('item1', 'item1', false, 'fa fa-database', [subItem1, subItem2, subItem3]);
        let item2 = new SideBarItem('item2', 'item2', false, 'fa fa-desktop', [subItem4, subItem5]);
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

    onSideBarItemClicked(sideBarItem:SideBarItem) {
        console.log("sideBarItem clicked " + sideBarItem.label);
        sideBarItem.collapsed = !sideBarItem.collapsed;
    }

    onSideBarSubItemClicked(sideBarSubItem:SideBarSubItem) {
        console.log("sideBarItem clicked " + sideBarSubItem.label);
    }

    onMinimize(){
        this.minimized = !this.minimized;
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
    iconClass:string;
    subItems:Array<SideBarSubItem>;

    constructor(name:string, label:string, collapsed:boolean, iconClass:string, subItems:Array<SideBarSubItem>) {
        this.name = name;
        this.label = label;
        this.collapsed = collapsed;
        this.iconClass = iconClass;
        this.subItems = subItems;
    }
}
export class SideBarSubItem {
    name:string;
    label:string;
    iconClass:string
    active:boolean;

    constructor(name:string, label:string, iconClass:string, active:boolean) {
        this.name = name;
        this.label = label;
        this.active = active;
        this.iconClass = iconClass;
    }
}