import {
    Component,
    OnInit,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
    AfterViewInit,
    ViewChildren,
    QueryList
} from "@angular/core";
import {GuiContainer} from "./gui/gui-container";
import {GuiManagerService} from "./gui/gui-manager.service";
import {IGuiComponent} from "./gui/gui-component";
import {EasyComponent} from "./test-module/easiest-gui-component.component";
import {SimplePanelComponent} from "./panels/simple-panel.component";
import {GuiView} from "./gui/gui-view.component";
//import * as components from './index';

// loading all components to resolve them by type w/ the ComponentFactoryResolver
var customEntryComponents = [];
//for (var customComponent in components){
//   customEntryComponents.push(components[customComponent]);
//}

@Component({
    selector: 'main-container',
    templateUrl: 'app/main-container.component.html',
    styleUrls: ['app/main-container.component.css'],
    providers: [GuiManagerService],
    entryComponents: customEntryComponents
})
// 1 - inject component anywhere in page
// 2 - inter component communication
// 3 - flexbox containers for modules
// 4 - navbar / sidebar
// 5 - try AOT instead of JIT compilation http://angularjs.blogspot.fr/2016/08/angular-2-rc5-ngmodules-lazy-loading.html
export class MainContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('mainAnchor', {read: ViewContainerRef}) anchor:ViewContainerRef;

    constructor(private cfr:ComponentFactoryResolver, private gms:GuiManagerService) {
    }

    ngAfterViewInit(){
    }

    ngOnInit() {
        let containers:Array<GuiContainer> = this.gms.getGuiContainers();
        for (var container of containers) {
            console.log('trying to inject :) ' + container.mainItem.name + ' component in the container');



            let view = this.cfr.resolveComponentFactory(GuiView);
            let viewComponentRef = this.anchor.createComponent(view);

            viewComponentRef.instance.setMain(container.mainItem.componentType);
            for (var leftItem of container.leftItems) {
                viewComponentRef.instance.addLeft(leftItem.componentType);
            }
            for (var rightItem of container.rightItems) {
                viewComponentRef.instance.addRight(rightItem.componentType);
            }


            // angular2 needs 'entryComponents' to be declared in a Component to enable dynamic component loading
            /*let customComp = container.mainItem.componentType;
             let resolvedComponentFactory = this.cfr.resolveComponentFactory(customComp);
             this.vcr.createComponent(resolvedComponentFactory);*/
        }
    }

    goToPart(guiPart:GuiContainer) {
        // console.log('going to part ' + guiPart.id);
    }

}
