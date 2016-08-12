﻿import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {MainContainerComponent} from './main-container.component';
import * as customComponents from './index';

// auto discover "indexed" Components
var ngDeclarations = [AppComponent];
var staticCustomDeclarations = [];
staticCustomDeclarations.push(MainContainerComponent);
var customDeclarations = [];
for (var customComp in customComponents) {
    customDeclarations.push(customComponents[customComp]);
}

var finalDeclarations = ngDeclarations.concat(customDeclarations).concat(staticCustomDeclarations);
@NgModule({
    imports: [BrowserModule],
    declarations: finalDeclarations,
    bootstrap: [AppComponent]
})
export class AppModule {
}
