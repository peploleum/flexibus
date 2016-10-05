import {Component, OnInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {FooFormPolymerService} from "./foo-form-polymer.service";
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'foo-form-polymer',
    templateUrl: 'foo-form-polymer.component.html',
    styleUrls: ['foo-form-polymer.component.css'],
    providers: [FooFormPolymerService]
})
export class FooFormPolymer extends GuiComponent implements OnInit {
    myForm: FormGroup;


     occupations = ['Sleep', 'Eat', 'Run', 'Fight'];

    constructor(private fb: FormBuilder){
        super();
        this.myForm = this.fb.group({
                "firstName": new FormControl("", Validators.required),
                "lastName": new FormControl("", Validators.minLength(10)),
                "occupation": new FormControl(),
                "grid": new FormControl()
            });
        this.myForm.controls['firstName'].errors;

        //     new FormGroup({
        //     'firstName': new FormControl('', Validators.required),
        //     'lastName': new FormControl('', Validators.minLength(10)),
        //     'occupation': new FormControl(),
        //     'grid': new FormControl()
        // });
    }
    myValue: string;

    ngOnInit() {
        this.myForm.valueChanges.subscribe(value => {
            console.log("changement de valeurs ! ");
            console.log(value);
        });

        this.myForm.patchValue({
            'firstName': 'Hey',
            'occupation': 'Eat'
        });
    }
}