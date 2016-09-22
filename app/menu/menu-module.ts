import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CoreGuiModule} from "../core-gui/core-gui-module";
import {MenuItemDirective} from "./menu-item.directive";
import {MenuComponent} from "./menu.component";

@NgModule({
    imports: [CommonModule, FormsModule, CoreGuiModule],
    declarations: [MenuItemDirective, MenuComponent],
    exports: [MenuItemDirective, MenuComponent],
    entryComponents: [MenuComponent]
})
export class MenuModule {
    static getComponents():any[] {
        return [];
    }
}