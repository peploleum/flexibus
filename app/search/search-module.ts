import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./search.component";
import {SingleSearchResultComponent} from "./single-search-result.component";
import {HoverableDirective} from "./hoverable.directive";
import {CoreGuiModule} from "../core-gui/core-gui-module";

@NgModule({
    imports: [CommonModule, FormsModule, CoreGuiModule],
    declarations: [SearchComponent, SingleSearchResultComponent, HoverableDirective],
    exports: [SearchComponent]
})
export class SearchModule {
    static getComponents() {
        return [SearchComponent];
    }
}