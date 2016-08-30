import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {FlexibusEntity} from "../core/flexibus-entity";
import {FormGroup} from "@angular/forms";
import {FlexibusFormService} from "./flexibus-form.service";

@Component({
    moduleId: module.id,
    selector: 'flexibus-form',
    templateUrl: 'flexibus-form.component.html',
    styleUrls: ['flexibus-form.component.css'],
    providers: [FlexibusFormService]
})
export class FlexibusForm implements OnInit, OnDestroy {

    @Input() model:FlexibusEntity;
    active:boolean;
    private flexibusForm:FormGroup;
    valueObserver:string;

    constructor(private fes:FlexibusFormService) {
        this.active = true;
        this.flexibusForm = new FormGroup({});
    }

    ngOnInit() {
        this.flexibusForm.valueChanges.subscribe((value) => {
            this.valueObserver = value;
        });
        this.fes.getFormModel().then((value) => {
            this.model = value;
        })
    }

    getEntity() {
        this.fes.getEntity().then(value => {
            console.log("got value");
            console.log(JSON.stringify(value));
            for (let val of value.attributesValues){
                let innerFormControl = this.flexibusForm.get(val.attribute.name);
                innerFormControl.patchValue(val.value, {
                    emitEvent: false,
                    emitModelToViewChange: true
                });
            }
        })
    }

    ngOnDestroy() {
    }

    diagnostic() {
        return JSON.stringify(this.model);
    }

    onSubmit() {
        console.log("submitting");
    }


}