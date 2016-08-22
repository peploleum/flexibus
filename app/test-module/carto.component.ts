/**
 * Created by tbonavia on 19/08/2016.
 */

import {Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import * as ol from 'openlayers'

@Component({
    selector: 'carto',
    template: '<div id="mapAnchor"></div>',
})
export class CartoComponent extends GuiComponent implements OnInit {
    constructor(private element:ElementRef) {
        super();
    }

    ngOnInit() {
        new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: this.element.nativeElement.querySelector('#mapAnchor'),
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });
    }
}