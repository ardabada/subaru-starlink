var Loader = Loader || {};
(function(L) {
    function doLoadScript(scripts, i, ondone, onerror) {
        loadScript(scripts[i], function() { ondone(i) }, function() { onerror(i) });
    }
    
    function loadScript(url, onloaded, onerror) {
        var head = document.getElementsByTagName("head")[0];
        var done = false;
        var script = document.createElement("script");
        script.src = url;
        script.onerror = function(e) {
            onerror();
        }
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                script.onload = script.onreadystatechange = null;
                onloaded();
            }
        }
        head.appendChild(script);    
    }

    L.lazyload = function(scripts, onloaded, ondone, onerror) {
        doLoadScript(scripts, 0, handleScriptLoaded, onerror);
    
        function handleScriptLoaded(i) {
            onloaded(i);
            if (i == scripts.length - 1) {
                ondone();
            }
            else {
                doLoadScript(scripts, i + 1, handleScriptLoaded, onerror);
            }
        }
    }
})(Loader);