import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FooForm} from "./foo-form.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [FooForm],
    exports: [FooForm]
})
export class FooModule {
    static getComponents() {
        return [FooForm];
    }
}