function zoomFromResolution(resolution) {
    return Math.log2(156543.03392804097) - Math.log2(resolution);
}
function lightTheme(feature, resolution)
{
    var zoom = zoomFromResolution(resolution);
    var layer = feature.get('layer');
    var cls = feature.get('class');
    var geom = feature.getGeometry().getType();
    var _f0 = feature.get('subclass');
    var _f1 = feature.get('brunnel');
    var _f2 = feature.get('name');
    var _f3 = feature.get('tag');
    var _f4 = feature.get('highway');
    var _f5 = feature.get('oneway');
    var _f6 = feature.get('buildingpart');
    var _f7 = feature.get('osm_id');
    var _f8 = feature.get('ref_length');
    var _f9 = feature.get('network');
    var _f10 = feature.get('admin_level');
    var _f11 = feature.get('maritime');
    var _f12 = feature.get('disputed');
    var _f13 = feature.get('color');
    var _f14 = feature.get('level');
    var _f15 = feature.get('capital');
    var _f16 = feature.get('iata');

    if (layer == "") {
        if ((true) && (zoom >= 0 && zoom <= 21)) {
            if(zoom <= 7) return new ol.style.Style({});
            if(zoom <= 12) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "landcover") {
        if (_f0=="glacier") {
            if(zoom <= 0) return new ol.style.Style({fill: new ol.style.Fill({color: [255,255,255,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [255,255,255,1]})});
        }
        if ((cls=="wood") && (zoom >= 7 && zoom <= 19)) {
            if(zoom <= 7) return new ol.style.Style({fill: new ol.style.Fill({color: [190,210,195,1]})});
            if(zoom <= 8) return new ol.style.Style({fill: new ol.style.Fill({color: [190,210,195,1]})});
            if(zoom <= 9) return new ol.style.Style({fill: new ol.style.Fill({color: [224,243,215,1]})});
            if(zoom <= 10) return new ol.style.Style({fill: new ol.style.Fill({color: [224,243,215,1]})});
            if(zoom <= 11) return new ol.style.Style({fill: new ol.style.Fill({color: [220,244,208,1]})});
            if(zoom <= 12) return new ol.style.Style({fill: new ol.style.Fill({color: [221,240,211,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [202,230,188,1]})});
        }
        if (cls=="grass") {
            if(zoom <= 7) return new ol.style.Style({fill: new ol.style.Fill({color: [230,233,213,1]})});
            if(zoom <= 8) return new ol.style.Style({fill: new ol.style.Fill({color: [229,232,213,1]})});
            if(zoom <= 9) return new ol.style.Style({fill: new ol.style.Fill({color: [229,243,223,1]})});
            if(zoom <= 10) return new ol.style.Style({fill: new ol.style.Fill({color: [222,240,213,1]})});
            if(zoom <= 11) return new ol.style.Style({fill: new ol.style.Fill({color: [207,234,193,1]})});
            if(zoom <= 12) return new ol.style.Style({fill: new ol.style.Fill({color: [211,244,194,1]})});
            if(zoom <= 13) return new ol.style.Style({fill: new ol.style.Fill({color: [195,230,177,1]})});
            if(zoom <= 14) return new ol.style.Style({fill: new ol.style.Fill({color: [191,232,170,1]})});
            if(zoom <= 15) return new ol.style.Style({fill: new ol.style.Fill({color: [195,230,177,1]})});
            if(zoom <= 16) return new ol.style.Style({fill: new ol.style.Fill({color: [195,230,177,1]})});
            if(zoom <= 17) return new ol.style.Style({fill: new ol.style.Fill({color: [195,230,177,1]})});
            if(zoom <= 18) return new ol.style.Style({fill: new ol.style.Fill({color: [195,230,177,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [190,210,195,1]})});
        }
    }
    if (layer == "landuse") {
        if ((cls=="residential") && (zoom >= 12 && zoom <= 24)) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [160,95,37,0]})});
        }
        if (((geom=="Polygon")&&(cls=="commercial")) && (zoom >= 15)) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [241,201,201,0.23000000417232513]})});
        }
        if (((geom=="Polygon")&&(cls=="university")) && (zoom >= 15)) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [248,241,229,1]})});
        }
        if ((geom=="Polygon")&&(cls=="zoo")) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [114,245,114,0.15]})});
        }
        if (((geom=="Polygon")&&(cls=="retail")) && (zoom >= 15)) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [250,246,227,1]})});
        }
        if (((geom=="Polygon")&&(cls=="industrial")) && (zoom >= 14)) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [244,241,227,1]})});
        }
        if ((cls=="cemetery") && (zoom >= 14)) {
            if(zoom <= 6) return new ol.style.Style({fill: new ol.style.Fill({color: [228,232,218,1]})});
            if(zoom <= 8) return new ol.style.Style({fill: new ol.style.Fill({color: [228,232,218,1]})});
            if(zoom <= 9) return new ol.style.Style({fill: new ol.style.Fill({color: [228,232,218,1]})});
            if(zoom <= 10) return new ol.style.Style({fill: new ol.style.Fill({color: [237,238,232,1]})});
            if(zoom <= 11) return new ol.style.Style({fill: new ol.style.Fill({color: [228,232,218,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [228,232,218,1]})});
        }
        if ((cls=="hospital") && (zoom >= 15)) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [251,238,233,1]})});
        }
        if ((cls=="school") && (zoom >= 15)) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [248,241,229,1]})});
        }
        if ((geom=="Polygon")&&(cls=="stadium")) {
            return new ol.style.Style({fill: new ol.style.Fill({color: [239,240,230,1]})});
        }
        if (cls=="railway") {
            return new ol.style.Style({fill: new ol.style.Fill({color: [234,229,224,0.4000000059604645]})});
        }
    }
    if (layer == "park") {
        if (geom=="Polygon") {
            if(zoom <= 9) return new ol.style.Style({fill: new ol.style.Fill({color: [230,233,213,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [230,233,213,1]})});
        }
    }
    if (layer == "waterway") {
        if (((["canal","stream"].includes(cls))&&(_f1!="tunnel")) && (zoom >= 16)) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [181,216,255,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [181,216,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [181,216,255,1],width: 1})});
        }
        if ((cls=="river")&&(_f1!="tunnel")) {
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [181,216,255,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [181,216,255,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [181,216,255,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [181,216,255,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            if(zoom <= 19) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,227,224,1],width: 1})});
        }
        if ((geom=="LineString") && (zoom >= 13)) {
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "water") {
        if ((geom=="Polygon") && (zoom <= 8)) {
            if(zoom <= 6) return new ol.style.Style({fill: new ol.style.Fill({color: [224,227,224,1]})});
            if(zoom <= 8) return new ol.style.Style({fill: new ol.style.Fill({color: [224,227,224,1]})});
            if(zoom <= 10) return new ol.style.Style({fill: new ol.style.Fill({color: [191,216,228,1]})});
            if(zoom <= 11) return new ol.style.Style({fill: new ol.style.Fill({color: [191,216,228,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [191,216,228,1]})});
        }
        if (true) {
            if(zoom <= 7) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 8) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 9) return new ol.style.Style({fill: new ol.style.Fill({color: [187,216,249,1]})});
            if(zoom <= 10) return new ol.style.Style({fill: new ol.style.Fill({color: [206,229,255,1]})});
            if(zoom <= 11) return new ol.style.Style({fill: new ol.style.Fill({color: [202,225,251,1]})});
            if(zoom <= 12) return new ol.style.Style({fill: new ol.style.Fill({color: [191,216,228,1]})});
            if(zoom <= 13) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 14) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 15) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 16) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 17) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 18) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            if(zoom <= 19) return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [181,216,255,1]})});
        }
    }
    if (layer == "transportation") {
        if ((_f1=="tunnel")&&(["service","track"].includes(cls))) {
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(cls=="minor")) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,205,202,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(["secondary","tertiary"].includes(cls))) {
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(["primary","trunk"].includes(cls))) {
            if(zoom <= 5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 6) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(cls=="motorway")) {
            if(zoom <= 5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 6) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if ((geom=="LineString")&&((_f1=="tunnel")&&(cls=="path"))) {
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [212,205,190,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [212,205,190,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(["service","track"].includes(cls))) {
            if(zoom <= 15,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(cls=="minor_road")) {
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(["secondary","tertiary"].includes(cls))) {
            if(zoom <= 6,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,244,198,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,244,198,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,244,198,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(["primary","trunk"].includes(cls))) {
            if(zoom <= 6,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,244,198,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,244,198,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,244,198,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(cls=="motorway")) {
            if(zoom <= 6,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,218,166,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,218,166,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,218,166,1],width: 1})});
        }
        if ((_f1=="tunnel")&&(cls=="rail")) {
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [187,187,187,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [187,187,187,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [187,187,187,1],width: 1})});
        }
        if (["ferry"].includes(cls)) {
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [108,159,182,1],width: 1})});
        }
        if (((_f1!="tunnel")&&(["minor","service","track","path"].includes(cls))) && (zoom >= 13 && zoom <= 21)) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,227,219,1]})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [240,236,228,1],width: 1})});
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,223,211,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [207,201,186,1],width: 1})});
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,226,215,1],width: 1})});
            if(zoom <= 13,7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,227,219,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [245,240,227,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,226,215,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,226,215,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,226,215,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,227,219,1],width: 1})});
            if(zoom <= 19) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,227,219,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,227,219,1],width: 1})});
        }
        if (geom=="Polygon") {
            return new ol.style.Style({fill: new ol.style.Fill({color: [148,43,43,0]})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(cls=="motorway_link")) && (zoom >= 12)) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["primary_link","secondary_link","tertiary_link","trunk_link"].includes(cls))) && (zoom >= 13)) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["tertiary"].includes(cls))&&(_f2!="secondary")) && (zoom >= 10)) {
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1]})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1]})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [243,234,211,1]})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [230,224,209,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["secondary"].includes(cls))&&(_f2!="tertiary")) && (zoom >= 10)) {
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,166,149,1],width: 1})});
            if(zoom <= 9,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,166,149,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [230,230,218,1],width: 1})});
            if(zoom <= 10,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [230,230,218,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,220,211,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [230,224,209,1],width: 1})});
            if(zoom <= 12,6) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,166,149,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [234,232,221,1],width: 1})});
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,221,210,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,228,216,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [219,211,185,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,217,208,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [219,211,185,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [219,211,185,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["primary"].includes(cls))) && (zoom >= 8)) {
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1]})});
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,182,63,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [251,201,2,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,188,36,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,89,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(cls=="motorway")) && (zoom >= 4)) {
            if(zoom <= 4) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,247,247,1],width: 1})});
            if(zoom <= 5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,247,247,1],width: 1})});
            if(zoom <= 6) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,247,247,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,247,247,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,247,247,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(cls=="motorway_link")) && (zoom >= 12)) {
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["primary_link","secondary_link","tertiary_link","trunk_link"].includes(cls))) && (zoom >= 13)) {
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [94,86,65,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [94,86,65,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [94,86,65,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [94,86,65,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["trunk"].includes(cls))) && (zoom >= 6)) {
            if(zoom <= 6) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,182,63,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [251,201,2,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,188,36,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,89,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,153,79,1],width: 1})});
        }
        if (((geom=="LineString")&&((!["bridge","tunnel"].includes(_f1))&&(cls=="motorway"))) && (zoom >= 5)) {
            if(zoom <= 6,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [253,240,198,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [253,240,198,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [253,240,198,1],width: 1})});
        }
        if (((_f1!="tunnel")&&(["minor","service","track"].includes(cls))) && (zoom >= 13 && zoom <= 21)) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [217,215,208,1],width: 1})});
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [232,227,214,1],width: 1})});
            if(zoom <= 12,7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [217,215,208,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [234,230,215,1],width: 1})});
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 13,7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [217,215,208,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 19) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["secondary"].includes(cls))&&(_f2!="tertiary")) && (zoom >= 10 && zoom <= 24)) {
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 19) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if (((geom=="LineString")&&((!["bridge","tunnel"].includes(_f1))&&(["primary"].includes(cls)))) && (zoom >= 8)) {
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,240,157,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [251,251,223,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [252,252,221,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
        }
        if ((_f2=="living_street")||(cls=="living_street")||(_f3=="living_street")||(_f4=="living_street")||(cls=="highway")) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [226,78,78,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [219,37,37,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,56,56,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if (((!["bridge","tunnel"].includes(_f1))&&(["tertiary"].includes(cls))&&(_f2!="secondary")) && (zoom >= 11 && zoom <= 24)) {
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1]})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1]})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1]})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if (((geom=="LineString")&&((!["bridge","tunnel"].includes(_f1))&&(["trunk"].includes(cls)))) && (zoom >= 8)) {
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1]})});
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,240,157,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,240,157,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [251,251,223,1],width: 1})});
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [252,252,221,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,241,166,1],width: 1})});
        }
        if ((cls=="rail") && (zoom >= 12 && zoom <= 24)) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,222,214,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [230,227,222,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [197,194,186,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,222,214,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,222,214,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,222,214,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,222,214,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,222,214,1],width: 1})});
        }
        if ((cls=="rail") && (zoom >= 14)) {
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
        }
        if ((_f1=="bridge")&&(cls=="motorway_link")) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if ((_f1=="bridge")&&(["primary_link","secondary_link","tertiary_link","trunk_link"].includes(cls))) {
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if ((_f1=="bridge")&&(["secondary","tertiary"].includes(cls))) {
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [186,189,179,1],width: 1})});
        }
        if ((_f1=="bridge")&&(["trunk"].includes(cls))&&(_f2!="primary")) {
            if(zoom <= 1) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1]})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [215,115,40,1]})});
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [215,115,40,1]})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [215,115,40,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [215,115,40,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,89,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [247,211,67,1],width: 1})});
        }
        if ((_f1=="bridge")&&(["primary"].includes(cls))&&(_f2!="trunk")) {
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,182,63,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [251,201,2,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,188,36,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,89,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [228,173,89,1],width: 1})});
        }
        if ((_f1=="bridge")&&(cls=="motorway")) {
            if(zoom <= 5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 6) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [233,172,119,1],width: 1})});
        }
        if ((_f1=="bridge")&&(cls=="motorway_link")) {
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
        }
        if ((_f1=="bridge")&&(["primary_link","secondary_link","tertiary_link","trunk_link"].includes(cls))) {
            if(zoom <= 12,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,238,170,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,238,170,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,238,170,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,238,170,1],width: 1})});
        }
        if ((_f1=="bridge")&&(["secondary","tertiary"].includes(cls))) {
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1]})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1]})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
        }
        if (((_f1=="bridge")&&(["trunk"].includes(cls))&&(_f2!="primary")) && (zoom >= 8)) {
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,242,175,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [251,251,223,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [227,150,105,1],width: 1})});
        }
        if ((_f1=="bridge")&&(["primary"].includes(cls))&&(_f2!="trunk")) {
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,240,157,1],width: 1})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [251,251,223,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [252,252,221,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,245,184,1],width: 1})});
        }
        if ((_f1=="bridge")&&(cls=="motorway")) {
            if(zoom <= 6,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            if(zoom <= 7) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,204,136,1],width: 1})});
        }
        if ((_f1=="bridge")&&(cls=="rail")) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [213,207,198,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [220,216,210,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [197,194,186,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [213,207,198,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [213,207,198,1],width: 1})});
        }
        if (((_f1=="bridge")&&(cls=="rail")) && (zoom >= 14)) {
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [203,198,196,1],width: 1})});
        }
        if (((_f5==1)&&(["motorway","trunk","primary","secondary","tertiary","minor","service"].includes(cls))) && (zoom >= 15)) {
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((_f5==-1)&&(["motorway","trunk","primary","secondary","tertiary","minor","service"].includes(cls))) && (zoom >= 15)) {
            if(zoom <= 15) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "aeroway") {
        if ((["taxiway"].includes(cls)) && (zoom >= 12)) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [199,182,158,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [199,182,158,1],width: 1})});
        }
        if ((["runway"].includes(cls)) && (zoom >= 12)) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [199,182,158,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [199,182,158,1],width: 1})});
        }
        if (((geom=="Polygon")&&(["runway","taxiway"].includes(cls))) && (zoom >= 14)) {
            if(zoom <= 13) return new ol.style.Style({fill: new ol.style.Fill({color: [255,255,255,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [255,255,255,1]})});
        }
        if (((["taxiway"].includes(cls))&&(geom=="LineString")) && (zoom >= 11)) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if (((["runway"].includes(cls))&&(geom=="LineString")) && (zoom >= 11 && zoom <= 24)) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
    }
    if (layer == "building") {
        if ((_f6=="") && (zoom >= 14)) {
            if(zoom <= 12) return new ol.style.Style({fill: new ol.style.Fill({color: [230,225,213,1]})});
            if(zoom <= 13) return new ol.style.Style({fill: new ol.style.Fill({color: [230,225,213,1]})});
            if(zoom <= 14) return new ol.style.Style({fill: new ol.style.Fill({color: [230,225,213,1]})});
            if(zoom <= 15) return new ol.style.Style({fill: new ol.style.Fill({color: [230,225,213,1]})});
            if(zoom <= 16) return new ol.style.Style({fill: new ol.style.Fill({color: [230,225,213,1]})});
            if(zoom <= 17) return new ol.style.Style({fill: new ol.style.Fill({color: [239,233,223,1]})});
            if(zoom <= 18) return new ol.style.Style({fill: new ol.style.Fill({color: [230,225,213,1]})});
            return new ol.style.Style({fill: new ol.style.Fill({color: [230,225,213,1]})});
        }
        if ((["5"].includes(_f6)) && (zoom >= 17 && zoom <= 24)) {
            return new ol.style.Style({});
        }
        if ((["4"].includes(_f6)) && (zoom >= 17 && zoom <= 24)) {
            return new ol.style.Style({});
        }
        if ((["3"].includes(_f6)) && (zoom >= 17 && zoom <= 24)) {
            return new ol.style.Style({});
        }
        if ((["2"].includes(_f6)) && (zoom >= 17)) {
            return new ol.style.Style({});
        }
        if ((["1"].includes(_f6)) && (zoom >= 17)) {
            return new ol.style.Style({});
        }
        if ((["P"].includes(_f6)) && (zoom >= 17)) {
            return new ol.style.Style({});
        }
        if ((["-2"].includes(_f6)) && (zoom >= 17)) {
            return new ol.style.Style({});
        }
        if ((["-1"].includes(_f6)) && (zoom >= 17 && zoom <= 24)) {
            return new ol.style.Style({});
        }
        if (((_f7!=32888675)&&(_f6=="")) && (zoom >= 18)) {
            return new ol.style.Style({});
        }
    }
    if (layer == "transportation_name") {
        if (((_f1!="tunnel")&&(["minor","service","track"].includes(cls))) && (zoom >= 12 && zoom <= 20)) {
            if(zoom <= 10) return new ol.style.Style({stroke: new ol.style.Stroke({color: [239,237,230,1]})});
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [239,237,230,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [239,237,230,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [226,220,204,1],width: 1})});
            if(zoom <= 13,5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [226,220,204,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [226,223,213,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,218,202,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [224,217,208,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [239,237,230,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [239,237,230,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [239,237,230,1],width: 1})});
        }
        if (((_f1!="tunnel")&&(["minor","service","track"].includes(cls))) && (zoom >= 11 && zoom <= 20)) {
            if(zoom <= 11) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 12) return new ol.style.Style({stroke: new ol.style.Stroke({color: [171,153,140,1],width: 1})});
            if(zoom <= 13) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 14) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 15) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 16) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 17) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            if(zoom <= 18) return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [255,255,255,1],width: 1})});
        }
        if ((false) && (zoom >= 16)) {
            if(zoom <= 13) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if ((["primary"].includes(cls)) && (zoom >= 12)) {
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((cls=="secondary")&&(_f8<=4)) && (zoom >= 8 && zoom <= 24)) {
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 11) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((["primary"].includes(cls))&&(_f8==2)) && (zoom >= 9)) {
            if(zoom <= 6) return new ol.style.Style({});
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((["primary"].includes(cls))&&(_f8==3)) && (zoom >= 9)) {
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((["trunk"].includes(cls))&&(_f8==3)) && (zoom >= 8)) {
            if(zoom <= 8) return new ol.style.Style({});
            if(zoom <= 9) return new ol.style.Style({});
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 11) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((["trunk"].includes(cls))&&(_f8<=2)) && (zoom >= 8)) {
            if(zoom <= 8) return new ol.style.Style({});
            if(zoom <= 10) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((_f8<=6)&&(geom=="LineString")&&(["us-interstate"].includes(_f9))) && (zoom >= 7)) {
            if(zoom <= 7) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((geom=="LineString")&&(["minor","service","track"].includes(cls))) && (zoom >= 13 && zoom <= 20)) {
            if(zoom <= 6) return new ol.style.Style({});
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if ((["secondary"," tertiary"].includes(cls)) && (zoom >= 12)) {
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((_f8<=6)&&(geom=="LineString")&&(["us-highway","us-state"].includes(_f9))) && (zoom >= 9)) {
            if(zoom <= 10) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if ((["trunk"].includes(cls)) && (zoom >= 12)) {
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "boundary") {
        if ((_f10>=4)&&(_f10<=8)&&(_f11!=1)) {
            if(zoom <= 4) return new ol.style.Style({stroke: new ol.style.Stroke({color: [158,156,171,0],width: 1})});
            if(zoom <= 5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [158,156,171,0],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [158,156,171,0],width: 1})});
        }
        if ((_f10==2)&&(_f11!=1)&&(_f12!=1)) {
            if(zoom <= 8) return new ol.style.Style({stroke: new ol.style.Stroke({color: [184,181,178,1],width: 1})});
            if(zoom <= 9) return new ol.style.Style({stroke: new ol.style.Stroke({color: [170,168,161,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [148,145,138,1],width: 1})});
        }
        if ((_f11!=1)&&(_f12==1)) {
            if(zoom <= 0) return new ol.style.Style({stroke: new ol.style.Stroke({color: [174,173,183,1],width: 1})});
            if(zoom <= 4) return new ol.style.Style({stroke: new ol.style.Stroke({color: [174,173,183,1],width: 1})});
            if(zoom <= 5) return new ol.style.Style({stroke: new ol.style.Stroke({color: [174,173,183,1],width: 1})});
            return new ol.style.Style({stroke: new ol.style.Stroke({color: [174,173,183,1],width: 1})});
        }
    }
    if (layer == "water_name") {
        if (geom=="LineString") {
            return new ol.style.Style({});
        }
        if ((geom=="Point")&&(cls=="ocean")) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(!["ocean"].includes(cls))) && (zoom >= 11)) {
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "poi") {
        if (((geom=="Point")&&(_f2===undefined)&&(cls=="town_hall")) && (zoom >= 17)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls===undefined)&&(_f13!="rgba(0,0,0,1)")&&(cls!="entrance")&&(cls=="travel_agency")&&(_f14!==undefined)) && (zoom >= 15)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(["electronics","toys","marketplace","jewelry","supermarket","mall","cinema","hotel","post_office","zoo","pet","fuel","school"].includes(_f0))&&(_f13!="rgba(0,0,0,1)")&&(_f0!="travel_agency")&&(_f14!==undefined)) && (zoom >= 18)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls===undefined)&&(_f14=="P")) && (zoom >= 19)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls===undefined)&&(_f14===undefined)) && (zoom >= 19)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(["electronics","travel_agency","toys","marketplace","jewelry","supermarket","mall","cinema","hotel","post_office","zoo","pet","fuel","school"].includes(_f0))&&(_f13!="rgba(0,0,0,1)")&&(_f14=="P")) && (zoom >= 17)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(["clothes","electronics","travel_agency","toys","marketplace","jewelry","supermarket","mall","cinema","hotel","post_office","zoo","pet","fuel","school"].includes(_f0))&&(_f14===undefined)) && (zoom >= 19)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls=="cemetery")) && (zoom >= 15)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls=="crossing")) && (zoom >= 16)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(_f2===undefined)&&(cls=="railway")&&(_f0=="station")) && (zoom >= 14)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls=="entrance")) && (zoom >= 18)) {
            if(zoom <= 18) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(_f0=="university")) && (zoom >= 15)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls=="hospital")) && (zoom >= 14)) {
            if(zoom <= 14) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(cls=="traffic_signals")) && (zoom >= 16)) {
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(_f0=="bus_stop")) && (zoom >= 14 && zoom <= 21)) {
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((geom=="Point")&&(_f2===undefined)&&(cls=="park")) && (zoom >= 14)) {
            if(zoom <= 13) return new ol.style.Style({});
            if(zoom <= 14) return new ol.style.Style({});
            if(zoom <= 14,5) return new ol.style.Style({});
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "place") {
        if ((cls=="small_town") && (zoom >= 9)) {
            if(zoom <= 10) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if ((cls=="village") && (zoom >= 10 && zoom <= 14)) {
            if(zoom <= 9) return new ol.style.Style({});
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 11) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if ((cls=="town") && (zoom >= 7 && zoom <= 14)) {
            if(zoom <= 6) return new ol.style.Style({});
            if(zoom <= 7) return new ol.style.Style({});
            if(zoom <= 8) return new ol.style.Style({});
            if(zoom <= 9) return new ol.style.Style({});
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 11) return new ol.style.Style({});
            if(zoom <= 12) return new ol.style.Style({});
            if(zoom <= 13) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if ((!["city","town","village","country","continent"].includes(cls)) && (zoom >= 11 && zoom <= 15)) {
            if(zoom <= 11) return new ol.style.Style({});
            if(zoom <= 12) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((_f15!=2)&&(cls=="city")) && (zoom >= 4 && zoom <= 13)) {
            if(zoom <= 7) return new ol.style.Style({});
            if(zoom <= 8) return new ol.style.Style({});
            if(zoom <= 9) return new ol.style.Style({});
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 11) return new ol.style.Style({});
            if(zoom <= 12) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if (((_f15==2)&&(cls=="city")) && (zoom >= 4 && zoom <= 13)) {
            if(zoom <= 6) return new ol.style.Style({});
            if(zoom <= 7) return new ol.style.Style({});
            if(zoom <= 8) return new ol.style.Style({});
            if(zoom <= 9) return new ol.style.Style({});
            if(zoom <= 10) return new ol.style.Style({});
            if(zoom <= 11) return new ol.style.Style({});
            if(zoom <= 12) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "housenumber") {
        if (((geom=="Point")&&(_f2=="")) && (zoom >= 17)) {
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            if(zoom <= 19) return new ol.style.Style({});
            return new ol.style.Style({});
        }
        if ((geom=="Point") && (zoom >= 16 && zoom <= 24)) {
            if(zoom <= 15) return new ol.style.Style({});
            if(zoom <= 16) return new ol.style.Style({});
            if(zoom <= 16,5) return new ol.style.Style({});
            if(zoom <= 17) return new ol.style.Style({});
            if(zoom <= 18) return new ol.style.Style({});
            if(zoom <= 19) return new ol.style.Style({});
            if(zoom <= 20) return new ol.style.Style({});
            return new ol.style.Style({});
        }
    }
    if (layer == "aerodrome_label") {
        if ((_f16===undefined) && (zoom >= 9)) {
            return new ol.style.Style({});
        }
    }
}