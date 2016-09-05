import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClassExplorerComponent} from "./class-explorer.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ClassExplorerComponent],
    exports: [ClassExplorerComponent]
})
export class ClassExplorerModule {
    static getComponents() {
        return [ClassExplorerComponent];
    }
}