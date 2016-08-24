import {Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, AfterViewInit} from "@angular/core";
import {GuiContainer} from "./gui-api/gui-container";
import {GuiManagerService} from "./main-container.service";
import {GuiView} from "./gui/gui-view.component";

@Component({
    selector: 'main-container',
    templateUrl: 'app/main-container.component.html',
    styleUrls: ['app/main-container.component.css'],
    providers: [GuiManagerService]
})
// 1 - inject component anywhere in page
// 2 - inter component communication
// 3 - flexbox containers for modules
// 4 - navbar / sidebar
// 5 - try AOT instead of JIT compilation http://angularjs.blogspot.fr/2016/08/angular-2-rc5-ngmodules-lazy-loading.html
export class MainContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('mainAnchor', {read: ViewContainerRef}) anchor:ViewContainerRef;

    private containers:Array<GuiContainer>;

    constructor(private cfr:ComponentFactoryResolver, private gms:GuiManagerService) {
    }

    ngAfterViewInit(){
    }

    ngOnInit() {
        this.containers = this.gms.getGuiContainers();
    }

    goToPart(guiPart:GuiContainer) {
        // console.log('going to part ' + guiPart.id);
    }

}
