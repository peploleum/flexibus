/**
 * Created by tbonavia on 17/08/2016.
 */
import {Component} from "@angular/core"

@Component({
    selector: 'root-comp',
    template: ''
})
export class GuiComponent {
    // constructor(...args: any[]) {
    //
    // }
}

export interface IGuiComponent {
    new (...args:any[]):GuiComponent;
}

