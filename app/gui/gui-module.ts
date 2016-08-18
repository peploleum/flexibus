/**
 * Created by tbonavia on 18/08/2016.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuiComponent} from "./gui-component";
import {GuiManagerService} from "./gui-manager.service";
import {ExampleGuiComponent} from "../test-module/example-gui-component.component";
import {GuiView} from "./gui-view.component";
import {TestGuiComponent} from '../test-module/test-gui-component.component'

@NgModule({
    imports: [CommonModule],
    declarations: [GuiComponent, GuiView, ExampleGuiComponent, TestGuiComponent],
    exports: [ExampleGuiComponent, GuiView]
})
export class GuiModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: GuiModule,
            providers: [GuiManagerService]
        };
    }

    static getComponents() {
        return [ExampleGuiComponent, GuiView, TestGuiComponent];
    }
}