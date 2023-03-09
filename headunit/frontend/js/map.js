var PerspectiveMap = function(options) {
    // var divMap = options.target instanceof Element ? options.target : document.getElementById(options.target);
    // if (window.getComputedStyle(divMap).position !== 'absolute') {
    //   divMap.style.position = 'relative';
    // }
    // divMap.style.overflow = 'hidden';

    // // Create map inside
    // var map = ol_ext_element.create('DIV', {
    //   className: 'ol-perspective-map',
    //   parent: divMap
    // });
    // var opts = {};
    // Object.assign(opts, options);
    // opts.target = map;
    // // enhance pixel ratio
    // //opts.pixelRatio = 2;
    // // super(opts);
    this.options = options;

    this.xxx = "heelo";
    // this._tiltCondition = options.tiltCondition || ol_events_condition_altKeyOnly;
}

PerspectiveMap.prototype = new ol.Map();