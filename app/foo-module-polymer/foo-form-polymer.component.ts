import {Component, OnInit, ViewChild, ElementRef, Renderer} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {FooFormPolymerService} from "./foo-form-polymer.service";
import {
    REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, Validators
} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'foo-form-polymer',
    templateUrl: 'foo-form-polymer.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES],
    styleUrls: ['foo-form-polymer.component.css'],
    providers: [FooFormPolymerService]
})
export class FooFormPolymer extends GuiComponent implements OnInit {//}, OnDestroy {
    private myForm:FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.minLength(10)),
        occupation: new FormControl(),
        grid: new FormControl()
    });

    private occupations = ['Sleep', 'Eat', 'Run', 'Fight'];

    private myValue:string;

    ngOnInit() {
        this.myForm.valueChanges.subscribe(value => {
            console.log("changement de valeurs ! ");
            console.log(value);
        });

        this.myForm.patchValue({
            firstName:'Hey',
            occupation: 'Eat'
        });
    }

// guiContextHistory:Array<GuiContext> = new Array<GuiContext>();
//
// subscription:Subscription;
// test:string;
//
// dictionnary = ['Foo Value', 'Bar value',
//     'Foo bar', 'Bar foo'];
//
// model = new Foo(1, "John", "Doe", this.dictionnary[0]);
//
// active = true;
//
// submitted = false;
//
// constructor(private ffs:FooFormPolymerService, private gcs:GuiContextService) {
//     super();
//     this.subscription = gcs.guiContext$.subscribe(guiContext => {
//         console.log("FooFormPolymer received new guiContext " + guiContext.ids);
//         this.guiContextHistory.push(guiContext);
//     });
// }
//
// onSubmit() {
//     this.submitted = true;
//     if (this.model.grid) {
//         let guiContext = new GuiContext(null, this.model.grid);
//         console.log("FooFormPolymer sending " + JSON.stringify(guiContext));
//         this.gcs.broadcastContext(guiContext);
//     }
//     console.log("submitted");
// }
//
// onAcknowledge() {
//     this.submitted = false;
// }
//
// ngOnInit() {
// }
//
// ngOnDestroy() {
//     console.log("destroying");
//     this.subscription.unsubscribe();
// }
//
// newFoo() {
//     this.active = false;
//     setTimeout(() => {
//         this.active = true;
//         this.model = new Foo(2, "Jane", "Doe", this.dictionnary[1]);
//     }, 1000);
//
// }
//
// resetFoo() {
//     this.model = new Foo(1, "John", "Doe", this.dictionnary[0]);
// }
//
// get diagnostic() {
//     return JSON.stringify(this.model);
// }


}