/**
 * Created by tbonavia on 18/08/2016.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GuiComponent} from "./gui-component";
import {GuiManagerService} from "./gui-manager.service";
import {GuiView} from "./gui-view.component";
import {FormsModule} from "@angular/forms";
import {SimplePanelComponent} from "../panels/simple-panel.component";
import {GuiContextHistory} from "../test-module/gui-context-history.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [GuiComponent, GuiView, SimplePanelComponent, GuiContextHistory],
    exports: [GuiComponent, GuiView, SimplePanelComponent, GuiContextHistory]
})
export class GuiModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: GuiModule,
            providers: [GuiManagerService]
        };
    }

    static getComponents() {
        // return [ExampleGuiComponent, GuiView, TestGuiComponent, SimplePanelComponent,CartoComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent, GuiContextHistory];
        return [ GuiView ];
    }
}