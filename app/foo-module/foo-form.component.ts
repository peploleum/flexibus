import {Component, OnInit, OnDestroy} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {FooFormService} from "./foo-form.service";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {Subscription} from "rxjs/Rx";
@Component({
    moduleId: module.id,
    selector: 'foo-form',
    templateUrl: 'foo-form.component.html',
    styleUrls:['foo-form.component.css'],
    providers: [FooFormService]
})
export class FooForm extends GuiComponent implements OnInit, OnDestroy {

    guiContextHistory:Array<GuiContext> = new Array<GuiContext>();

    subscription: Subscription;

    constructor(private ffs:FooFormService, private gcs:GuiContextService) {
        super();
        this.subscription = gcs.guiContext$.subscribe(guiContext => {
            console.log("FooForm received new guiContext " + guiContext.ids);
            this.guiContextHistory.push(guiContext);
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        console.log("destroying");
        this.subscription.unsubscribe();
    }


}