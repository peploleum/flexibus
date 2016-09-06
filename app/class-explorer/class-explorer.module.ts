import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClassExplorerComponent} from "./class-explorer.component";
import {ClassExplorerNodeComponent} from "./class-explorer-node.component";
import {FlexibusEntityDescriptorDisplayComponent} from "./flexibus-entity-descriptor-display.component";
import {FlexibusTextHoverDirective} from "./flexibus-text-hover.directive";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ClassExplorerComponent, ClassExplorerNodeComponent, FlexibusEntityDescriptorDisplayComponent, FlexibusTextHoverDirective],
    exports: [ClassExplorerComponent]
})
export class ClassExplorerModule {
    static getComponents() {
        return [ClassExplorerComponent];
    }
}