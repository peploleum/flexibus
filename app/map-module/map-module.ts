import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MapComponent} from "./map.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [MapComponent],
    exports: [MapComponent]
})
export class MapModule {
    static getComponents() {
        return [MapComponent];
    }
}