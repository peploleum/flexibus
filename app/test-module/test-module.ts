import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExampleGuiComponent} from "./example-gui-component.component";
import {TestGuiComponent} from "./test-gui-component.component";
import {CartoComponent} from "./carto.component";
import {AnotherTestGuiComponent} from "./another-test-gui-component.component";
import {EasyComponent} from "./easiest-gui-component.component";
import {ResultDisplayComponent} from "./result-display-component.component";
import {GuiModule} from "../gui/gui-module";
import {PhotoService} from "./diaporama/service/photo.service";
import {SearchComponent} from "./search-component.component";

@NgModule({
    imports: [CommonModule, FormsModule, GuiModule, ReactiveFormsModule],
    declarations: [ExampleGuiComponent, TestGuiComponent, CartoComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent, SearchComponent],
    exports: [ExampleGuiComponent, TestGuiComponent, CartoComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent],
    providers: [PhotoService]
})
export class TestModule {
    static getComponents() {
        return [ExampleGuiComponent, TestGuiComponent, CartoComponent, AnotherTestGuiComponent, EasyComponent, ResultDisplayComponent];
    }
}