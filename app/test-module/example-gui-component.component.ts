/**
 * Created by tbonavia on 17/08/2016.
 */
import {Component, OnInit, AfterViewInit} from "@angular/core"
import {GuiComponent} from "../gui/gui-component";

@Component({
    selector: 'example-1',
    template: '<div>test moche</div>'
})
export class ExampleGuiComponent extends GuiComponent implements OnInit, AfterViewInit{

    constructor(){
        console.log("constructing ExampleGuiComponent");
        super();
    }
    ngOnInit(){
        console.log("salut les musclés");
    }
    ngAfterViewInit(){
        console.log("salut les musclés 2");
    }
}