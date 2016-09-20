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
import {FlexibusButtonHoverDirective} from "./flexibus-button-hover.directive";
import {HoverableDirective} from "./hoverable.directive";
@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl, FlexibusButtonComponent, FlexibusButtonHoverDirective, HoverableDirective],
    exports: [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl, FlexibusButtonComponent, FlexibusButtonHoverDirective, HoverableDirective],
})
export class CoreGuiModule {
    static getComponents() {
        return [FlexibusAttributeInput, FlexibusForm, FlexibusAttributeDisplay, FlexibusAttributeDictionary, FlexibusAttributeGeometry, FlexibusAttributeDateControl];
    }
}