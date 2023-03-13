import { View } from 'ol';
import { VectorTile as VectorTileSource } from 'ol/source';
import { VectorTile as VectorTileLayer } from 'ol/layer';
import { MVT } from 'ol/format';
import {useGeographic} from 'ol/proj.js';
import PerspectiveMap from 'ol-ext/map/PerspectiveMap'
import {applyStyle, stylefunction} from 'ol-mapbox-style';
import style from './style.js';

function initMap() {

    useGeographic();
    var source = new VectorTileSource({
        format: new MVT(),
        url: 'https://map.md/api/tiles/data/v3/{z}/{x}/{y}.pbf?v=2023-01-23T08:59:36Z'
    });
    source.on('tileloadstart', function() {
        console.log('tileloadstart', Date.now());
    });
    source.on('tileloadend', function() {
        console.log('tileloadend', Date.now());
    });

    var layer = new VectorTileLayer({
        renderMode: 'vector',
        source: source,
    });
    
    var map = new PerspectiveMap({
      allOverlays: false,
        layers: [ layer ],
        target: 'map',
        view: new View({
            center: [28.833677,47.023006],
            zoom: 14,
            rotation: Math.PI / 6
        })
    });
    map.on('precompose', function() { 
        console.log('precompose', Date.now()); 
    });
    map.on('rendercomplete', function() { 
        console.log('rendercomplete', Date.now());
    });
    map.setPerspective(45);
    
    applyStyle(layer, style);
    //stylefunction(layer, style, 'openlayers');
    // applyStyle(layer, style, 'openlayers');
}

export default initMap;