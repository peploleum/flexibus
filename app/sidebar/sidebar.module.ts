import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SideBarComponent} from "./sidebar.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SideBarComponent],
    exports: [SideBarComponent]
})
export class SideBarModule {
    static getComponents():any[] {
        return [];
    }
}