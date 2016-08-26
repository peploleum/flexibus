import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexibusAttributeInput} from "./flexibus-attribute-input.component";
import {FlexibusForm} from "./flexibus-form.component";
import {FlexibusAttributeDisplay} from "./flexibus-attribute-display.component";
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay],
    exports: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay]
})
export class CoreGuiModule {
    static getComponents() {
        return [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay];
    }
}