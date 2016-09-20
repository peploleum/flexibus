import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexibusAttributeInput} from "./flexibus-attribute-input.component";
import {FlexibusForm} from "./flexibus-form.component";
import {FlexibusAttributeDisplay} from "./flexibus-attribute-display.component";
import {FlexibusAttributeDictionary} from "./flexibus-attribute-dictionary.component";
import {FlexibusAttributeGeometry} from "./flexibus-attribute-geometry.component";
import {FlexibusAttributeDateControl} from "./flexibus-attribute-date.component";
import {FlexibusButtonComponent} from "./flexibus-button.component";
@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl, FlexibusButtonComponent],
    exports: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl, FlexibusButtonComponent],
})
export class CoreGuiModule {
    static getComponents() {
        return [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl];
    }
}