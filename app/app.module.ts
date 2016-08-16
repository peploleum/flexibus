import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {MainContainerComponent} from './main-container.component';
import * as customComponents from './index';

var ngDeclarations = [AppComponent];
var staticCustomDeclarations = [];
staticCustomDeclarations.push(MainContainerComponent);
// auto discover "indexed" Components
var customDeclarations = [];
for (var customComp in customComponents) {
    customDeclarations.push(customComponents[customComp]);
}

var finalDeclarations = ngDeclarations.concat(customDeclarations).concat(staticCustomDeclarations);
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: finalDeclarations,
    bootstrap: [AppComponent]
})
export class AppModule {
}
