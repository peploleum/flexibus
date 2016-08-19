import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {MainContainerComponent} from './main-container.component';
import {SimplePanelComponent} from "./panels/simple-panel.component";
import {GuiModule} from "./gui/gui-module";
import {HttpModule} from "@angular/http";

var ngDeclarations = [AppComponent];
var staticCustomDeclarations = [];
staticCustomDeclarations.push(MainContainerComponent);
// auto discover "indexed" Components
var customDeclarations = [];
//for (var customComp in customComponents) {
//    customDeclarations.push(customComponents[customComp]);
//}
customDeclarations.push(SimplePanelComponent);

var finalDeclarations = ngDeclarations.concat(customDeclarations).concat(staticCustomDeclarations);
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, GuiModule.forRoot()],
    declarations: finalDeclarations,
    entryComponents: GuiModule.getComponents(),
    bootstrap: [AppComponent]
})
export class AppModule {
}
