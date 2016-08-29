import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FooFormPolymer} from "./foo-form-polymer.component";
import {PaperInputValueAccessor} from "./paper-input-directive";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [FooFormPolymer],
    exports: [FooFormPolymer],
})
export class FooPolymerModule {
    static getComponents() {
        return [FooFormPolymer];
    }
}