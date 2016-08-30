import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {FooFormPolymer} from "./foo-form-polymer.component";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [FooFormPolymer],
    exports: [FooFormPolymer],
})
export class FooPolymerModule {
    static getComponents() {
        return [FooFormPolymer];
    }
}