import { Feature, Map, View } from 'ol';
import { VectorTile as VectorTileSource } from 'ol/source';
import { VectorTile as VectorTileLayer } from 'ol/layer';
import { MVT } from 'ol/format';
import {fromLonLat, getPointResolution, useGeographic} from 'ol/proj.js';
import PerspectiveMap from 'ol-ext/map/PerspectiveMap'
// import {applyStyle, stylefunction} from 'ol-mapbox-style';
import {applyStyle} from './style/index.js';
import style from './style.js';
import Style from 'ol/style/Style.js';
import Icon from 'ol/style/Icon.js';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import Placemark from 'ol-ext/overlay/Placemark';
import {defaults as defaultControls} from 'ol/control/defaults';
import { fromExtent } from 'ol/geom/Polygon.js';
import { apply as applyTransform } from 'ol/extent.js';
import wazeData from './waze';
import LineString from 'ol/geom/LineString.js';
import Stroke from 'ol/style/Stroke.js';

const anchors = {
    default: {
        anchor1: { x: 400, y: 410, rotationOffset: 0 },
        anchor2: { x: 400, y: 340, rotationOffset: 0 },
        anchor3: { x: 600, y: 410, rotationOffset: 0 },
    },
    perspective: {
        anchor1: { x: 800, y: 870, rotationOffset: 0 },
        anchor2: { x: 800, y: 825, rotationOffset: 0 },
        anchor3: { x: 905, y: 870, rotationOffset: -7 }
    }
}

function deg2Rad(degree) {
    return degree * Math.PI / 180;
}

function initMap() {

    var imageUrl = new URL('image.png', import.meta.url);
    var northUrl = new URL('north.png', import.meta.url);
    var usePerspectiveMap = true;

    useGeographic();
    var source = new VectorTileSource({
        format: new MVT(),
        url: 'https://map.md/api/tiles/data/v3/{z}/{x}/{y}.pbf?v=2023-01-23T08:59:36Z'
    });
    source.on('tileloadstart', function() {
        // console.log('tileloadstart', Date.now());
    });
    source.on('tileloadend', function(e) {
        // console.log(e.tile.getFeatures());
        // console.log('tileloadend', Date.now());
    });

    var layer = new VectorTileLayer({
        renderMode: 'vector',
        source: source,
        renderBuffer: 150
    });
    
    var currentAngleDeg = 30;
    var iconStyle = new Style({
        image: new Icon({
            src: imageUrl.toString(),
            rotation: deg2Rad(currentAngleDeg),
            rotateWithView: true,
            width: 32,
            height: 32
        })
    });

    var currentPosition = [28.832178,46.995910];//[28.832788,46.995694];
    var iconFeature = new Feature({
        geometry: new Point(currentPosition)
    });
    iconFeature.setStyle(iconStyle);
    
    var vectorSource = new VectorSource({
        features: [iconFeature]
    });
    var vectorLayer = new VectorLayer({
        source: vectorSource
    });

    var targetAnchor = 'anchor2';
    var anchor = usePerspectiveMap ? anchors.perspective[targetAnchor] : anchors.default[targetAnchor];
    var view = new View({
        center: [28.833677,47.023006],
        zoom: 17, 
        rotation: -deg2Rad(currentAngleDeg + anchor.rotationOffset)
    });

    var span = document.createElement('span');
    span.innerHTML = '<img src="' + northUrl.toString() + '" width="25">';
    var mapOptions = {
        allOverlays: false,
        layers: [ layer, vectorLayer ],
        target: 'map',
        view: view,
        // controls: defaultControls({
        //     rotateOptions: { label: span }
        // })
    };
    var map = usePerspectiveMap ? new PerspectiveMap(mapOptions) : new Map(mapOptions);
    map.on('precompose', function() { 
        // console.log(view.getCenter());
        // console.log(map.getSize());
        // console.log('precompose', Date.now()); 
    });
    // map.on('rendercomplete', function() { 

    //     // console.log(getStreet(map, currentPosition));

    //     var pixel = [397.6000061035156, 374.6000061035156];

    //     map.forEachFeatureAtPixel(pixel, function (f) {
    //         var props = f.getProperties();
    //         if (props.layer == "transportation_name") {
    //             console.log('current street: ' + props.name);
    //         }
    //         // console.log(f.getProperties())
    //     });


    //     // console.log(source);
    //     // // console.log('rendercomplete', Date.now());
    //     // // console.log(map.renderer_);
    //     // var bounds = map.getView().calculateExtent(map.getSize());
    //     // var x = source.getFeaturesInExtent(bounds);//source.getFeaturesInExtent(extent);
        
    //     // console.log(x);
    // });

    map.once('postrender', function() {
        
        // console.log(map.frameState_);
        // var pixel = map.getPixelFromCoordinate(currentPosition);
        // console.log({pixel});

        // var y = map.getFeaturesAtPixel(pixel, {
        //     hitTolerance: 150
        // });
        // console.log(y);
        // var features = [];
        // var hitTolerance = 200;
        // var checkWrapped = false;
        // var layerFilter = function() { return true; };
        // var x = map.getCoordinateFromPixelInternal(pixel);
        // console.log(x);
        // map.renderer_.forEachFeatureAtCoordinate(x, map.frameState_, hitTolerance, checkWrapped,
        // function (feature) {
        //     console.log(feature);
        //     features.push(feature);
        //   }, null, layerFilter, null);
        // console.log(features);
        // var pixel = map.getPixelFromCoordinate(currentPosition);
        // console.log(pixel);
        // var feature = map.getFeaturesAtPixel(pixel, {
        //     hitTolerance: 50,
        // });
        // console.log(feature);
    });
    // map.on('pointermove', showInfo);
    if (usePerspectiveMap) {
        map.setPerspective(45);
    }

    applyStyle(layer, style);

    var size = map.getSize();
    var centerPosition = [anchor.x, anchor.y];
    // var centerPosition = usePerspectiveMap ? [395 * 2 + 6, 405 * 2 + 40] : [400, 410];
    view.centerOn(iconFeature.getGeometry().getCoordinates(), size, centerPosition);
    
    displayWazeData();

    // map.on('pointermove', function (e) {
    //     var street = getStreet(map, currentPosition);
    //     document.getElementById('currentNav').innerText = street.current;
    //     // var pos = map.getCoordinateFromPixel(e.pixel);
    //     console.log(getStreet(map, currentPosition));
    // //     var calculated = map.getPixelFromCoordinate(currentPosition);
    // //     console.log(e.pixel, calculated);
    // //     var streets = [];
    // //     // var features = map.getFeaturesAtPixel(calculated, {
    // //     //     hitTolerance: 100
    // //     // });
    // //     // console.log(features);
    // //     map.forEachFeatureAtPixel(calculated, function (f) {
    // //         if (f.type_ == 'LineString' && f.properties_.layer == 'transportation_name') {
    // //             streets.push(f);
    // //         }
    // //     }, {
    // //         hitTolerance: 100
    // //     });
    // //     console.log(streets);
    // });

    

    function displayWazeData() {
        console.log(wazeData);
        for (let i = 0; i < wazeData.jams.length; i++) {
            displayJam(wazeData.jams[i]);
        }
        for (let i = 0; i < wazeData.alerts.length; i++) {
            displayAlert(wazeData.alerts[i]);
        }
    }

    function displayAlert(alert) {
        var place = new Placemark ({
            contentColor: '#000'
          });
        map.addOverlay(place);
        place.show([alert.location.x, alert.location.y]);
    }

    function displayJam(jam) {
        var coords = [];
        for (let i = 0; i < jam.line.length; i++) {
            coords.push([jam.line[i].x, jam.line[i].y]);
        }
        var linie2style = [
            new Style({
                stroke: new Stroke({
                    color: 'red',
                    width: 2
                })
            })
        ];
                    
        var linie2 = new VectorLayer({
                source: new VectorSource({
                features: [new Feature({
                    geometry: new LineString(coords),
                    name: 'Line',
                })]
            })
        });
        
        linie2.setStyle(linie2style);
        map.addLayer(linie2);
    }
}

function getStreet(map, position) {
    var calculated = map.getPixelFromCoordinate(position);
    var streets = [];
    map.forEachFeatureAtPixel(calculated, function (f) {
        console.log(f);
        var layer = f.getProperties().layer;
        if (layer == 'transportation_name') {
            streets.push(f);
        }
    }, {
        hitTolerance: 20
    });
    var result = { current: '', intersections: [] };
    if (streets.length > 0) {
        result.current = streets[0].properties_.name;
    }
    if (streets.length > 1) {
        for (var i = 1; i < streets.length; i++) {
            result.intersections.push(streets[i].properties_.name);
        }
    }
    return result;
}


export default initMap;