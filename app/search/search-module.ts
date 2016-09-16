import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./search.component";
import {SingleSearchResultComponent} from "./single-search-result.component";
import {ImageHrefDirective} from "./image-href.directive";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SearchComponent, SingleSearchResultComponent, ImageHrefDirective],
    exports: [SearchComponent]
})
export class SearchModule {
    static getComponents() {
        return [SearchComponent];
    }
}