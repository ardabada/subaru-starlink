var App = App || {};
(function(App) {
    App.isInitialized = false;
    App.handleAllScriptsLoaded = function() {
        UI.GlobalLoading.setProgress(null);
        UI.GlobalLoading.hide();
        // Navigation.GPS.getCurrentPosition(function(position) {
            Navigation.Map.init({
                latitude: 47.023006,
                longitude: 28.833677,
                zoom: 14,
                container: 'map',
                onTileLoadStart: App.Events.Map.OnMapTileLoadStart,
                onTileLoadEnd: App.Events.Map.OnMapTileLoadEnd,
                onTileLoadError: App.Events.Map.OnMapTileLoadError
            });
        // }, function(error) {
        //     UI.GlobalError.show('error', 'test');
        // })
    }
})(App);

App.Map = App.Map || {};
(function(Map) {
    
})(App.Map);

App.Events = App.Events || {};
(function(Events) {
})(App.Events);

App.Events.Map = App.Events.Map || {};
(function(MapEvents) {
    MapEvents._tilesLoading = 0;
    MapEvents._tilesLoaded = 0;
    MapEvents.OnMapTileLoadStart = function() {
        document.getElementById('loadstart').append(' ' + Date.now().toString());
        // output('Map tile load start ' + Date.now());
        MapEvents._tilesLoading++;
    }
    MapEvents.OnMapTileLoadEnd = function() {
        document.getElementById('loadend').append(' ' + Date.now().toString());
        MapEvents._tilesLoaded++;
        if (!App.isInitialized) {
            if (MapEvents._tilesLoaded == MapEvents._tilesLoading) {
                App.isInitialized = true;
                //UI.GlobalLoading.hide();
            }
        }
    }
    MapEvents.OnMapTileLoadError = function() {
        MapEvents._tilesLoaded++;
        if (!App.isInitialized) {
            UI.GlobalError.show(Lang.getCurrent().errors.mapLoad);
        }
    }
})(App.Events.Map);