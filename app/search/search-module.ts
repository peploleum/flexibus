import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./search.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})
export class SearchModule {
    static getComponents() {
        return [SearchComponent];
    }
}