import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BarForm} from "./bar-form.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [BarForm],
    exports: [BarForm]
})
export class BarModule {
    static getComponents() {
        return [BarForm];
    }
}