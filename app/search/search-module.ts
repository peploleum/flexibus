import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./search.component";
import {SingleSearchResultComponent} from "./single-search-result.component";
import {CoreGuiModule} from "../core-gui/core-gui-module";
import {MenuModule} from "../menu/menu-module";

@NgModule({
    imports: [CommonModule, FormsModule, CoreGuiModule, MenuModule],
    declarations: [SearchComponent, SingleSearchResultComponent],
    exports: [SearchComponent]
})
export class SearchModule {
    static getComponents() {
        return [SearchComponent];
    }
}