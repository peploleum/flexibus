/**
 * Created by tbonavia on 17/08/2016.
 */
import {Component} from "@angular/core"

@Component({
    selector: 'fake-comp',
    template: ''
})
export class GuiComponent {
    constructor() {

    }
}

export interface IGuiComponent{
    new (): GuiComponent;
}

