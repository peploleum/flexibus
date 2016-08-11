import {
    Component,
    OnInit,
    ComponentResolver,
    ViewContainerRef,
} from '@angular/core';
import {GuiPart} from './gui-part';
import {GuiManagerService} from './gui-manager.service';
import * as components from './index';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [GuiManagerService]
})
// 1 - inject component anywhere in tabs
// 2 - inter component communication
// 3 - polymer panel resize & flexbox
// 4 - navbar / sidebar
export class AppComponent implements OnInit {
    title = 'Flexibus';

    constructor(private cr:ComponentResolver, private viewContainer:ViewContainerRef, private guiManagerService:GuiManagerService) {
    }

    ngOnInit() {
       let guiParts = this.guiManagerService.getGuiParts();
        for (var guiPart of guiParts){
            console.log('trying to inject :) ' + guiPart.title + ' component in the container');
            let customComp = components[guiPart.title];
            let resolvedComponent = this.cr.resolveComponent(customComp);
            resolvedComponent.then(factory => {
                console.log('found factory');
                this.viewContainer.createComponent(factory, 0, this.viewContainer.injector)
            }).catch(error => {
                console.error(error)
            });
        }
    }

    goToPart(guiPart:GuiPart) {
        // console.log('going to part ' + guiPart.id);
    }

}
