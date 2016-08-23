import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {MainContainerComponent} from "./main-container.component";
import {HttpModule} from "@angular/http";
import {FooModule} from "./foo-module/foo-module";
import {GuiModule} from "./gui/gui-module";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, FooModule, GuiModule],
    declarations: [MainContainerComponent, AppComponent],
    entryComponents: [FooModule.getComponents(), GuiModule.getComponents()],
    bootstrap: [AppComponent]
})
export class AppModule {
}
