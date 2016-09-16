import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GuiComponent} from "./gui-component";
import {GuiManagerService} from "../main-container.service";
import {GuiView} from "./gui-view.component";
import {FormsModule} from "@angular/forms";
import {GuiContextHistory} from "../test-module/gui-context-history.component";
import {SimplePanelComponent} from "./simple-panel.component";
import {ContentLoader} from "./content-loader.directive";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [GuiComponent, GuiView, SimplePanelComponent, GuiContextHistory, ContentLoader],
    exports: [GuiComponent, GuiView, SimplePanelComponent, GuiContextHistory],

})
export class GuiModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: GuiModule,
            providers: [GuiManagerService]
        };
    }

    static getComponents() {
        // return [ExampleGuiComponent, GuiView, TestGuiComponent, SimplePanelComponent,ClassExplorerSearchComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent, GuiContextHistory];
        return [ GuiView, SimplePanelComponent ];
    }
}