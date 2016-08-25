import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BarForm} from "./bar-form.component";
import {FlexibusAttributeDirective} from "./flexibus-attribute.directive";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [BarForm, FlexibusAttributeDirective],
    exports: [BarForm]
})
export class BarModule {
    static getComponents() {
        return [BarForm];
    }
}