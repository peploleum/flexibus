import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BarForm} from "./bar-form.component";
import {FlexibusAttributeHighlightDirective} from "./flexibus-attribute-highlight.directive";
import {CoreGuiModule} from "../core-gui/core-gui-module";

@NgModule({
    imports: [CommonModule, FormsModule, CoreGuiModule],
    declarations: [BarForm, FlexibusAttributeHighlightDirective],
    exports: [BarForm]
})
export class BarModule {
    static getComponents() {
        return [BarForm];
    }
}