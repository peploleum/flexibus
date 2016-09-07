import {Component, OnInit, AfterViewInit} from "@angular/core";
import {GuiContainer} from "./gui-api/gui-container";
import {GuiManagerService} from "./main-container.service";

@Component({
    selector: 'main-container',
    templateUrl: 'app/main-container.component.html',
    styleUrls: ['app/main-container.component.css'],
    providers: [GuiManagerService]
})
//  try AOT instead of JIT compilation http://angularjs.blogspot.fr/2016/08/angular-2-rc5-ngmodules-lazy-loading.html
export class MainContainerComponent implements OnInit, AfterViewInit {
    private containers:Array<GuiContainer>;

    constructor(private gms:GuiManagerService) {
        this.gms.containerEmmitter.subscribe(event => {
            this.containers = this.gms.getGuiContainers();
            this.onTabClicked(this.containers.length - 1);
        });
    }

    MAX_ALLOWED_LOADED_CONTAINERS:number = 2;
    lastActive:number = 0;

    onTabClicked(i:number) {
        this.containers[this.lastActive].active = false;
        if (this.gms.guiManager.countLoadedContainers() >= this.MAX_ALLOWED_LOADED_CONTAINERS){
            //unload first one, unloading policy should be smarter than this
           this.gms.guiManager.loadedContainers()[0].loaded = false;
        }
        this.containers[i].loaded = true;
        this.containers[i].active = true;
        this.lastActive = i;
        console.log(this.gms.guiManager.countLoadedContainers() + " LOADED CONTAINERS");
    }

    onSubTabClicked(i:number) {
    }

    isCurrent(i:number) {
        return this.containers[i].active;
    }

    canLoad(i:number):boolean {
        return this.containers[i].loaded;
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.containers = this.gms.getGuiContainers();
    }
}
