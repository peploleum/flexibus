import {NgModule} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexibusAttributeInput} from "./flexibus-attribute-input.component";
import {FlexibusForm} from "./flexibus-form.component";
import {FlexibusAttributeDisplay} from "./flexibus-attribute-display.component";
import {FlexibusAttributeDictionary} from "./flexibus-attribute-dictionary.component";
import {FlexibusAttributeGeometry} from "./flexibus-attribute-geometry.component";
import {FlexibusAttributeDateControl} from "./flexibus-attribute-date.component";
@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    declarations: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl],
    exports: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl],
})
export class CoreGuiModule {
    static getComponents() {
        return [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl];
    }
}