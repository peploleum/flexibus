import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {MainContainerComponent} from "./main-container.component";
import {HttpModule} from "@angular/http";
import {FooModule} from "./foo-module/foo-module";
import {GuiModule} from "./gui/gui-module";
import {TestModule} from "./test-module/test-module";
import {MapModule} from "./map-module/map-module";
import {BarModule} from "./bar-module/bar-module";
import {CoreGuiModule} from "./core-gui/core-gui-module";
import {FooPolymerModule} from "./foo-module-polymer/foo-module-polymer";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, FooModule, FooPolymerModule, TestModule, GuiModule, MapModule, BarModule, CoreGuiModule],
    declarations: [MainContainerComponent, AppComponent],
    entryComponents: [FooModule.getComponents(), FooPolymerModule.getComponents(), GuiModule.getComponents(), TestModule.getComponents(), MapModule.getComponents(), BarModule.getComponents(), CoreGuiModule.getComponents()],
    bootstrap: [AppComponent]
})
export class AppModule {
}
