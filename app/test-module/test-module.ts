import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ExampleGuiComponent} from "./example-gui-component.component";
import {TestGuiComponent} from "./test-gui-component.component";
import {CartoComponent} from "./carto.component";
import {AnotherTestGuiComponent} from "./another-test-gui-component.component";
import {EasyComponent} from "./easiest-gui-component.component";
import {ResultDisplayComponent} from "./result-display-component.component";
import {GuiModule} from "../gui/gui-module";

@NgModule({
    imports: [CommonModule, FormsModule, GuiModule],
    declarations: [ExampleGuiComponent, TestGuiComponent, CartoComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent],
    exports: [ExampleGuiComponent, TestGuiComponent, CartoComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent]
})
export class TestModule {
    static getComponents() {
        return [ExampleGuiComponent, TestGuiComponent, CartoComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent];
    }
}