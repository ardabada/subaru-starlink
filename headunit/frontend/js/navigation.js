var Navigation = Navigation || {};
(function(navi) {
    
})(Navigation);

Navigation.GPS = Navigation.GPS || {};
(function(GPS) {
    GPS.getCurrentPosition = function(successCallback, errorCallback) {
        SmartAccess.Geolocation.getCurrentPosition(successCallback, errorCallback);
    }
})(Navigation.GPS);

Navigation.Map = Navigation.Map || {};
(function(Map) {
    Map._map = null;
    Map.init = function(options) {
        if (Map._map != null) return;

        ol.proj.useGeographic();

        var source = new ol.source.VectorTile({
            format: new ol.format.MVT({
                // layers: ['water', 'transportation', 'building']
            }),
            // strategy: ol.loadingstrategy.extent,
            // url: 'https://map.md/api/tiles/data/v3/{z}/{x}/{y}.pbf?v=2023-01-23T08:59:36Z'
            url: 'http://89.28.22.222:8888/map.md/api/tiles/data/v3/{z}/{x}/{y}.pbf?v=2023-01-23T08:59:36Z'
        });

        source.on('tileloadstart', function() {
            if (options.onTileLoadStart) {
                options.onTileLoadStart();
            }
        });
        source.on('tileloadend', function() {
          console.log('tileloadend ' + Date.now());
            if (options.onTileLoadEnd) {
                options.onTileLoadEnd();
            }
        });
        source.on('tileloaderror', function() {
            if (options.onTileLoadError) {
                options.onTileLoadError();
            }
        });

        var layer = new ol.layer.VectorTile({
          renderMode: 'hybrid',
          source: source,
          renderBuffer: 150,
          declutter: true,
          style: function(feature, resolution) { return null; }
          //style: lightTheme
          // style: function (feature, resolution) {
          //     var layer = feature.get('layer');
          //     if (layer == 'water' || layer == 'waterway') return waterStyle;
          //     // else if (layer == 'transportation') return roadStyle(feature);
          //     // else if (layer == 'building') return buildingStyle;
          //     // else console.log('skipping layer ' + layer);
          //     // switch (feature.get('layer')) {
          //     //   case 'water':
          //     //     return waterStyle;
          //     //   case 'roads':
          //     //     return roadStyle(feature);
          //     //   case 'buildings':
          //     //     return resolution < 10 ? buildingStyle : null;
          //     //   default:
          //     //     return null;
          //     // }
          //   },
      });
      layer.on('prerender', function(e) {
        //console.log(e);
        //[28.832524631424736, 47.0225257511658, 28.83493796501845, 47.02351285935123]
        document.getElementById('prerender').append(' ' + Date.now().toString());
      });
      layer.on('postrender', function() {
        // console.warn('postrender');
      });
	  
	  //olms.applyStyle(layer, 'mapbox://styles/mapbox/bright-v9', {accessToken: 'pk.eyJ1IjoiYXJkYWJhZGEiLCJhIjoiY2prbWxqdzh0MGNkNjN2b3p1dmlqYWQ4OSJ9.CZWcYYEp2YSB9z9u8TGO4g'});
	//   olms.applyStyle(layer, 'http://localhost:3000/js/themes/theme_point_cleaned.json');

        Map._map = new ol.Map({
          allOverlays: false,
            layers: [ layer ],
            target: options.container,
            view: new ol.View({
                center: [options.longitude,options.latitude],
                zoom: options.zoom,
            })
        });

        olms.applyStyle(layer, styleToApply);


        // Map._map.on('prerender', function() {  });
        Map._map.on('rendercomplete', function() { document.getElementById('rendercomplete').append(' ' + Date.now().toString()); });
		
		//olms.apply('map', 'https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=pk.eyJ1IjoiYXJkYWJhZGEiLCJhIjoiY2prbWxqdzh0MGNkNjN2b3p1dmlqYWQ4OSJ9.CZWcYYEp2YSB9z9u8TGO4g');
        // layer.setExtent(Navigation.Map._map.getView().calculateExtent(Navigation.Map._map.getSize()));
    }
    Map.filterFeatureOnPreRender = function(t, e, i, n, r) {
      //return true;
      if (!i.fill_ && !i.image_ && !i.text_ && !i.stroke_) {
        return false;
      }
      var bounds = Navigation.Map._map.getView().calculateExtentInternal(Navigation.Map._map.getSize());
      for (var _i = 0; _i < t.flatCoordinates_.length / 2; ) {
        var _x = t.flatCoordinates_[_i++];
        var _y = t.flatCoordinates_[_i++];
        if (_x >= bounds[0] && _x <= bounds[2] && _y >= bounds[1] && _y <= bounds[3]) {
          return true;
        }
      }
      return false;
    }
})(Navigation.Map);