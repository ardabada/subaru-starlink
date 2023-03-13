import { Map, View } from 'ol';
import { VectorTile as VectorTileSource } from 'ol/source';
import { VectorTile as VectorTileLayer } from 'ol/layer';
import { MVT } from 'ol/format';
import {useGeographic} from 'ol/proj.js';
import PerspectiveMap from 'ol-ext/map/PerspectiveMap'

function initMap() {

    useGeographic();
    var source = new VectorTileSource({
        format: new MVT(),
        url: 'https://map.md/api/tiles/data/v3/{z}/{x}/{y}.pbf?v=2023-01-23T08:59:36Z'
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
            zoom: 14
        })
    });
    map.setPerspective(15);
}

export default initMap;