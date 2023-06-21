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

function initMap() {
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
        renderMode: 'hybrid',
        source: source,
        renderBuffer: 150,
        declutter: true
    });
    var currentPosition = [28.832178,46.995910];
    var view = new View({
        center: [28.833677,47.023006],
        zoom: 17, 
        rotation: 0
    });
    var mapOptions = {
        allOverlays: false,
        layers: [ layer ],
        target: 'map',
        view: view,
        // controls: defaultControls({
        //     rotateOptions: { label: span }
        // })
    };
    var map = new Map(mapOptions);
    map.on('precompose', function() { 
        // console.log(view.getCenter());
        // console.log(map.getSize());
        // console.log('precompose', Date.now()); 
    });
}

export default initMap;

// initMap();