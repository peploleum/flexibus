import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexibusAttributeInput} from "./flexibus-attribute-input.component";
import {FlexibusForm} from "./flexibus-form.component";
import {FlexibusAttributeDisplay} from "./flexibus-attribute-display.component";
import {FlexibusAttributeDictionary} from "./flexibus-attribute-dictionary.component";
import {FlexibusAttributeGeometry} from "./flexibus-attribute-geometry.component";
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry],
    exports: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry]
})
export class CoreGuiModule {
    static getComponents() {
        return [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry];
    }
}