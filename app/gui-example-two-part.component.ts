///<reference path="../typings/globals/node/index.d.ts"/>
import {Component, OnInit} from '@angular/core';
import * as ol from 'openlayers';
@Component({
    selector: 'part-two',
    templateUrl: 'app/gui-example-two-part.html'
})
export class GuiExampleTwoPartComponent implements OnInit {

    ngOnInit() {
        var map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }),
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });
        // new ol.layers.
        console.log("map");
        console.log(map);
    }
}
