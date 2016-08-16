import {GuiContainer} from './gui-container';
import {GuiExampleOnePartComponent} from './gui-example-one-part.component';
export class ExampleOnePart extends GuiContainer {
    constructor() {
        super('001', GuiExampleOnePartComponent)
    };
}