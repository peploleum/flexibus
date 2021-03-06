import {Injectable} from "@angular/core";
import * as ol from "openlayers";
import ReadOptions = olx.format.ReadOptions;

@Injectable()
export class MapService {

    private _businessLayer:ol.layer.Layer;
    businessSource:ol.source.Vector;

    constructor() {
        this._businessLayer = new ol.layer.Vector();
        this.businessSource = new ol.source.Vector();
        this._businessLayer.setSource(this.businessSource);
    }


    get businessLayer():ol.layer.Layer {
        return this._businessLayer;
    }

    addLocation(location:string) {
        let feature = new ol.format.WKT().readFeature(location, {
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
        });
        if (feature == null || feature == undefined) {
            console.log("cannot read proper WKT feature " + location);
            return;
        }
        this.businessSource.addFeature(feature);
    }

    initLocations() {
        var geojsonObject = {
            'type': 'FeatureCollection',
            'crs': {
                'type': 'name',
                'properties': {
                    'name': 'EPSG:3857'
                }
            },
            'features': [{
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [4e6, -2e6]
                }
            }, {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [[4e6, -2e6], [8e6, 2e6]]
                }
            }, {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [[4e6, 2e6], [8e6, -2e6]]
                }
            }, {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]]
                }
            }, {
                'type': 'Feature',
                'geometry': {
                    'type': 'MultiLineString',
                    'coordinates': [
                        [[-1e6, -7.5e5], [-1e6, 7.5e5]],
                        [[1e6, -7.5e5], [1e6, 7.5e5]],
                        [[-7.5e5, -1e6], [7.5e5, -1e6]],
                        [[-7.5e5, 1e6], [7.5e5, 1e6]]
                    ]
                }
            }, {
                'type': 'Feature',
                'geometry': {
                    'type': 'MultiPolygon',
                    'coordinates': [
                        [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6], [-3e6, 6e6]]],
                        [[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6], [0, 6e6]]],
                        [[[1e6, 6e6], [1e6, 8e6], [3e6, 8e6], [3e6, 6e6]]]
                    ]
                }
            }, {
                'type': 'Feature',
                'geometry': {
                    'type': 'GeometryCollection',
                    'geometries': [{
                        'type': 'LineString',
                        'coordinates': [[-5e6, -5e6], [0, -5e6]]
                    }, {
                        'type': 'Point',
                        'coordinates': [4e6, -5e6]
                    }, {
                        'type': 'Polygon',
                        'coordinates': [[[1e6, -6e6], [2e6, -4e6], [3e6, -6e6]]]
                    }]
                }
            }]
        };

        let geoJSON = new ol.format.GeoJSON();
        let readFeatures = geoJSON.readFeatures(JSON.stringify(geojsonObject));
        this.businessSource.addFeatures(readFeatures);
    }
}