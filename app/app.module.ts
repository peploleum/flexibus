import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {MainContainerComponent} from './main-container.component';
//import * as customComponents from './index';
import {SimplePanelComponent} from "./panels/simple-panel.component";
import {GuiModule} from "./gui/gui-module";

var ngDeclarations = [AppComponent];
var staticCustomDeclarations = [];
staticCustomDeclarations.push(MainContainerComponent);
// auto discover "indexed" Components
var customDeclarations = [];
//for (var customComp in customComponents) {
//    customDeclarations.push(customComponents[customComp]);
//}

var finalDeclarations = ngDeclarations.concat(customDeclarations).concat(staticCustomDeclarations);
@NgModule({
    imports: [BrowserModule, FormsModule, GuiModule.forRoot()],
    declarations: finalDeclarations,
    entryComponents: GuiModule.getComponents(),
    bootstrap: [AppComponent]
})
export class AppModule {
}
