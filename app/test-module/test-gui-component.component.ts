import {Component, OnInit, Output, EventEmitter, ChangeDetectorRef} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {TestGuiComponentService, UserContextDto} from "./test-gui-component.service";
import * as d3 from "d3";
@Component({
    selector: 'test',
    templateUrl: 'app/test-module/test-gui-component.component.html',
    providers: [TestGuiComponentService]
})
export class TestGuiComponent extends GuiComponent implements OnInit {

    userContext:UserContextDto = new UserContextDto("", []);
    @Output() contextSelectedEventEmitter: EventEmitter<UserContextDto> = new EventEmitter<UserContextDto>();

    constructor(private geops:TestGuiComponentService, private cdr:ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        var selectedSvgAnchor = d3.select('#svganchor');

        //Make an SVG Container
        var svgContainer = selectedSvgAnchor.append("svg")
            .attr("width", 200)
            .attr("height", 200);

        //Draw the Circle
        var circle = svgContainer.append("circle")
            .attr("cx", 30)
            .attr("cy", 30)
            .attr("r", 20);
        this.getUserContextDto();
    }

    getUserContextDto() {
        this.geops.getUserContext().then(this.onUserContextDto()).catch(error => console.error(error));
    }

    private onUserContextDto() {
        let receivedUserContextDto = result => {
            console.log("received dto" + result);
            this.userContext = result
            this.cdr.markForCheck();
        };
        return receivedUserContextDto;
    }

    goToRight(clickedRight:UserContextDto){
        console.log("go to right requested " + clickedRight);
        this.contextSelectedEventEmitter.emit(clickedRight);
    }

    onSelect(selectedRight:string){
        console.log("selected right " + selectedRight);
    }



}