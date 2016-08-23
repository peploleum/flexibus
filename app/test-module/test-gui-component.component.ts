import {Component, OnInit, OnDestroy} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {TestGuiComponentService, UserContextDto} from "./test-gui-component.service";
import * as d3 from "d3";
import {GuiContextService, GuiContext} from "../gui/gui-context.service";
import {Subscription} from "rxjs/Rx";
@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: './test-gui-component.component.html',
    providers: [TestGuiComponentService]
})
export class TestGuiComponent extends GuiComponent implements OnInit, OnDestroy {

    userContext:UserContextDto = new UserContextDto("", []);
    guiContextHistory:Array<GuiContext> = new Array<GuiContext>();

    subscription: Subscription;

    constructor(private geops:TestGuiComponentService, private gcs:GuiContextService) {
        super();
        this.subscription = gcs.guiContext$.subscribe(guiContext => {
            console.log("FooForm received new guiContext " + guiContext.ids);
            this.guiContextHistory.push(guiContext);
        });
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
            this.userContext = result;
        };
        return receivedUserContextDto;
    }

    goToRight(clickedRight:string) {
        console.log("go to right requested " + clickedRight);
        let guiContext = new GuiContext([clickedRight]);
        this.gcs.broadcastContext(guiContext);
    }

    onSelect(selectedRight:string) {
        console.log("selected right " + selectedRight);
    }

    ngOnDestroy() {
        console.log("destroying");
        this.subscription.unsubscribe();
    }


}