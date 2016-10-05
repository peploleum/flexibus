import {Component, AfterViewInit, OnChanges, OnInit, Input} from "@angular/core";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {GuiManagerService} from "../main-container.service";

@Component({
    moduleId: module.id,
    selector: 'flexibus-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    providers: [GuiContextService]
})
export class SideBarComponent implements OnInit, AfterViewInit, OnChanges {
    minimized:boolean = true;

    sideBarModel:SideBarModel;

    constructor(private gcs:GuiContextService, private gms:GuiManagerService) {
        this.gcs.guiContext$.subscribe(guiContext => {
            this.onGuiContext(guiContext)
        });

        let subItem1 = new SideBarSubItem('Map', 'Map', 'fa fa-globe', false, 'MAP');
        let subItem2 = new SideBarSubItem('Search', 'Search', 'fa fa-search-plus', false, 'SEARCH');
        let subItem3 = new SideBarSubItem('Forms', 'Forms', 'fa fa-tasks', false, 'FORM');
        let subItem4 = new SideBarSubItem('Explorer', 'Explorer', 'fa fa-folder-open', false, 'EXPLORER');
        let subItem5 = new SideBarSubItem('subItem5', 'subItem5', 'fa fa-sitemap', false, '');
        let item1 = new SideBarItem('item1', 'item1', false, 'fa fa-database', [subItem1, subItem2, subItem3]);
        let item2 = new SideBarItem('item2', 'item2', false, 'fa fa-desktop', [subItem4, subItem5]);
        this.sideBarModel = new SideBarModel([item1, item2]);
    }

    onGuiContext(guiContext:GuiContext) {
    }

    ngOnChanges(changes:any) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }

    onSideBarItemClicked(sideBarItem:SideBarItem) {
        console.log("sideBarItem clicked " + sideBarItem.label);
        sideBarItem.collapsed = !sideBarItem.collapsed;
    }

    onSideBarSubItemClicked(sideBarSubItem:SideBarSubItem) {
        this.gcs.broadcastContext(new GuiContext([], null, sideBarSubItem.containerId));
        this.gms.addContainer(sideBarSubItem.containerId);
    }

    onMinimize() {
        this.minimized = true;
    }

    onMaximize() {
        this.minimized = false;
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
    iconClass:string;
    active:boolean;
    containerId:string;

    constructor(name:string, label:string, iconClass:string, active:boolean, containerId:string) {
        this.name = name;
        this.label = label;
        this.active = active;
        this.iconClass = iconClass;
        this.containerId = containerId;
    }
}