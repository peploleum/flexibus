/**
 * Created by tbonavia on 19/08/2016.
 */

import {Component, OnInit, ElementRef, AfterViewInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import * as ol from "openlayers";

@Component({
    selector: 'carto',
    template: '<div id="mapAnchor" [style.height]="height" (window:resize)="onResize($event)"></div>',
    styleUrls: ['app/test-module/carto.component.css']
})
export class CartoComponent extends GuiComponent implements AfterViewInit {
    private height:number;

    constructor(private element:ElementRef) {
        super();
    }

    onResize(event) {
        this.height = this.element.nativeElement.offsetHeight;
    }

    ngAfterViewInit() {
        // Fonctionnement standard : on modifie le bindings dans la boucle. Il faut donc faire le setTimeout pour forcer
        // la relecture : @link https://github.com/angular/angular/issues/6005
        setTimeout(() => {
            this.height = this.element.nativeElement.offsetHeight;

            setTimeout(() => {
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
            });
        });
    }
}