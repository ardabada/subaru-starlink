import { Feature, Map, View } from 'ol';
import { VectorTile as VectorTileSource } from 'ol/source';
import { VectorTile as VectorTileLayer } from 'ol/layer';
import { MVT } from 'ol/format';
import {useGeographic} from 'ol/proj.js';
import PerspectiveMap from 'ol-ext/map/PerspectiveMap'
import {applyStyle, stylefunction} from 'ol-mapbox-style';
import style from './style.js';
import Style from 'ol/style/Style.js';
import Icon from 'ol/style/Icon.js';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';

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
    
    var iconStyle = new Style({
        image: new Icon({
            src: 'image.png',
            rotation: Math.PI / 3,
            rotateWithView: true,
            width: 48,
            height: 48
        })
    });
    var iconFeature = new Feature({
        geometry: new Point([28.832178,46.995910])
    });
    iconFeature.setStyle(iconStyle);
    
    var vectorSource = new VectorSource({
        features: [iconFeature]
    });
    var vectorLayer = new VectorLayer({
        source: vectorSource
    });

    var view = new View({
        center: [28.833677,47.023006],
        zoom: 18, 
        rotation: -Math.PI / 3
    });
    var map = new PerspectiveMap({
      allOverlays: false,
        layers: [ layer, vectorLayer ],
        target: 'map',
        view: view
    });
    map.on('precompose', function() { 
        console.log(view.getCenter());
        console.log(map.getSize());
        console.log('precompose', Date.now()); 
    });
    map.on('rendercomplete', function() { 
        console.log('rendercomplete', Date.now());
    });
    map.setPerspective(45);
    
    applyStyle(layer, style);

    var size = map.getSize();
    view.centerOn(iconFeature.getGeometry().getCoordinates(), size, [395 * 2 + 6, 405 * 2 + 40]);

    //stylefunction(layer, style, 'openlayers');
    // applyStyle(layer, style, 'openlayers');
}

export default initMap;