import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
@Component({
    selector: 'part-one',
    templateUrl: 'app/gui-example-one-part.html',
    styleUrls: ['app/gui-example-one-part.css']
})
export class GuiExampleOnePartComponent implements OnInit {

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
    }

}
