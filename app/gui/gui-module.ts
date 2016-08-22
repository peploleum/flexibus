/**
 * Created by tbonavia on 18/08/2016.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GuiComponent} from "./gui-component";
import {GuiManagerService} from "./gui-manager.service";
import {ExampleGuiComponent} from "../test-module/example-gui-component.component";
import {GuiView} from "./gui-view.component";
import {TestGuiComponent} from "../test-module/test-gui-component.component";
import {FormsModule} from "@angular/forms";
import {SimplePanelComponent} from "../panels/simple-panel.component";
import {CartoComponent} from "../test-module/carto.component";
import {AnotherTestGuiComponent} from "../test-module/another-test-gui-component.component";
import {ResultDisplayComponent} from "../test-module/result-display-component.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [GuiComponent, GuiView, ExampleGuiComponent, TestGuiComponent, SimplePanelComponent, CartoComponent, AnotherTestGuiComponent, ResultDisplayComponent],
    exports: [ExampleGuiComponent, GuiView, TestGuiComponent, SimplePanelComponent, CartoComponent, AnotherTestGuiComponent, ResultDisplayComponent]
})
export class GuiModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: GuiModule,
            providers: [GuiManagerService]
        };
    }

    static getComponents() {
        return [ExampleGuiComponent, GuiView, TestGuiComponent, SimplePanelComponent, CartoComponent, AnotherTestGuiComponent, ResultDisplayComponent];
    }
}