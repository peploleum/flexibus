import {
    Component,
    OnInit,
    ComponentFactoryResolver,
    ViewContainerRef,
} from '@angular/core';
import {GuiContainer} from './gui/gui-container';
import {GuiManagerService} from './gui/gui-manager.service';
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
export class MainContainerComponent implements OnInit {

    constructor(private cfr:ComponentFactoryResolver, private vcr:ViewContainerRef, private gms:GuiManagerService) {
    }

    ngOnInit() {
        let containers:Array<GuiContainer> = this.gms.getGuiContainers();

        for (var container of containers) {
            console.log('trying to inject :) ' + container.mainItem.name + ' component in the container');

            // angular2 needs 'entryComponents' to be declared in a Component to enable dynamic component loading
            let customComp = container.mainItem.componentType;
            let resolvedComponentFactory = this.cfr.resolveComponentFactory(customComp);
            // check if the create method can be used
            // let resolvedComponent = resolvedComponentFactory.create(this.vcr.injector, null, 'my-app');
            this.vcr.createComponent(resolvedComponentFactory);
        }
    }

    goToPart(guiPart:GuiContainer) {
        // console.log('going to part ' + guiPart.id);
    }

}
