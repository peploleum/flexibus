import {Component, OnInit, OnDestroy} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {FooFormService} from "./foo-form.service";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {Subscription} from "rxjs/Rx";
import {Foo} from "./foo";
@Component({
    //moduleId: module.id,
    selector: 'foo-form',
    templateUrl: 'foo-form.component.html',
    styleUrls: ['foo-form.component.css'],
    providers: [FooFormService]
})
export class FooForm extends GuiComponent implements OnInit, OnDestroy {

    guiContextHistory:Array<GuiContext> = new Array<GuiContext>();

    subscription:Subscription;

    dictionnary = ['Foo Value', 'Bar value',
        'Foo bar', 'Bar foo'];

    model = new Foo(1, "John", "Doe", this.dictionnary[0]);

    active = true;

    submitted = false;

    constructor(private ffs:FooFormService, private gcs:GuiContextService) {
        super();
        this.subscription = gcs.guiContext$.subscribe(guiContext => {
            console.log("FooForm received new guiContext " + guiContext.ids);
            this.guiContextHistory.push(guiContext);
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.model.grid){
            let guiContext = new GuiContext(null, this.model.grid, null);
            console.log("FooForm sending " + JSON.stringify(guiContext));
            this.gcs.broadcastContext(guiContext);
        }
        console.log("submitted");
    }

    onAcknowledge(){
        this.submitted = false;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        console.log("destroying");
        this.subscription.unsubscribe();
    }

    newFoo() {
        this.active = false;
        setTimeout(() => {
            this.active = true;
            this.model = new Foo(2, "Jane", "Doe", this.dictionnary[1]);
        }, 1000);

    }
    resetFoo(){
        this.model = new Foo(1, "John", "Doe", this.dictionnary[0]);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }


}