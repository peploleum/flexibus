/**
 * Created by tbonavia on 19/08/2016.
 */

import {Component, OnInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import * as ol from 'openlayers'

@Component({
    selector:'carto',
    template:'<div id="carto-place"></div>'
})
export class CartoComponent extends GuiComponent implements OnInit{
    ngOnInit(){
        new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'carto-place',
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        })
    }
}