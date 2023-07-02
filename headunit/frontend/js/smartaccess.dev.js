//version 1.5.3
/*!
 * Copyright(C) 2013 Clarion Co., Ltd. All rights reserved.
 * Copyright(C) 2013 UIEvolution K.K. All rights reserved.
 */
;
var SmartAccess = SmartAccess || {};
SmartAccess.isSmtEmurator = false;//localStorage.getItem("smtemu_debug");
(function(SA) {
    var nnapi = null;
    SA.IS_SIMULATOR = false;
    SA.MWS_ADDRESS = "192.168.1.1";
    SA.MWS_PORT = "80";
    SA.APP_ID = 0;
    SA.InvalidArgumentException = function(message) {
        this.name = "SmartAccess.InvalidArgumentException";
        this.message = message
    };
    SA.InvalidArgumentException.prototype = new Error();
    SA.NoSupportException = function(message) {
        this.name = "SmartAccess.NoSupportException";
        this.message = message
    };
    SA.NoSupportException.prototype = new Error();
    SA.NoDataException = function(message) {
        this.name = "SmartAccess.NoDataException";
        this.message = message
    };
    SA.NoDataException.prototype = new Error();
    SA.InvalidStateException = function(message) {
        this.name = "SmartAccess.InvalidStateException";
        this.message = message
    };
    SA.InvalidStateException.prototype = new Error();
    SA.DeviceAPIError = function(message) {
        this.name = "SmartAccess.DeviceAPIError";
        this.message = message
    };
    SA.DeviceAPIError.prototype = new Error();
    SA.getNaviNativeAPI = function() {
        return nnapi
    };
    SA.getNaviSystemDelegate = function() {
        return SA.Navi.SystemDelegate.getInstance()
    };
    SA.getSimulatorSystemDelegate = function() {
        return SA.Simulator.SystemDelegate.getInstance()
    };
    SA.getSystemDelegate = SA.getNaviSystemDelegate;
    SA.getNaviNavigatorDelegate = function() {
        return SA.Navi.NavigatorDelegate.getInstance()
    };
    SA.getSimulatorNavigatorDelegate = function() {
        return SA.Simulator.NavigatorDelegate.getInstance()
    };
    SA.getNavigatorDelegate = SA.getNaviNavigatorDelegate;
    SA.getNaviPhoneDelegate = function() {
        return SA.Navi.PhoneDelegate.getInstance()
    };
    SA.getSimulatorPhoneDelegate = function() {
        return SA.Simulator.PhoneDelegate.getInstance()
    };
    SA.getPhoneDelegate = SA.getNaviPhoneDelegate;
    SA.getNaviAudioDelegate = function() {
        return SA.Navi.AudioDelegate.getInstance()
    };
    SA.getSimulatorAudioDelegate = function() {
        return SA.Simulator.AudioDelegate.getInstance()
    };
    SA.getAudioDelegate = SA.getNaviAudioDelegate;
    SA.getNaviBrowserDelegate = function() {
        return SA.Navi.BrowserDelegate.getInstance()
    };
    SA.getSimulatorBrowserDelegate = function() {
        return SA.Simulator.BrowserDelegate.getInstance()
    };
    SA.getBrowserDelegate = SA.getNaviBrowserDelegate;
    SA.getNaviVoiceInputDelegate = function() {
        return SA.Navi.VoiceInputDelegate.getInstance()
    };
    SA.getSimulatorVoiceInputDelegate = function() {
        return SA.Simulator.VoiceInputDelegate.getInstance()
    };
    SA.getVoiceInputDelegate = SA.getNaviVoiceInputDelegate;
    SA.getNaviPolicyDelegate = function() {
        return SA.Navi.PolicyDelegate.getInstance()
    };
    SA.getSimulatorPolicyDelegate = function() {
        return SA.Simulator.PolicyDelegate.getInstance()
    };
    SA.getPolicyDelegate = SA.getNaviPolicyDelegate;
    SA.getNaviLoggerDelegate = function() {
        return SA.Navi.LoggerDelegate.getInstance()
    };
    SA.getSimulatorLoggerDelegate = function() {
        return SA.Simulator.LoggerDelegate.getInstance()
    };
    SA.getLoggerDelegate = SA.getNaviLoggerDelegate;

    function isSimulator(npapi) {
        return !(npapi.hasOwnProperty("NaviNativeAPI") && npapi.hasOwnProperty("NaviNativeParam"))
    }

    function dispatchEvent(notification) {
        var namespace, event, data, nsInstance;
        namespace = notification.namespace;
        event = notification.event;
        data = notification.data;
        switch (namespace) {
            case "System":
                nsInstance = SA.System.getInstance();
                break;
            case "Navigator":
                nsInstance = SA.Navigator.getInstance();
                break;
            case "Audio":
                nsInstance = SA.Audio.getInstance();
                break;
            case "Phone":
                nsInstance = SA.Phone.getInstance();
                break;
            case "VoiceInput":
                nsInstance = SA.VoiceInput.getInstance();
                break;
            case "Browser":
                nsInstance = SA.Browser.getInstance();
                break
        }
        if (nsInstance) {
            SA.Logger.getInstance().trace(namespace, event, data);
            nsInstance.publish.apply(nsInstance, [event].concat(data))
        }
    }

    function updatePolicy(policyData) {
        SA.Policy.importData(policyData)
    }

    function associateStubs() {
        SA.getSystemDelegate = SA.getSimulatorSystemDelegate;
        SA.getNavigatorDelegate = SA.getSimulatorNavigatorDelegate;
        SA.getPhoneDelegate = SA.getSimulatorPhoneDelegate;
        SA.getAudioDelegate = SA.getSimulatorAudioDelegate;
        SA.getBrowserDelegate = SA.getSimulatorBrowserDelegate;
        SA.getVoiceInputDelegate = SA.getSimulatorVoiceInputDelegate;
        SA.getPolicyDelegate = SA.getSimulatorPolicyDelegate;
        SA.getLoggerDelegate = SA.getSimulatorLoggerDelegate
    }

    function listenNNAPI(nnapi) {
        nnapi.setNotifyEventListener(function() {
            var args, functionId, notification;
            args = Array.prototype.slice.call(arguments);
            functionId = args.shift();
            notification = {};
            notification.data = [];
            switch (functionId) {
                case 4225:
                    notification.namespace = "System";
                    notification.event = SA.System.EVENT_REVERSE;
                    notification.data.push(Boolean(Number(args[0])));
                    break;
                case 4640:
                    notification.namespace = "System";
                    notification.event = SA.System.EVENT_QUICK_START;
                    notification.data.push(Number(args[0]));
                    break;
                case 8304:
                    notification.namespace = "Navigator";
                    if (Number(args[0]) === 0) {
                        notification.event = SA.Navigator.EVENT_DESTINATION;
                        notification.data.push(new SA.Navigator.Location(SA.Navigator.Position.parse(args[1]), args[2]))
                    } else {
                        notification.event = SA.Navigator.EVENT_WAYPOINT;
                        notification.data.push(Number(args[0]));
                        notification.data.push(new SA.Navigator.Location(SA.Navigator.Position.parse(args[1]), args[2]))
                    }
                    break;
                case 8690:
                    notification.namespace = "Navigator";
                    notification.event = SA.Navigator.EVENT_ALARM;
                    notification.data.push(Number(args[0]));
                    break;
                case 12305:
                    notification.namespace = "Phone";
                    notification.event = SA.Phone.EVENT_CALL_STATUS;
                    notification.data.push(Number(args[0]));
                    break;
                case 20481:
                    notification.namespace = "Audio";
                    notification.event = SA.Audio.EVENT_AUDIO_SOURCE;
                    notification.data.push(Boolean(Number(args[0])) === false);
                    break;
                case 24592:
                    notification.namespace = "VoiceInput";
                    notification.event = SA.VoiceInput.EVENT_DATA;
                    notification.data.push(Number(args[0]));
                    notification.data.push(args[1]);
                    notification.data.push(Number(args[2]));
                    break;
                case 16388:
                    notification.namespace = "Browser";
                    notification.event = SA.Browser.EVENT_SUCCEED_START_APP;
                    notification.data = [];
                    break;
                case 16389:
                    notification.namespace = "Browser";
                    notification.event = SA.Browser.EVENT_FAILURE_START_APP;
                    notification.data = [];
                    break;
                case 16390:
                    notification.namespace = "Browser";
                    notification.event = SA.Browser.EVENT_FOCUS;
                    notification.data = [Boolean(Number(args[0]))];
                    break;
                case 16393:
                    notification.namespace = "Browser";
                    notification.event = SA.Browser.EVENT_REGULATION;
                    notification.data = [Number(args[0])];
                    break;
                case 16394:
                    notification.namespace = "Browser";
                    notification.event = SA.Browser.EVENT_ILLUMINATION;
                    notification.data = [Number(args[0])];
                    break
            }
            dispatchEvent(notification)
        })
    }

    function hashCode(key) {
        var hash = 0,
            i, len, ch;
        if (key.length > 0) {
            for (i = 0, len = key.length; i < len; i += 1) {
                ch = key.charCodeAt(i);
                hash = ((hash << 5) - hash) + ch;
                hash = hash & hash
            }
        }
        return (hash >>> 0)
    }
    SmartAccess.AppType = {
        NORMAL: 0,
        AUDIO: 1
    };
    SA.init = function(npapi, appType, appId) {
        if (SmartAccess.isSmtEmurator) {
            if (appType === SA.AppType.NORMAL) {
                SA.APP_ID = Number(SA.Storage.loadWithRawKey("launcher_normalid"))
            } else {
                if (appType === SA.AppType.AUDIO) {
                    SA.APP_ID = Number(SA.Storage.loadWithRawKey("launcher_audioid"))
                } else {
                    throw new SA.InvalidArgumentException("unknown appType.")
                }
            }
            nnapi = new window.parent.DebugNaviNativeAPI(SA.APP_ID);
            listenNNAPI(nnapi);
            console.log("Use SmtEmurator APP_ID: " + SA.APP_ID);
            return
        }
        if (!npapi) {
            throw new SA.InvalidArgumentException("`nnapiId` must be an id of HTML element embedding NNAPI")
        }
        SA.IS_SIMULATOR = isSimulator(npapi);
        if (SA.IS_SIMULATOR) {
            SA.APP_ID = hashCode([location.protocol, "//", location.hostname, ":", location.port, location.pathname].join(""));
            SA.Simulator.Config.load();
            SA.Simulator.Messenger.listen(dispatchEvent, SA.Simulator.Messenger.saveMethodConfig, updatePolicy);
            associateStubs()
        } else {
            if (appType === SA.AppType.NORMAL) {
                SA.APP_ID = (appId === undefined) ? Number(SA.Storage.loadWithRawKey("launcher_normalid")) : Number(appId)
            } else {
                if (appType === SA.AppType.AUDIO) {
                    SA.APP_ID = (appId === undefined) ? Number(SA.Storage.loadWithRawKey("launcher_audioid")) : Number(appId)
                } else {
                    throw new SA.InvalidArgumentException("unknown appType.")
                }
            }
            nnapi = npapi.NaviNativeAPI(SA.APP_ID);
            listenNNAPI(nnapi)
        }
        console.log("APP_ID: " + SA.APP_ID)
    };
    SA.setMWSAddrPort = function(addr, port) {
        if (SA.IS_SIMULATOR) {
            SA.MWS_ADDRESS = addr;
            SA.MWS_PORT = port
        }
    }
}(SmartAccess));
SmartAccess.Core = SmartAccess.Core || {};
(function(Core) {
    var Pubsub = function() {
        this.callbacks = {}
    };
    Core.Pubsub = Pubsub;
    Pubsub.psid = 1;
    Pubsub.prototype.subscribe = function(event, listener) {
        if (!this.callbacks.hasOwnProperty(event)) {
            this.callbacks[event] = {}
        }
        if (listener.psid === undefined) {
            listener.psid = (Pubsub.psid += 1)
        }
        this.callbacks[event][listener.psid] = listener
    };
    Pubsub.prototype.unsubscribe = function(event, listener) {
        var i;
        if (!this.callbacks.hasOwnProperty(event)) {
            return
        }
        if (listener.psid === undefined) {
            return
        }
        delete this.callbacks[event][listener.psid]
    };
    Pubsub.prototype.publish = function() {
        var args, i, event, psid;
        args = Array.prototype.slice.call(arguments);
        event = args.shift();
        if (!this.callbacks.hasOwnProperty(event)) {
            return
        }
        for (psid in this.callbacks[event]) {
            if (this.callbacks[event].hasOwnProperty(psid)) {
                this.callbacks[event][psid].apply(this, args)
            }
        }
    }
}(SmartAccess.Core));
SmartAccess.MWS = SmartAccess.MWS || {};
(function(MWS, window) {
    var Base = {},
        XHR_TIMEOUT = 5000;
    MWS.Base = Base;
    Base.Status = {
        SUCCESS: "SUCCESS",
        ERROR: "ERROR",
        TIME_OUT: "TIME_OUT"
    };
    Base.STATUS_TIMEOUT = "TIMEOUT";
    Base.getStatus = function(xhrStatus) {
        if ((xhrStatus >= 200 && xhrStatus < 300) || xhrStatus === 304) {
            return Base.Status.SUCCESS
        }
        return Base.Status.ERROR
    };
    Base.request = function(options) {
        options = options || {};
        var method = options.method || "GET",
            url = options.url || "",
            headers = options.headers || {},
            payload = options.payload || "",
            callback = options.callback || function() {},
            timeout = options.timeout || XHR_TIMEOUT,
            context = options.context || this,
            xhr = new XMLHttpRequest(),
            timerId, key;
        xhr.open(method, url, true);
        for (key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key])
            }
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState === xhr.DONE) {
                callback.call(context, Base.getStatus(xhr.status), xhr.responseText);
                Base.cancel(xhr);
                window.clearTimeout(timerId)
            }
        };
        timerId = window.setTimeout(function() {
            callback.call(context, Base.Status.TIME_OUT, "");
            Base.cancel(xhr)
        }, timeout);
        xhr.send(payload);
        return xhr
    };
    Base.cancel = function(xhr) {
        xhr.onreadystatechange = null;
        xhr.abort()
    };
    Base.isRunning = function(xhr) {
        return Boolean(xhr && xhr.readyState !== xhr.DONE && xhr.readyState !== xhr.UNSENT)
    }
}(SmartAccess.MWS, window));
(function(SA, MWS) {
    var RemoteStorage = {},
        makeKey, getEndpointUrl;
    RemoteStorage.XHR_TIMEOUT = 30 * 1000;
    MWS.RemoteStorage = RemoteStorage;
    makeKey = function(key, usePrefix) {
        if (usePrefix !== undefined && usePrefix !== true) {
            return key
        }
        return ("0000000000" + SA.APP_ID).slice(-10) + "-" + key
    };
    getEndpointUrl = function(key, usePrefix) {
        return ["http://", SA.MWS_ADDRESS, ":", SA.MWS_PORT, "/kvs/", encodeURIComponent(makeKey(key, usePrefix)), "?", Number(new Date())].join("")
    };
    RemoteStorage.get = function(key, callback, usePrefix) {
        if (SmartAccess.isSmtEmurator) {
            var value = localStorage.getItem(key);
            callback.call(this, value);
            return
        }
        MWS.Base.request({
            url: getEndpointUrl(key, usePrefix),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            callback: function(status, responseText) {
                if (status !== MWS.Base.Status.SUCCESS) {
                    responseText = null
                }
                callback.call(this, responseText)
            },
            context: this,
            timeout: RemoteStorage.XHR_TIMEOUT
        })
    };
    RemoteStorage.set = function(key, value, callback, usePrefix) {
        if (SmartAccess.isSmtEmurator) {
            var value = localStorage.setItem(key, value);
            callback.call(this, true);
            return
        }
        MWS.Base.request({
            method: "POST",
            url: getEndpointUrl(key, usePrefix),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            payload: value,
            callback: function(status, statusText, responseText) {
                callback.call(this, status === MWS.Base.Status.SUCCESS)
            },
            context: this,
            timeout: RemoteStorage.XHR_TIMEOUT
        })
    };
    RemoteStorage.setTimeout = function(timeout) {
        RemoteStorage.XHR_TIMEOUT = timeout
    }
}(SmartAccess, SmartAccess.MWS));
(function(SA, MWS) {
    var LocalPlayback = {},
        DEFAULT_LIMIT, getEndpointUrl, getCommandPayload, doRequest;
    MWS.LocalPlayback = LocalPlayback;
    DEFAULT_LIMIT = 30;
    getEndpointUrl = function() {
        return ["http://", SA.MWS_ADDRESS, ":", SA.MWS_PORT, "/localplayback/?", Number(new Date())].join("")
    };
    getCommandPayload = function(command, args) {
        var queries = ["cmd=" + {
                getPlaybackStatus: "playbackstatus",
                getSongMetadata: "metadata",
                setPlaybackMode: "playbackmode",
                play: "play",
                pause: "pause",
                stop: "stop",
                albumnext: "albumnext",
                albumprev: "albumprev",
                skiptonext: "skiptonext",
                skiptoprev: "skiptoprev",
                setPosition: "setpos",
                getPlaylist: "ls&category=playlist",
                getGenres: "ls&category=genre",
                getArtists: "ls&category=artist",
                getAlbums: "ls&category=album",
                getMusicTracks: "ls&category=title",
                getAlbumArtwork: "artwork"
            } [command]],
            key;
        args = args || {};
        for (key in args) {
            if (args.hasOwnProperty(key)) {
                queries.push(key + "=" + args[key])
            }
        }
        queries.push("format=" + (command === "getAlbumArtwork" ? "pngbase64" : "xml"));
        return queries.join("&")
    };
    doRequest = function(command, args, callback) {
        MWS.Base.request({
            method: "POST",
            url: getEndpointUrl(),
            headers: {
                "Content-Type": "text/plain"
            },
            payload: getCommandPayload(command, args),
            callback: function(status, responseText) {
                var fallbackXML = "";
                if (status === MWS.Base.Status.SUCCESS) {
                    callback.call(this, responseText)
                } else {
                    if (command !== "getAlbumArtwork") {
                        fallbackXML = "<Result><Command>" + command + "</Command><ResponseCode>-1</ResponseCode></Result>"
                    }
                    callback.call(this, fallbackXML)
                }
            },
            context: this,
            timeout: LocalPlayback.XHR_TIMEOUT
        })
    };
    LocalPlayback.PLAYBACK_STATE = {
        PLAYING: "playing",
        PAUSED: "paused",
        STOPPED: "stopped",
        UNKNOWN: "unknown"
    };
    LocalPlayback.getPlaybackStatus = function(callback) {
        doRequest.call(this, "getPlaybackStatus", null, callback)
    };
    LocalPlayback.getSongMetadata = function(callback) {
        doRequest.call(this, "getSongMetadata", {
            title: "current"
        }, callback)
    };
    LocalPlayback.REPEAT_MODE = {
        OFF: "off",
        ONE: "one",
        ALL: "all"
    };
    LocalPlayback.SHUFFLE_MODE = {
        OFF: "off",
        ON: "on"
    };
    LocalPlayback.setPlaybackMode = function(repeat, shuffle, callback) {
        doRequest.call(this, "setPlaybackMode", {
            repeat: repeat,
            shuffle: shuffle
        }, callback)
    };
    LocalPlayback.play = function(trackId, callback) {
        if (typeof trackId === "function") {
            callback = trackId;
            trackId = null
        }
        doRequest.call(this, "play", trackId ? {
            title: trackId
        } : null, callback)
    };
    LocalPlayback.pause = function(callback) {
        doRequest.call(this, "pause", null, callback)
    };
    LocalPlayback.stop = function(callback) {
        doRequest.call(this, "stop", null, callback)
    };
    LocalPlayback.SKIP_MODE = {
        NEXT_ALBUM: "albumnext",
        PREV_ALBUM: "albumprev",
        NEXT_TRACK: "skiptonext",
        PREV_TRACK: "skiptoprev"
    };
    LocalPlayback.skip = function(skip, callback) {
        doRequest.call(this, skip, null, callback)
    };
    LocalPlayback.setPosition = function(position, callback) {
        doRequest.call(this, "setPosition", {
            pos: position
        }, callback)
    };
    LocalPlayback.getPlaylist = function(count, offset, callback) {
        if (typeof count === "function") {
            callback = count;
            count = null
        } else {
            if (typeof offset === "function") {
                callback = offset;
                offset = null
            }
        }
        count = count || DEFAULT_LIMIT;
        offset = offset || 0;
        doRequest.call(this, "getPlaylist", {
            count: count,
            offset: offset
        }, callback)
    };
    LocalPlayback.getGenres = function(count, offset, callback) {
        if (typeof count === "function") {
            callback = count;
            count = null
        } else {
            if (typeof offset === "function") {
                callback = offset;
                offset = null
            }
        }
        count = count || DEFAULT_LIMIT;
        offset = offset || 0;
        doRequest.call(this, "getGenres", {
            count: count,
            offset: offset
        }, callback)
    };
    LocalPlayback.getArtists = function(count, offset, filters, callback) {
        var args;
        if (typeof count === "function") {
            callback = count;
            count = null
        } else {
            if (typeof offset === "function") {
                callback = offset;
                offset = null
            } else {
                if (typeof filters === "function") {
                    callback = filters;
                    filters = null
                }
            }
        }
        count = count || DEFAULT_LIMIT;
        offset = offset || 0;
        filters = filters || {};
        args = {
            count: count,
            offset: offset
        };
        if (filters.hasOwnProperty("genreId")) {
            args.genre = filters.genreId
        }
        doRequest.call(this, "getArtists", args, callback)
    };
    LocalPlayback.getAlbums = function(count, offset, filters, callback) {
        var args;
        if (typeof count === "function") {
            callback = count;
            count = null
        } else {
            if (typeof offset === "function") {
                callback = offset;
                offset = null
            } else {
                if (typeof filters === "function") {
                    callback = filters;
                    filters = null
                }
            }
        }
        count = count || DEFAULT_LIMIT;
        offset = offset || 0;
        filters = filters || {};
        args = {
            count: count,
            offset: offset
        };
        if (filters.hasOwnProperty("artistId")) {
            args.artist = filters.artistId
        }
        if (filters.hasOwnProperty("genreId")) {
            args.genre = filters.genreId
        }
        doRequest.call(this, "getAlbums", args, callback)
    };
    LocalPlayback.getMusicTracks = function(count, offset, filters, callback) {
        var args;
        if (typeof count === "function") {
            callback = count;
            count = null
        } else {
            if (typeof offset === "function") {
                callback = offset;
                offset = null
            } else {
                if (typeof filters === "function") {
                    callback = filters;
                    filters = null
                }
            }
        }
        count = count || DEFAULT_LIMIT;
        offset = offset || 0;
        filters = filters || {};
        args = {
            count: count,
            offset: offset
        };
        if (filters.hasOwnProperty("artistId")) {
            args.artist = filters.artistId
        }
        if (filters.hasOwnProperty("genreId")) {
            args.genre = filters.genreId
        }
        if (filters.hasOwnProperty("playlistId")) {
            args.playlist = filters.playlistId
        }
        if (filters.hasOwnProperty("albumId")) {
            args.album = filters.albumId
        }
        if (filters.hasOwnProperty("trackId")) {
            args.title = filters.trackId
        }
        doRequest.call(this, "getMusicTracks", args, callback)
    };
    LocalPlayback.getAlbumArtwork = function(albumId, width, height, callback) {
        var args;
        if (typeof width === "function") {
            callback = width;
            width = null
        } else {
            if (typeof height === "function") {
                callback = height;
                height = null
            }
        }
        args = {
            album: albumId,
            w: width || 256,
            h: height || 256
        };
        doRequest.call(this, "getAlbumArtwork", args, callback)
    };
    LocalPlayback.setTimeout = function(timeout) {
        LocalPlayback.XHR_TIMEOUT = timeout
    }
}(SmartAccess, SmartAccess.MWS));
(function(SA, MWS) {
    var AudioStreamer = {},
        getEndpointUrl, getCommandPayload, doRequest;
    MWS.AudioStreamer = AudioStreamer;
    getEndpointUrl = function() {
        return ["http://", SA.MWS_ADDRESS, ":", SA.MWS_PORT, "/audiolibrary/?", Number(new Date())].join("")
    };
    getCommandPayload = function(command, params) {
        var i, len;
        switch (command) {
            case "addToPlaylist":
                for (i = 0, len = params.length; i < len; i += 1) {
                    command += '|providerid="0",id="' + i + '",url="' + params[i] + '"'
                }
                break;
            case "seek":
                if (params.length < 1) {
                    params.push(0)
                }
                if (params.length < 2) {
                    params.push(true)
                }
                command += '|pos="' + params[0] + '",waitBuffering="' + Number(params[1]) + '"';
                break;
            case "play":
                if (params != undefined) {
                    command += '|pos="' + params + '"'
                }
                break;
            default:
                break
        }
        return command
    };
    doRequest = function(command, params, callback) {
        var payload = getCommandPayload(command, params);
        if (callback instanceof AudioStreamer.Batch) {
            callback.addTask(command, payload);
            return
        }
        MWS.Base.request({
            method: "POST",
            url: getEndpointUrl(),
            headers: {
                "Content-Type": "text/plain"
            },
            payload: payload,
            callback: function(status, responseText) {
                var fallbackXML;
                if (callback) {
                    if (status === MWS.Base.Status.SUCCESS) {
                        callback.call(this, responseText)
                    } else {
                        fallbackXML = "<return><cmd><cmdname>" + command + "</cmdname><retcode>-1</retcode></cmd></return>";
                        callback.call(this, fallbackXML)
                    }
                }
            },
            context: this,
            timeout: AudioStreamer.XHR_TIMEOUT
        })
    };
    AudioStreamer.addToPlaylist = function(urls, callback) {
        for (var i = 0; i < urls.length; i++) {
            urls[i] = encodeURIComponent(urls[i])
        }
        doRequest.call(this, "addToPlaylist", urls, callback)
    };
    AudioStreamer.getPlaylist = function(callback) {
        doRequest.call(this, "getPlaylist", null, callback)
    };
    AudioStreamer.getStatus = function(callback) {
        doRequest.call(this, "getStatus", null, callback)
    };
    AudioStreamer.getVersion = function(callback) {
        doRequest.call(this, "getVersion", null, callback)
    };
    AudioStreamer.getMetadata = function(callback) {
        doRequest.call(this, "getMetadata", null, callback)
    };
    AudioStreamer.play = function(callback, pos) {
        doRequest.call(this, "play", pos, callback)
    };
    AudioStreamer.pause = function(callback) {
        doRequest.call(this, "pause", null, callback)
    };
    AudioStreamer.skip = function(callback) {
        doRequest.call(this, "skip", null, callback)
    };
    AudioStreamer.stop = function(callback) {
        doRequest.call(this, "stop", null, callback)
    };
    AudioStreamer.seek = function(offset, waitBuffering, stopIfEnd, callback) {
        if (typeof stopIfEnd === "function") {
            callback = stopIfEnd;
            stopIfEnd = true
        }
        var privateCallback = function(responseText) {
            var parser, xml, statusCode;
            if (offset > 0 && !stopIfEnd) {
                parser = new DOMParser();
                xml = parser.parseFromString(responseText, "text/xml");
                statusCode = xml.querySelector("return cmd data streaminfo statuscode");
                if (statusCode && statusCode.textContent === "300") {
                    doRequest.call(this, "skip", null, null)
                }
            }
            callback.call(this, responseText)
        };
        if (callback instanceof AudioStreamer.Batch) {
            privateCallback = callback
        }
        doRequest.call(this, "seek", [Number(offset), Boolean(waitBuffering)], privateCallback)
    };
    AudioStreamer.resetPlaylist = function(callback) {
        doRequest.call(this, "resetPlaylist", null, callback)
    };
    AudioStreamer.setTimeout = function(timeout) {
        AudioStreamer.XHR_TIMEOUT = timeout
    };
    (function(AudioStreamer) {
        var Batch = function() {
            this.tasks = []
        };
        Batch.prototype.getBatchPayload = function() {
            var i, len, commands = ["batch"];
            for (i = 0, len = this.tasks.length; i < len; i += 1) {
                commands.push(this.tasks[i].payload)
            }
            return commands.join("&")
        };
        Batch.prototype.execute = function(callback) {
            var myInstance = this;
            var tasks = this.tasks;
            var outerHTML = function(node) {
                return node.outerHTML || new XMLSerializer().serializeToString(node)
            };
            MWS.Base.request({
                method: "POST",
                url: getEndpointUrl(),
                headers: {
                    "Content-Type": "text/plain"
                },
                payload: myInstance.getBatchPayload(),
                callback: function(status, responseText) {
                    var fallbackXML, results, responses, i, len, nodes, node;
                    if (callback) {
                        if (status === MWS.Base.Status.SUCCESS) {
                            responses = [];
                            try {
                                node = (new DOMParser()).parseFromString(responseText, "text/xml");
                                if (node.childNodes && node.childNodes.length > 0 && node.childNodes[0].tagName === "return") {
                                    node = node.childNodes[0];
                                    if (node.childNodes && node.childNodes.length > 0 && node.childNodes[0].tagName === "cmd") {
                                        nodes = node.childNodes[0].childNodes;
                                        for (i = 0, len = nodes.length; i < len; i += 1) {
                                            node = nodes[i];
                                            if (node.tagName === "return") {
                                                responses.push(outerHTML(node))
                                            }
                                        }
                                    }
                                }
                            } catch (exception) {}
                            results = [];
                            for (i = 0, len = tasks.length; i < len; i += 1) {
                                results.push({
                                    command: tasks[i].command,
                                    response: (i < responses.length ? responses[i] : null)
                                })
                            }
                            callback.call(this, results)
                        } else {
                            fallbackXML = "<return><cmd><cmdname>batch</cmdname><retcode>-1</retcode></cmd></return>";
                            callback.call(this, fallbackXML)
                        }
                    }
                },
                context: this,
                timeout: AudioStreamer.XHR_TIMEOUT
            })
        };
        Batch.prototype.addTask = function(command, payload) {
            this.tasks.push({
                command: command,
                payload: payload
            })
        };
        AudioStreamer.Batch = Batch
    }(AudioStreamer))
}(SmartAccess, SmartAccess.MWS));
(function(SA, MWS) {
    var PreloadAudio = {},
        getEndpointUrl, getCommandPayload, doRequest;
    MWS.PreloadAudio = PreloadAudio;
    MWS.PreloadAudio.Status = {
        SUCCESS: 0,
        PREPARING: 1,
        READY: 2,
        PLAYING: 3,
        PAUSED: 4,
        INVALID_ARGUMENT: -1,
        DOWNLOAD_ERROR: -2,
        PLAYING_ERROR: -3,
        ERROR: -99
    };
    getEndpointUrl = function() {
        return ["http://", SA.MWS_ADDRESS, ":", SA.MWS_PORT, "/preloadaudio/"].join("")
    };
    getCommandPayload = function(command, id, urls) {
        var queries = ["cmd=" + command],
            tmpArrays, i, len;
        if (id !== undefined) {
            queries.push("id=" + id)
        }
        if (Array.isArray(urls)) {
            tmpArrays = [];
            for (i = 0, len = urls.length; i < len; i += 1) {
                tmpArrays.push(encodeURIComponent(urls[i]))
            }
            queries.push("contents=" + tmpArrays.join("|"))
        }
        return queries.join("&")
    };
    doRequest = function(command, id, urls, callback) {
        MWS.Base.request({
            method: "POST",
            url: getEndpointUrl(),
            headers: {
                "Content-Type": "text/plain"
            },
            payload: getCommandPayload(command, id, urls),
            callback: function(status, responseText) {
                var responseJSON;
                if (status === MWS.Base.Status.SUCCESS) {
                    try {
                        responseJSON = JSON.parse(responseText)
                    } catch (exception) {
                        responseJSON = {}
                    }
                    if (!responseJSON.hasOwnProperty("status")) {
                        responseJSON.status = MWS.PreloadAudio.Status.ERROR
                    }
                    callback.call(this, responseJSON.status, responseJSON.message)
                } else {
                    callback.call(this, MWS.PreloadAudio.Status.ERROR, "Uncategoriezed Error")
                }
            },
            context: this,
            timeout: PreloadAudio.XHR_TIMEOUT
        })
    };
    PreloadAudio.addPlaylist = function(id, urls, callback) {
        doRequest.call(this, "addPlaylist", id, urls, callback)
    };
    PreloadAudio.removePlaylist = function(id, callback) {
        doRequest.call(this, "removePlaylist", id, undefined, callback)
    };
    PreloadAudio.resetPlaylist = function(callback) {
        doRequest.call(this, "resetPlaylist", undefined, undefined, callback)
    };
    PreloadAudio.play = function(id, callback) {
        doRequest.call(this, "play", id, undefined, callback)
    };
    PreloadAudio.pause = function(callback) {
        doRequest.call(this, "pause", undefined, undefined, callback)
    };
    PreloadAudio.stop = function(callback) {
        doRequest.call(this, "stop", undefined, undefined, callback)
    };
    PreloadAudio.getStatus = function(id, callback) {
        if (callback === undefined && Object.prototype.toString.call(id) === "[object Function]") {
            callback = id;
            id = undefined
        }
        doRequest.call(this, "getStatus", id, undefined, callback)
    };
    PreloadAudio.setTimeout = function(timeout) {
        PreloadAudio.XHR_TIMEOUT = timeout
    }
}(SmartAccess, SmartAccess.MWS));
(function(SA) {
    var System = function(delegate) {
        SA.Core.Pubsub.apply(this);
        this.delegate = delegate
    };
    System.prototype = new SA.Core.Pubsub();
    SA.System = System;
    System.instance = null;
    System.getInstance = function() {
        if (!System.instance) {
            System.instance = new System(SA.getSystemDelegate())
        }
        return System.instance
    };
    System.functionIds = {
        System: {
            isSupported: "0x1000",
            beep: "0x1020",
            getCredential: "0x1030",
            getAspectRatio: "0x1040",
            updateScreenMode: "0x1050",
            getDrivingRegulation: "0x1060",
            getIlluminationStatus: "0x1070",
            isReverse: "0x1080",
            addReverseListener: "0x1081",
            removeReverseListener: "0x1081",
            getSpeed: "0x1090",
            getLocale: "0x1100",
            getNaviLog: "0x1200",
            deleteNaviLog: "0x1201",
            appendLog: "0x1210",
            getLog: "0x1211",
            deleteLog: "0x1212",
            getVersion: "0x1213",
            addQuickStartListener: "0x1220",
            removeQuickStartListener: "0x1220"
        },
        Navigator: {
            getCarPosition: "0x2000",
            getDatum: "0x2010",
            updateDatum: "0x2011",
            getRoad: "0x2020",
            getDestination: "0x2030",
            getWaypoint: "0x2030",
            getGeoName: "0x2040",
            getRouteInfo: "0x2050",
            getRoutePriority: "0x2060",
            setCruiseMode: "0x2080",
            addDestinationListener: "0x2070",
            removeDestinationListener: "0x2070",
            addWaypointListener: "0x2070",
            removeWaypointListener: "0x2070",
            updateMapGeometry: "0x2090",
            updateMapPoints: "0x21A0",
            getMapDirection: "0x21B0",
            initializeDestination: "0x21C0",
            initializeWaypoint: "0x21C0",
            isDestinationInitializable: "0x21C1",
            isWaypointInitializable: "0x21C1",
            registerLocation: "0x21D0",
            isLocationRegisterable: "0x21D1",
            registerMapIcon: "0x21E0",
            deregisterAllMapIcons: "0x21E1",
            showMapIcons: "0x21E2",
            hideMapIcons: "0x21E2",
            registerMapIcon2: "0x2205",
            deregisterAllMapIcons2: "0x2206",
            showMapIcons2: "0x2207",
            hideMapIcons2: "0x2207",
            registerAlarm: "0x21F0",
            deregisterAllAlarms: "0x21F1",
            addAlarmListener: "0x21F2",
            removeAlarmListener: "0x21F2",
            getAlarmInfos: "0x21F3"
        },
        Phone: {
            getCallStatus: "0x3010",
            addCallStatusListener: "0x3011",
            removeCallStatusListener: "0x3011",
            makePhoneCall: "0x3030",
            receivePhoneCall: "0x3040",
            getPhoneStatuses: "0x3060"
        },
        Audio: {
            acquireAudioSource: "0x5000",
            releaseAudioSource: "0x5000",
            addAudioSourceListener: "0x5001",
            removeAudioSourceListener: "0x5001",
            launchAudioApp: "0x5010"
        },
        VoiceInput: {
            startVoiceInput: ["0x6000", "0x6010"],
            stopVoiceInput: ["0x6001"]
        },
        Browser: {
            notifyLaunched: ["0x4000", "0x4001"],
            resetApplication: "0x4002",
            startApplication: ["0x4003", "0x4004", "0x4005"],
            addFocusListener: "0x4006",
            removeFocusListener: "0x4006",
            showNavi: "0x4007",
            showMenu: "0x4007",
            showLauncher: "0x4008",
            showTab: "0x4008",
            addReverseListener: "0x4009",
            removeReverseListener: "0x4009",
            addIlluminationListener: "0x400A",
            removeIlluminationListener: "0x400A",
            getApplicationType: "0x400B"
        }
    };
    System.AspectRatio = function(pixelV, pixelH, sizeV, sizeH) {
        this.pixelV = pixelV;
        this.pixelH = pixelH;
        this.sizeV = sizeV;
        this.sizeH = sizeH
    };
    System.ScreenMode = {
        HALF_RIGHT: "1",
        HALF_LEFT: "2",
        FULL: "3"
    };
    System.RegulationMode = {
        REGULATION_OFF: 0,
        REGULATION_ON: 1,
        REGULATION_ERROR: -1
    };
    System.IlluminationMode = {
        ILLUMINATION_DAY: 0,
        ILLUMINATION_NIGHT: 1
    };
    System.prototype.isSupported = function(namespace, methodName) {
        SA.Logger.getInstance().trace("System", "isSupported", arguments);
        return this.delegate.isSupported(namespace, methodName)
    };
    System.prototype.beep = function(pattern) {
        SA.Logger.getInstance().trace("System", "beep", arguments);
        this.delegate.beep(pattern)
    };
    System.prototype.getCredential = function(level, time) {
        SA.Logger.getInstance().trace("System", "getCredential", arguments);
        return this.delegate.getCredential(level, time)
    };
    System.prototype.getAspectRatio = function() {
        SA.Logger.getInstance().trace("System", "getAspectRatio", arguments);
        return this.delegate.getAspectRatio()
    };
    System.prototype.getDrivingRegulation = function() {
        SA.Logger.getInstance().trace("System", "getDrivingRegulation", arguments);
        return this.delegate.getDrivingRegulation()
    };
    System.prototype.getIlluminationStatus = function() {
        SA.Logger.getInstance().trace("System", "getIlluminationStatus", arguments);
        return this.delegate.getIlluminationStatus()
    };
    System.prototype.isReverse = function() {
        SA.Logger.getInstance().trace("System", "isReverse", arguments);
        return this.delegate.isReverse()
    };
    System.prototype.getSpeed = function() {
        SA.Logger.getInstance().trace("System", "getSpeed", arguments);
        return this.delegate.getSpeed()
    };
    System.prototype.getLocale = function(withDetail) {
        SA.Logger.getInstance().trace("System", "getLocale", arguments);
        return this.delegate.getLocale(withDetail)
    };
    System.prototype.getNaviLog = function() {
        SA.Logger.getInstance().trace("System", "getNaviLog", arguments);
        return this.delegate.getNaviLog()
    };
    System.prototype.getLog = function() {
        SA.Logger.getInstance().trace("System", "getLog", arguments);
        return this.delegate.getLog()
    };
    System.prototype.getVersion = function() {
        SA.Logger.getInstance().trace("System", "getVersion", arguments);
        return this.delegate.getVersion()
    };
    System.prototype.updateScreenMode = function(screenMode) {
        SA.Logger.getInstance().trace("System", "updateScreenMode", arguments);
        return this.delegate.updateScreenMode(screenMode)
    };
    System.prototype.deleteNaviLog = function() {
        SA.Logger.getInstance().trace("System", "deleteNaviLog", arguments);
        return this.delegate.deleteNaviLog()
    };
    System.prototype.appendLog = function(log) {
        SA.Logger.getInstance().trace("System", "appendLog", arguments);
        return this.delegate.appendLog(log)
    };
    System.prototype.deleteLog = function() {
        SA.Logger.getInstance().trace("System", "deleteLog", arguments);
        return this.delegate.deleteLog()
    };
    System.EVENT_REVERSE = "REVERSE";
    System.prototype.addReverseListener = function(listener) {
        SA.Logger.getInstance().trace("System", "addReverseListener", arguments);
        this.subscribe(System.EVENT_REVERSE, listener)
    };
    System.prototype.removeReverseListener = function(listener) {
        SA.Logger.getInstance().trace("System", "removeReverseListener", arguments);
        this.unsubscribe(System.EVENT_REVERSE, listener)
    };
    System.EVENT_QUICK_START = "QUICK_START";
    System.prototype.addQuickStartListener = function(listener) {
        SA.Logger.getInstance().trace("System", "addQuickStartListener", arguments);
        this.subscribe(System.EVENT_QUICK_START, listener)
    };
    System.prototype.removeQuickStartListener = function(listener) {
        SA.Logger.getInstance().trace("System", "removeQuickStartListener", arguments);
        this.unsubscribe(System.EVENT_QUICK_START, listener)
    }
}(SmartAccess));
(function(SA) {
    var Navigator = function(delegate) {
        SA.Core.Pubsub.apply(this);
        this.delegate = delegate
    };
    Navigator.prototype = new SA.Core.Pubsub();
    SA.Navigator = Navigator;
    Navigator.instance = null;
    Navigator.getInstance = function() {
        if (!Navigator.instance) {
            Navigator.instance = new Navigator(SA.getNavigatorDelegate())
        }
        return Navigator.instance
    };
    Navigator.ScreenModeException = function(message) {
        this.name = "SmartAccess.Navigator.ScreenModeException";
        this.message = message
    };
    Navigator.ScreenModeException.prototype = new Error();
    Navigator.NotInitializableException = function(message) {
        this.name = "SmartAccess.Navigator.NotInitializableException";
        this.message = message
    };
    Navigator.NotInitializableException.prototype = new Error();
    Navigator.NotRegisterableException = function(message) {
        this.name = "SmartAccess.Navigator.NotRegisterableException";
        this.message = message
    };
    Navigator.NotRegisterableException.prototype = new Error();
    Navigator.UnknownIconException = function(message, iconType) {
        this.name = "SmartAccess.Navigator.UnknownIconException";
        this.message = message;
        this.invalidIconType = iconType
    };
    Navigator.UnknownIconException.prototype = new Error();
    Navigator.UnknownIconListException = function(message, iconListType) {
        this.name = "SmartAccess.Navigator.UnknownIconListException";
        this.message = message;
        this.invalidIconListType = iconListType
    };
    Navigator.UnknownIconListException.prototype = new Error();
    Navigator.Position = function(lat, lon) {
        this.lat = lat;
        this.lon = lon
    };
    Navigator.Position.parse = function(positionStr) {
        var token = positionStr.split(",");
        return new Navigator.Position(Number(token[0]), Number(token[1]))
    };
    Navigator.Position.prototype.toString = function() {
        return this.lat + "," + this.lon
    };
    Navigator.CarPosition = function(position, direction) {
        this.position = position;
        this.direction = direction
    };
    Navigator.DatumType = {
        WGS84: "0",
        TOKYO: "1"
    };
    Navigator.RoadType = {
        GENERAL: 0,
        TOLL_ROAD: 1,
        UNKNOWN: 2
    };
    Navigator.Road = function(roadType, name) {
        this.roadType = roadType;
        this.name = name
    };
    Navigator.Location = function(position, name) {
        this.position = position;
        this.name = name
    };
    Navigator.PrefectureId = {
        UNKNOWN: 0,
        HOKKAIDO: 1,
        AOMORI: 2,
        IWATE: 3,
        MIYAGI: 4,
        AKITA: 5,
        YAMAGATA: 6,
        FUKUSHIMA: 7,
        IBARAKI: 8,
        TOCHIGI: 9,
        GUNMA: 10,
        SAITAMA: 11,
        CHIBA: 12,
        TOKYO: 13,
        KANAGAWA: 14,
        NIIGATA: 15,
        TOYAMA: 16,
        ISHIKAWA: 17,
        FUKUI: 18,
        YAMANASHI: 19,
        NAGANO: 20,
        GIFU: 21,
        SHIZUOKA: 22,
        AICHI: 23,
        MIE: 24,
        SHIGA: 25,
        KYOTO: 26,
        OSAKA: 27,
        HYOGO: 28,
        NARA: 29,
        WAKAYAMA: 30,
        TOTTORI: 31,
        SHIMANE: 32,
        OKAYAMA: 33,
        HIROSHIMA: 34,
        YAMAGUCHI: 35,
        TOKUSHIMA: 36,
        KAGAWA: 37,
        EHIME: 38,
        KOCHI: 39,
        FUKUOKA: 40,
        SAGA: 41,
        NAGASAKI: 42,
        KUMAMOTO: 43,
        OITA: 44,
        MIYAZAKI: 45,
        KAGOSHIMA: 46,
        OKINAWA: 47
    };
    Navigator.GeographicName = function(name, prefId) {
        this.name = name;
        this.prefId = prefId
    };
    Navigator.RouteInfo = function(exist, distance, requiredTime) {
        this.exist = exist;
        this.distance = distance;
        this.requiredTime = requiredTime
    };
    Navigator.RoutePriority = {
        TOLL_ROAD: 0,
        GENERAL: 1,
        UNKNOWN: 2
    };
    Navigator.Scale = {
        DEFAULT: "0",
        SCALE_100M: "1",
        SCALE_200M: "2",
        SCALE_500M: "3",
        SCALE_1KM: "4",
        SCALE_2KM: "5",
        SCALE_4KM: "6",
        SCALE_10KM: "7",
        SCALE_16KM: "8",
        SCALE_64KM: "9",
        SCALE_256KM: "10"
    };
    Navigator.IconType = {
        GENERAL: 1,
        POLICING: 2,
        SPEED_CAMERA: 3,
        CONGESTION: 4,
        TRAP: 5,
        REGULATION: 6,
        ACCIDENT: 7
    };
    Navigator.IconListType = {
        NONE: 0,
        A: 1,
        B: 2,
        C: 3,
        D: 4
    };
    Navigator.IconType2 = {
        BLUE: 1,
        RED: 2
    };
    Navigator.AlarmId = {
        NONE: "0",
        CHIME: "1",
        MELODY: "2",
        ALARM: "3",
        VOICE_JPN_0: "4",
        VOICE_JPN_1: "5",
        VOICE_JPN_2: "6",
        VOICE_JPN_3: "7",
        VOICE_JPN_4: "8",
        VOICE_JPN_5: "9",
        VOICE_JPN_6: "10",
        VOICE_JPN_7: "11",
        VOICE_JPN_8: "12",
        VOICE_JPN_9: "13",
        VOICE_JPN_10: "14",
        DOG: "15",
        CAT: "16",
        WAVE: "17",
        BELL: "18",
        MUSIC_BOX_0: "19",
        MUSIC_BOX_1: "20",
        MARIMBA: "21",
        BUGLE_0: "22",
        BUGLE_1: "23",
        SCRATCH: "24"
    };
    Navigator.AlarmInfo = function(index, distance) {
        this.index = index;
        this.distance = distance
    };
    Navigator.prototype.getCarPosition = function() {
        SA.Logger.getInstance().trace("Navigator", "getCarPosition", arguments);
        return this.delegate.getCarPosition()
    };
    Navigator.prototype.getDatum = function() {
        SA.Logger.getInstance().trace("Navigator", "getDatum", arguments);
        return this.delegate.getDatum()
    };
    Navigator.prototype.getRoad = function() {
        SA.Logger.getInstance().trace("Navigator", "getRoad", arguments);
        return this.delegate.getRoad()
    };
    Navigator.prototype.getDestination = function() {
        SA.Logger.getInstance().trace("Navigator", "getDestination", arguments);
        return this.delegate.getDestination()
    };
    Navigator.prototype.getWaypoint = function(index) {
        SA.Logger.getInstance().trace("Navigator", "getWaypoint", arguments);
        return this.delegate.getWaypoint(index)
    };
    Navigator.prototype.getGeoName = function() {
        SA.Logger.getInstance().trace("Navigator", "getGeoName", arguments);
        return this.delegate.getGeoName()
    };
    Navigator.prototype.getRouteInfo = function() {
        SA.Logger.getInstance().trace("Navigator", "getRouteInfo", arguments);
        return this.delegate.getRouteInfo()
    };
    Navigator.prototype.getRoutePriority = function() {
        SA.Logger.getInstance().trace("Navigator", "getRoutePriority", arguments);
        return this.delegate.getRoutePriority()
    };
    Navigator.prototype.getMapDirection = function() {
        SA.Logger.getInstance().trace("Navigator", "getMapDirection", arguments);
        return this.delegate.getMapDirection()
    };
    Navigator.prototype.isDestinationInitializable = function() {
        SA.Logger.getInstance().trace("Navigator", "isDestinationInitializable", arguments);
        return this.delegate.isDestinationInitializable()
    };
    Navigator.prototype.isWaypointInitializable = function() {
        SA.Logger.getInstance().trace("Navigator", "isWaypointInitializable", arguments);
        return this.delegate.isWaypointInitializable()
    };
    Navigator.prototype.isLocationRegisterable = function() {
        SA.Logger.getInstance().trace("Navigator", "isLocationRegisterable", arguments);
        return this.delegate.isLocationRegisterable()
    };
    Navigator.prototype.getAlarmInfos = function() {
        SA.Logger.getInstance().trace("Navigator", "getAlarmInfos", arguments);
        return this.delegate.getAlarmInfos()
    };
    Navigator.prototype.updateDatum = function(datum) {
        SA.Logger.getInstance().trace("Navigator", "updateDatum", arguments);
        this.delegate.updateDatum(datum)
    };
    Navigator.prototype.setCruiseMode = function() {
        SA.Logger.getInstance().trace("Navigator", "setCruiseMode", arguments);
        this.delegate.setCruiseMode()
    };
    Navigator.prototype.updateMapGeometry = function(offsetX, position, scale) {
        SA.Logger.getInstance().trace("Navigator", "updateMapGeometry", arguments);
        this.delegate.updateMapGeometry(offsetX, position, scale)
    };
    Navigator.prototype.updateMapPoints = function(offsetX, position) {
        SA.Logger.getInstance().trace("Navigator", "updateMapPoints", arguments);
        this.delegate.updateMapPoints(offsetX, position)
    };
    Navigator.prototype.initializeDestination = function(location) {
        SA.Logger.getInstance().trace("Navigator", "initializeDestination", arguments);
        this.delegate.initializeDestination(location)
    };
    Navigator.prototype.initializeWaypoint = function(location) {
        SA.Logger.getInstance().trace("Navigator", "initializeWaypoint", arguments);
        this.delegate.initializeWaypoint(location)
    };
    Navigator.prototype.registerLocation = function(location, direction) {
        SA.Logger.getInstance().trace("Navigator", "registerLocation", arguments);
        this.delegate.registerLocation(location, direction)
    };
    Navigator.prototype.registerMapIcon = function(index, location, iconType, iconListType) {
        SA.Logger.getInstance().trace("Navigator", "registerMapIcon", arguments);
        this.delegate.registerMapIcon(index, location, iconType, iconListType)
    };
    Navigator.prototype.deregisterAllMapIcons = function() {
        SA.Logger.getInstance().trace("Navigator", "deregisterAllMapIcons", arguments);
        this.delegate.deregisterAllMapIcons()
    };
    Navigator.prototype.showMapIcons = function() {
        SA.Logger.getInstance().trace("Navigator", "showMapIcons", arguments);
        this.delegate.showMapIcons()
    };
    Navigator.prototype.hideMapIcons = function() {
        SA.Logger.getInstance().trace("Navigator", "hideMapIcons", arguments);
        this.delegate.hideMapIcons()
    };
    Navigator.prototype.registerMapIcon2 = function(index, location, iconType, iconNum) {
        SA.Logger.getInstance().trace("Navigator", "registerMapIcon2", arguments);
        this.delegate.registerMapIcon2(index, location, iconType, iconNum)
    };
    Navigator.prototype.deregisterAllMapIcons2 = function() {
        SA.Logger.getInstance().trace("Navigator", "deregisterAllMapIcons2", arguments);
        this.delegate.deregisterAllMapIcons2()
    };
    Navigator.prototype.showMapIcons2 = function() {
        SA.Logger.getInstance().trace("Navigator", "showMapIcons2", arguments);
        this.delegate.showMapIcons2()
    };
    Navigator.prototype.hideMapIcons2 = function() {
        SA.Logger.getInstance().trace("Navigator", "hideMapIcons2", arguments);
        this.delegate.hideMapIcons2()
    };
    Navigator.prototype.registerAlarm = function(index, position, direction, distance, alarmId) {
        SA.Logger.getInstance().trace("Navigator", "registerAlarm", arguments);
        this.delegate.registerAlarm(index, position, direction, distance, alarmId)
    };
    Navigator.prototype.deregisterAllAlarms = function() {
        SA.Logger.getInstance().trace("Navigator", "deregisterAllAlarms", arguments);
        this.delegate.deregisterAllAlarms()
    };
    Navigator.EVENT_DESTINATION = "DESTINATION";
    Navigator.prototype.addDestinationListener = function(listener) {
        SA.Logger.getInstance().trace("Navigator", "addDestinationListener", arguments);
        this.subscribe(Navigator.EVENT_DESTINATION, listener)
    };
    Navigator.prototype.removeDestinationListener = function(listener) {
        SA.Logger.getInstance().trace("Navigator", "removeDestinationListener", arguments);
        this.unsubscribe(Navigator.EVENT_DESTINATION, listener)
    };
    Navigator.EVENT_WAYPOINT = "WAYPOINT";
    Navigator.prototype.addWaypointListener = function(listener) {
        SA.Logger.getInstance().trace("Navigator", "addWaypointListener", arguments);
        this.subscribe(Navigator.EVENT_WAYPOINT, listener)
    };
    Navigator.prototype.removeWaypointListener = function(listener) {
        SA.Logger.getInstance().trace("Navigator", "removeWaypointListener", arguments);
        this.unsubscribe(Navigator.EVENT_WAYPOINT, listener)
    };
    Navigator.EVENT_ALARM = "ALARM";
    Navigator.prototype.addAlarmListener = function(listener) {
        SA.Logger.getInstance().trace("Navigator", "addAlarmListener", arguments);
        this.subscribe(Navigator.EVENT_ALARM, listener)
    };
    Navigator.prototype.removeAlarmListener = function(listener) {
        SA.Logger.getInstance().trace("Navigator", "removeAlarmListener", arguments);
        this.unsubscribe(Navigator.EVENT_ALARM, listener)
    }
}(SmartAccess));
(function(SA) {
    var Phone = function(delegate) {
        SA.Core.Pubsub.apply(this);
        this.delegate = delegate
    };
    Phone.prototype = new SA.Core.Pubsub();
    SA.Phone = Phone;
    Phone.instance = null;
    Phone.getInstance = function() {
        if (!Phone.instance) {
            Phone.instance = new Phone(SA.getPhoneDelegate())
        }
        return Phone.instance
    };
    Phone.CallStatus = {
        STANDBY: 0,
        DIALING: 1,
        INCOMING: 2,
        CALLING: 3,
        ERROR: 99
    };
    Phone.PhoneStatuses = function(batteryStatus, fiStatus) {
        this.batteryStatus = batteryStatus;
        this.fiStatus = fiStatus
    };
    Phone.prototype.getCallStatus = function() {
        SA.Logger.getInstance().trace("Phone", "getCallStatus", arguments);
        return this.delegate.getCallStatus()
    };
    Phone.prototype.makePhoneCall = function(phoneNumber) {
        SA.Logger.getInstance().trace("Phone", "makePhoneCall", arguments);
        this.delegate.makePhoneCall(phoneNumber)
    };
    Phone.prototype.receivePhoneCall = function() {
        SA.Logger.getInstance().trace("Phone", "receivePhoneCall", arguments);
        this.delegate.receivePhoneCall()
    };
    Phone.prototype.getPhoneStatuses = function() {
        SA.Logger.getInstance().trace("Phone", "getPhoneStatuses", arguments);
        return this.delegate.getPhoneStatuses()
    };
    Phone.EVENT_CALL_STATUS = "CALL_STATUS";
    Phone.prototype.addCallStatusListener = function(listener) {
        SA.Logger.getInstance().trace("Phone", "addCallStatusListener", arguments);
        this.subscribe(Phone.EVENT_CALL_STATUS, listener)
    };
    Phone.prototype.removeCallStatusListener = function(listener) {
        SA.Logger.getInstance().trace("Phone", "removeCallStatusListener", arguments);
        this.unsubscribe(Phone.EVENT_CALL_STATUS, listener)
    }
}(SmartAccess));
(function(SA) {
    var Audio = function(delegate) {
        SA.Core.Pubsub.apply(this);
        this.delegate = delegate
    };
    Audio.prototype = new SA.Core.Pubsub();
    SA.Audio = Audio;
    Audio.instance = null;
    Audio.getInstance = function() {
        if (!Audio.instance) {
            Audio.instance = new Audio(SA.getAudioDelegate())
        }
        return Audio.instance
    };
    Audio.prototype.acquireAudioSource = function() {
        SA.Logger.getInstance().trace("Audio", "acquireAudioSource", arguments);
        this.delegate.acquireAudioSource()
    };
    Audio.prototype.releaseAudioSource = function() {
        SA.Logger.getInstance().trace("Audio", "releaseAudioSource", arguments);
        this.delegate.releaseAudioSource()
    };
    Audio.App = {
        PANDORA: "0",
        AHA_RADIO: "1"
    };
    Audio.prototype.launchAudioApp = function(application) {
        SA.Logger.getInstance().trace("Audio", "launchAudioApp", arguments);
        this.delegate.launchAudioApp(application)
    };
    Audio.EVENT_AUDIO_SOURCE = "AUDIO_SOURCE";
    Audio.prototype.addAudioSourceListener = function(listener) {
        SA.Logger.getInstance().trace("Audio", "addAudioSourceListener", arguments);
        this.subscribe(Audio.EVENT_AUDIO_SOURCE, listener)
    };
    Audio.prototype.removeAudioSourceListener = function(listener) {
        SA.Logger.getInstance().trace("Audio", "removeAudioSourceListener", arguments);
        this.unsubscribe(Audio.EVENT_AUDIO_SOURCE, listener)
    }
}(SmartAccess));
(function(SA, document) {
    var Browser = function(delegate) {
            SA.Core.Pubsub.apply(this);
            this.delegate = delegate;
            this.startingApplication = false
        },
        CLASS_REGULATION, CLASS_REGULATION_RULE_PREFIX;
    Browser.prototype = new SA.Core.Pubsub();
    SA.Browser = Browser;
    CLASS_REGULATION = "sa-regulation";
    CLASS_REGULATION_RULE_PREFIX = "sa-reg-rule";
    Browser.instance = null;
    Browser.getInstance = function() {
        if (!Browser.instance) {
            Browser.instance = new Browser(SA.getBrowserDelegate())
        }
        return Browser.instance
    };
    Browser.prototype.notifyLaunched = function(success) {
        SA.Logger.getInstance().trace("Browser", "notifyLaunched", arguments);
        this.delegate.notifyLaunched(success)
    };
    Browser.prototype.resetApplication = function() {
        SA.Logger.getInstance().trace("Browser", "resetApplication", arguments);
        this.delegate.resetApplication()
    };
    Browser.EVENT_SUCCEED_START_APP = "SUCCEED_START_APP";
    Browser.EVENT_FAILURE_START_APP = "FAILURE_START_APP";
    Browser.prototype.startApplication = function(applicationUrl, applicationId, onSuccess, onFailure) {
        SA.Logger.getInstance().trace("Browser", "startApplication", arguments);
        var self, onSuccessWrapper, onFailureWrapper;
        if (this.startingApplication) {
            throw new SA.InvalidStateException("already trying to start an application")
        }
        self = this;
        onSuccessWrapper = function() {
            self.startingApplication = false;
            self.unsubscribe(Browser.EVENT_SUCCEED_START_APP, onSuccessWrapper);
            self.unsubscribe(Browser.EVENT_FAILURE_START_APP, onFailureWrapper);
            onSuccess.apply(self, arguments)
        };
        onFailureWrapper = function() {
            self.startingApplication = false;
            self.unsubscribe(Browser.EVENT_SUCCEED_START_APP, onSuccessWrapper);
            self.unsubscribe(Browser.EVENT_FAILURE_START_APP, onFailureWrapper);
            onFailure.apply(self, arguments)
        };
        this.startingApplication = true;
        this.subscribe(Browser.EVENT_SUCCEED_START_APP, onSuccessWrapper);
        this.subscribe(Browser.EVENT_FAILURE_START_APP, onFailureWrapper);
        this.delegate.startApplication(applicationUrl, applicationId)
    };
    Browser.prototype.showNavi = function(exit) {
        SA.Logger.getInstance().trace("Browser", "showNavi", arguments);
        this.delegate.showNavi(exit)
    };
    Browser.prototype.showMenu = function(exit) {
        SA.Logger.getInstance().trace("Browser", "showMenu", arguments);
        this.delegate.showMenu(exit)
    };
    Browser.prototype.showLauncher = function() {
        SA.Logger.getInstance().trace("Browser", "showLauncher", arguments);
        this.delegate.showLauncher()
    };
    Browser.prototype.showTab = function(tabId) {
        SA.Logger.getInstance().trace("Browser", "showTab", arguments);
        this.delegate.showTab(tabId)
    };
    Browser.ApplicationType = {
        LAUNCHER: 0,
        APP_WITH_SOUND: 1,
        APP_WITHOUT_SOUND: 2
    };
    Browser.prototype.getApplicationType = function() {
        SA.Logger.getInstance().trace("Browser", "getApplicationType", arguments);
        return this.delegate.getApplicationType()
    };
    Browser.EVENT_FOCUS = "FOCUS";
    Browser.prototype.addFocusListener = function(listener) {
        SA.Logger.getInstance().trace("Browser", "addFocusListener", arguments);
        this.subscribe(Browser.EVENT_FOCUS, listener)
    };
    Browser.prototype.removeFocusListener = function(listener) {
        SA.Logger.getInstance().trace("Browser", "removeFocusListener", arguments);
        this.unsubscribe(Browser.EVENT_FOCUS, listener)
    };
    Browser.EVENT_REGULATION = "REGULATION";
    Browser.prototype.addRegulationListener = function(listener) {
        SA.Logger.getInstance().trace("Browser", "addRegulationListener", arguments);
        if (listener === undefined) {
            this.subscribe(Browser.EVENT_REGULATION, this.applyRegulation)
        } else {
            this.subscribe(Browser.EVENT_REGULATION, listener)
        }
    };
    Browser.prototype.removeRegulationListener = function(listener) {
        SA.Logger.getInstance().trace("Browser", "removeRegulationListener", arguments);
        if (listener === undefined) {
            this.unsubscribe(Browser.EVENT_REGULATION, this.applyRegulation)
        } else {
            this.unsubscribe(Browser.EVENT_REGULATION, listener)
        }
    };
    Browser.EVENT_ILLUMINATION = "ILLUMINATION";
    Browser.prototype.addIlluminationListener = function(listener) {
        SA.Logger.getInstance().trace("Browser", "addIlluminationListener", arguments);
        this.subscribe(Browser.EVENT_ILLUMINATION, listener)
    };
    Browser.prototype.removeIlluminationListener = function(listener) {
        SA.Logger.getInstance().trace("Browser", "removeIlluminationListener", arguments);
        this.unsubscribe(Browser.EVENT_ILLUMINATION, listener)
    };
    Browser.prototype.addRegulationClass = function(className, target) {
        var elements, i;
        elements = (target || document).getElementsByClassName(className);
        elements = Array.prototype.slice.call(elements);
        for (i = 0; i < elements.length; i += 1) {
            elements[i].classList.add(CLASS_REGULATION)
        }
    };
    Browser.prototype.removeRegulationClass = function(target) {
        var elements, i;
        elements = (target || document).getElementsByClassName(CLASS_REGULATION);
        elements = Array.prototype.slice.call(elements);
        for (i = 0; i < elements.length; i += 1) {
            elements[i].classList.remove(CLASS_REGULATION)
        }
    };
    Browser.prototype.applyRegulation = function(regulationMode, target) {
        var regRule, i, len, that;
        if (regulationMode === SA.System.RegulationMode.REGULATION_ON) {
            that = this;
            SA.Policy.getEffectiveRuleIndice(function(indice) {
                that.removeRegulationClass(target);
                for (i = 0, len = indice.length; i < len; i += 1) {
                    regRule = CLASS_REGULATION_RULE_PREFIX + ("00" + indice[i]).slice(-2);
                    that.addRegulationClass(regRule, target)
                }
            })
        } else {
            this.removeRegulationClass()
        }
    }
}(SmartAccess, document));
(function(SA) {
    var VoiceInput = function(delegate) {
        SA.Core.Pubsub.apply(this);
        this.delegate = delegate
    };
    VoiceInput.prototype = new SA.Core.Pubsub();
    SA.VoiceInput = VoiceInput;
    VoiceInput.instance = null;
    VoiceInput.getInstance = function() {
        if (!VoiceInput.instance) {
            VoiceInput.instance = new VoiceInput(SA.getVoiceInputDelegate())
        }
        return VoiceInput.instance
    };
    VoiceInput.STATUS = {
        DATA: 0,
        LAST_DATA: 1,
        COMPLETE: 2,
        NO_INPUT_ERROR: 3,
        TOO_LONG_ERROR: 4,
        TOO_EARLY_ERROR: 5,
        INTERRUPT_ERROR: 6,
        ERROR: 7
    };
    SA.VoiceInput.VoiceInputStartFaultException = function(message) {
        this.name = "SmartAccess.VoiceInput.VoiceInputStartFaultException";
        this.message = message
    };
    SA.VoiceInput.VoiceInputStartFaultException.prototype = new Error();
    VoiceInput.EVENT_DATA = "DATA";
    VoiceInput.prototype.startVoiceInput = function(vrListener) {
        var self, listener;
        SA.Logger.getInstance().trace("VoiceInput", "startVoiceInput", arguments);
        self = this;
        listener = function(status, data, length) {
            vrListener.apply(self, arguments);
            switch (status) {
                case VoiceInput.STATUS.LAST_DATA:
                case VoiceInput.STATUS.COMPLETE:
                case VoiceInput.STATUS.NO_INPUT_ERROR:
                case VoiceInput.STATUS.TOO_LONG_ERROR:
                case VoiceInput.STATUS.TOO_EARLY_ERROR:
                case VoiceInput.STATUS.INTERRUPT_ERROR:
                case VoiceInput.STATUS.ERROR:
                    self.unsubscribe(VoiceInput.EVENT_DATA, listener);
                    break;
                default:
                    break
            }
        };
        this.subscribe(VoiceInput.EVENT_DATA, listener);
        this.delegate.startVoiceInput()
    };
    VoiceInput.prototype.stopVoiceInput = function() {
        SA.Logger.getInstance().trace("VoiceInput", "stopVoiceInput", arguments);
        this.delegate.stopVoiceInput()
    }
}(SmartAccess));
(function(SA) {
    var Policy, storageKey = "launcher_policy",
        numberOfPolicies = 50;
    Policy = function(delegate) {
        this.delegate = delegate
    };
    SA.Policy = Policy;
    Policy.instance = null;
    Policy.getInstance = function() {
        if (!Policy.instance) {
            Policy.instance = new Policy(SA.getPolicyDelegate())
        }
        return Policy.instance
    };

    function getPolicyXML() {
        return (new DOMParser()).parseFromString(Policy.exportData(), "text/xml")
    }

    function queryTextContent(node, tagNames) {
        var children = node.childNodes,
            i, len = children.length,
            tagName = tagNames.shift();
        for (i = 0; i < len; i += 1) {
            if (children[i].tagName === tagName) {
                if (tagNames.length === 0) {
                    return children[i].textContent
                }
                if (tagName !== "APP_INFO" || Number(queryTextContent(children[i], ["APP_HTML5_ID"])) === SA.APP_ID || SA.IS_SIMULATOR) {
                    return queryTextContent(children[i], tagNames)
                }
            }
        }
        return null
    }
    Policy.importData = function(policyData) {
        SA.Storage.storeWithoutStringify(storageKey, policyData)
    };
    Policy.exportData = function() {
        return SA.Storage.loadWithoutParse(storageKey)
    };
    Policy.prototype.getPolicyData = function(callback) {
        var currentPolicyData = Policy.exportData() || "";
        if (currentPolicyData.length > 0) {
            if (callback) {
                callback(currentPolicyData)
            }
            return
        }
        this.delegate.getPolicyData(function(policyData) {
            Policy.importData(policyData);
            if (callback) {
                callback(policyData)
            }
        })
    };
    Policy.isRuleEffectiveSync = function(index) {
        return (Policy.queryPolicyXMLDataSync(["POLICY_INFO", "APP_REGULATE_RULE", "RULE_" + ("00" + index).slice(-2)]) === "1")
    };
    Policy.isRuleEffective = function(index, callback) {
        SA.Logger.getInstance().trace("Policy", "isRuleEffective", arguments);
        Policy.getInstance().getPolicyData(function() {
            callback(Policy.isRuleEffectiveSync(index))
        })
    };
    Policy.getEffectiveRuleIndice = function(callback) {
        SA.Logger.getInstance().trace("Policy", "getEffectiveRuleIndice", arguments);
        Policy.getInstance().getPolicyData(function() {
            var i, indice = [];
            for (i = 1; i <= numberOfPolicies; i += 1) {
                if (Policy.isRuleEffectiveSync(i)) {
                    indice.push(i)
                }
            }
            callback(indice)
        })
    };
    Policy.isRestrictedWhenDrivingSync = function() {
        return (Policy.queryPolicyXMLDataSync(["POLICY_INFO", "APP_INFO", "APP_RESTRICTION"]) === "1")
    };
    Policy.isRestrictedWhenDriving = function(callback) {
        SA.Logger.getInstance().trace("Policy", "isRestrictedWhenDriving", arguments);
        Policy.getInstance().getPolicyData(function() {
            callback(Policy.isRestrictedWhenDrivingSync())
        })
    };
    Policy.queryPolicyXMLDataSync = function(tagNames) {
        return queryTextContent(getPolicyXML(), tagNames)
    };
    Policy.queryPolicyXMLData = function(tagNames, callback) {
        SA.Logger.getInstance().trace("Policy", "queryPolicyXMLData", arguments);
        Policy.getInstance().getPolicyData(function() {
            callback(Policy.queryPolicyXMLDataSync(tagNames))
        })
    }
}(SmartAccess));
(function(SA) {
    var Logger = function(delegate) {
        this.delegate = delegate
    };
    SA.Logger = Logger;
    Logger.instance = null;
    Logger.getInstance = function() {
        if (!Logger.instance) {
            Logger.instance = new Logger(SA.getLoggerDelegate())
        }
        return Logger.instance
    };
    Logger.prototype.trace = function(namespace, method, args) {
        this.delegate.trace(namespace, method, args)
    }
}(SmartAccess));
(function(SA, localStorage) {
    var Storage = {};
    SA.Storage = Storage;
    var LocalStorageStub = function() {
        this.data = {}
    };
    Storage.LocalStorageStub = LocalStorageStub;
    LocalStorageStub.prototype.setItem = function(key, value) {
        this.data[key] = value
    };
    LocalStorageStub.prototype.getItem = function(key) {
        return this.data[key] || null
    };
    LocalStorageStub.prototype.removeItem = function(key) {
        delete this.data[key]
    };
    LocalStorageStub.prototype.clear = function(key) {
        this.data = {}
    };
    localStorage = localStorage || new LocalStorageStub();

    function makeKey(key, usePrefix) {
        if (usePrefix !== undefined && usePrefix !== true) {
            return key
        }
        return ("0000000000" + SA.APP_ID).slice(-10) + "-" + key
    }
    Storage.storeWithoutStringify = function(rawKey, value) {
        localStorage.setItem(rawKey, value)
    };
    Storage.storeWithRawKey = function(rawKey, json) {
        if (typeof rawKey !== "string") {
            throw new SA.InvalidArgumentException("`rawKey` must be string")
        }
        try {
            Storage.storeWithoutStringify(rawKey, JSON.stringify(json))
        } catch (exception) {
            if (exception instanceof TypeError) {
                throw new SA.InvalidArgumentException("`json` must be JSON.stringify-ed")
            }
            throw exception
        }
    };
    Storage.store = function(key, json, usePrefix) {
        if (typeof key !== "string") {
            throw new SA.InvalidArgumentException("`key` must be string")
        }
        Storage.storeWithRawKey(makeKey(key, usePrefix), json)
    };
    Storage.loadWithoutParse = function(rawKey) {
        return localStorage.getItem(rawKey)
    };
    Storage.loadWithRawKey = function(rawKey) {
        try {
            return JSON.parse(Storage.loadWithoutParse(rawKey))
        } catch (exception) {
            Storage.clearWithRawKey(rawKey);
            return null
        }
    };
    Storage.load = function(key, usePrefix) {
        return Storage.loadWithRawKey(makeKey(key, usePrefix))
    };
    Storage.clearWithRawKey = function(rawKey) {
        localStorage.removeItem(rawKey)
    };
    Storage.clear = function(key, usePrefix) {
        Storage.clearWithRawKey(makeKey(key, usePrefix))
    };
    Storage.clearAll = function() {
        localStorage.clear()
    }
}(SmartAccess, localStorage));
(function(SA) {
    SA.Util = {
        geoDistance: function(lat1, lng1, lat2, lng2) {
            var a = 6378137,
                e2 = 0.0066943800229,
                m = 6335439.327083881,
                my, w, dx, dy;
            my = ((lat1 + lat2) / 2) * Math.PI / 180;
            w = Math.sqrt(1 - e2 * Math.pow(Math.sin(my), 2));
            dx = ((lng1 - lng2) * Math.PI / 180) * (a / w) * Math.cos(my);
            dy = ((lat1 - lat2) * Math.PI / 180) * (m / Math.pow(w, 3));
            return Math.round(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))
        },
        geoDirection: function(lat1, lng1, lat2, lng2) {
            var y, x, direction;
            lat1 = lat1 * Math.PI / 180;
            lng1 = lng1 * Math.PI / 180;
            lat2 = lat2 * Math.PI / 180;
            lng2 = lng2 * Math.PI / 180;
            y = Math.cos(lat2) * Math.sin(lng2 - lng1);
            x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
            direction = Math.atan2(x, y) * 180 / Math.PI;
            if (direction < 0) {
                direction = direction + 360
            }
            return Math.round(direction)
        }
    }
}(SmartAccess));
(function(SA, window) {
    var Geolocation = {},
        getEndpointUrl, makePosition, makePositionError, isExpired, updatePosition, cachedPosition, getCurrentPositionInner, xhrs = {},
        WATCH_INTERVAL = 5000,
        ERROR_PERMISSION_DENIED = 1,
        ERROR_POSITION_UNAVAILABLE = 2,
        ERROR_TIMEOUT = 3;
    SA.Geolocation = Geolocation;
    Geolocation.LOCATION_SOURCE = {
        VEHICLE: "vehicle",
        MWS: "mws"
    };
    getEndpointUrl = function() {
        return ["http://", SA.MWS_ADDRESS, ":", SA.MWS_PORT, "/gps/"].join("")
    };
    makePosition = function(data) {
        data = data || {};
        var coords = {
            latitude: data.latitude,
            longitude: data.longitude,
            accuracy: data.accuracy || 0
        };
        if (data.hasOwnProperty("altitude")) {
            coords.altitude = data.altitude
        }
        if (data.hasOwnProperty("altitudeAccuracy")) {
            coords.altitudeAccuracy = data.altitudeAccuracy
        }
        if (data.hasOwnProperty("heading")) {
            coords.heading = data.heading
        }
        if (data.hasOwnProperty("speed")) {
            coords.speed = data.speed
        }
        return {
            coords: coords,
            timestamp: data.timestamp,
            source: data.source
        }
    };
    makePositionError = function(code, message) {
        return {
            PERMISSION_DENIED: ERROR_PERMISSION_DENIED,
            POSITION_UNAVAILABLE: ERROR_POSITION_UNAVAILABLE,
            TIMEOUT: ERROR_TIMEOUT,
            code: code,
            message: message
        }
    };
    cachedPosition = {};
    isExpired = function(maximumAge) {
        if (maximumAge === 0 || maximumAge === undefined) {
            return true
        }
        if (!cachedPosition || !cachedPosition.timestamp) {
            return true
        }
        return cachedPosition.timestamp + maximumAge < Number(new Date())
    };
    updatePosition = function(position) {
        var updated = false;
        position.coords = position.coords || {};
        cachedPosition = cachedPosition || {};
        cachedPosition.coords = cachedPosition.coords || {};
        updated = updated || (position.coords.latitude !== cachedPosition.coords.latitude);
        updated = updated || (position.coords.longitude !== cachedPosition.coords.longitude);
        updated = updated || (position.coords.altitude !== cachedPosition.coords.altitude);
        updated = updated || (position.coords.accuracy !== cachedPosition.coords.accuracy);
        updated = updated || (position.coords.altitudeAccuracy !== cachedPosition.coords.altitudeAccuracy);
        updated = updated || (position.coords.heading !== cachedPosition.coords.heading);
        updated = updated || (position.coords.speed !== cachedPosition.coords.speed);
        cachedPosition = position;
        return updated
    };
    getCurrentPositionInner = function(successCallback, errorCallback, options, watchId) {
        options = options || {};
        var position, response, self = this,
            xhr;
        if (!isExpired(options.maximumAge)) {
            console.log('not expired');
            successCallback.call(self, cachedPosition);
            return
        }
        try {
            if (options.useMWS) {
                throw new Error("Force to use the GPS module on MWS")
            }
            position = SA.Navigator.getInstance().getCarPosition().position || {};
            successCallback.call(self, makePosition({
                latitude: position.lat,
                longitude: position.lon,
                timestamp: Number(new Date()),
                source: Geolocation.LOCATION_SOURCE.VEHICLE
            }))
        } catch (exception) {
            xhr = SA.MWS.Base.request({
                url: getEndpointUrl(),
                headers: {
                    "Content-Type": "text/plain"
                },
                callback: function(status, responseText) {
                    if (status === SA.MWS.Base.Status.SUCCESS) {
                        try {
                            response = JSON.parse(responseText)
                        } catch (exception) {
                            response = null
                        }
                        if (response) {
                            response.source = Geolocation.LOCATION_SOURCE.MWS;
                            successCallback.call(self, makePosition(response))
                        } else {
                            errorCallback.call(self, makePositionError(ERROR_POSITION_UNAVAILABLE, "Parse Failed"))
                        }
                    } else {
                        if (status === SA.MWS.Base.Status.TIME_OUT) {
                            errorCallback.call(self, makePositionError(ERROR_TIMEOUT, "Timeout"))
                        } else {
                            errorCallback.call(self, makePositionError(ERROR_POSITION_UNAVAILABLE, "Position Unavailable"))
                        }
                    }
                },
                context: self,
                timeout: options.timeout
            });
            if (watchId) {
                xhrs[watchId] = xhr
            }
        }
    };
    Geolocation.getCurrentPosition = function(successCallback, errorCallback, options) {
        var self = this;
        getCurrentPositionInner.call(self, function(position) {
            updatePosition(position);
            successCallback.call(self, position)
        }, errorCallback, options)
    };
    Geolocation.watchPosition = function(successCallback, errorCallback, options) {
        var self = this,
            watchId = window.setInterval(function() {
                if (!SA.MWS.Base.isRunning(xhrs[watchId])) {
                    getCurrentPositionInner.call(self, function(position) {
                        var updated = updatePosition(position);
                        if (updated) {
                            successCallback.call(self, position)
                        }
                    }, errorCallback, options, watchId)
                }
            }, WATCH_INTERVAL);
        return watchId
    };
    Geolocation.clearWatch = function(watchId) {
        if (SA.MWS.Base.isRunning(xhrs[watchId])) {
            SA.MWS.Base.cancel(xhrs[watchId]);
            delete xhrs[watchId]
        }
        window.clearInterval(watchId)
    }
}(SmartAccess, window));
(function(SA, MWS) {
    var Podcast = function(delegate) {
            this.delegate = delegate
        },
        getEndpointUrl, doRequest;
    SA.Podcast = Podcast;
    Podcast.prototype.getStations = function(param, callback) {
        this.delegate.getStations(param, callback)
    };
    Podcast.prototype.getEpisodes = function(station, param, callback) {
        this.delegate.getEpisodes(station, param, callback)
    }
}(SmartAccess, SmartAccess.MWS));
SmartAccess.Navi = SmartAccess.Navi || {};
(function(Navi, SA) {
    var SystemDelegate = function(nnapi) {
        this.nnapi = nnapi
    };
    Navi.SystemDelegate = SystemDelegate;
    SystemDelegate.instance = null;
    SystemDelegate.getInstance = function() {
        if (!SystemDelegate.instance) {
            SystemDelegate.instance = new SystemDelegate(SA.getNaviNativeAPI())
        }
        return SystemDelegate.instance
    };
    SystemDelegate.prototype.isSupported = function(namespace, methodName) {
        var ids, i, param;
        if (!SA.System.functionIds[namespace] || !SA.System.functionIds[namespace][methodName]) {
            return false
        }
        if (namespace === "Navigator" && methodName === "initializeDestination") {
            if (window.navigator.userAgent.match(/Smart Access R[0-9A-Za-z]+_F[^0-9]+/) !== null) {
                return false
            }
        }
        ids = [].concat(SA.System.functionIds[namespace][methodName]);
        for (i = ids.length - 1; i >= 0; i -= 1) {
            param = this.nnapi.getParam(4096, ids[i]);
            if (param.result !== 0 || !Number(param.outParam1)) {
                return false
            }
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return true
    };
    SystemDelegate.prototype.beep = function(pattern) {
        var ret = this.nnapi.setParam(4128, String(pattern), "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("beep is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    SystemDelegate.prototype.getCredential = function(level, time) {
        var months, days, levelTime, param;
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        levelTime = String(level + "," + days[time.getUTCDay()] + " " + months[time.getUTCMonth()] + " " + ("00" + time.getUTCDate()).slice(-2) + " " + ("00" + time.getUTCHours()).slice(-2) + ":" + ("00" + time.getUTCMinutes()).slice(-2) + ":" + ("00" + time.getUTCSeconds()).slice(-2) + " " + ("0000" + time.getUTCFullYear()).slice(-2));
        param = this.nnapi.getParam(4144, levelTime);
        if (param.result !== 0) {
            throw new SA.NoSupportException("getCredential is not supported.")
        }
        return param.outParam1
    };
    SystemDelegate.prototype.getAspectRatio = function() {
        var param, pixel, size;
        param = this.nnapi.getParam(4160, "");
        if (param.result === 1) {
            return new SA.System.AspectRatio(800, 480, 16, 9)
        }
        if (param.result < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
        pixel = param.outParam1.split(",");
        size = param.outParam2.split(",");
        return new SA.System.AspectRatio(Number(pixel[0]), Number(pixel[1]), Number(size[0]), Number(size[1]))
    };
    SystemDelegate.prototype.updateScreenMode = function(screenMode) {
        var ret = this.nnapi.setParam(4176, screenMode, "", "", "");
        if (ret !== 0) {
            throw new SA.DeviceAPIError("The specified ScreenMode is not supported.")
        }
    };
    SystemDelegate.prototype.getDrivingRegulation = function() {
        var param = this.nnapi.getParam(4192, "");
        if (param.result < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
        if (Number(param.outParam1) === 1) {
            return SA.System.RegulationMode.REGULATION_ON
        }
        if (Number(param.outParam1) === 0) {
            return SA.System.RegulationMode.REGULATION_OFF
        }
        return SA.System.RegulationMode.REGULATION_ERROR
    };
    SystemDelegate.prototype.getIlluminationStatus = function() {
        var param = this.nnapi.getParam(4208, "");
        if (param.result < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
        if (Number(param.outParam1) === 1) {
            return SA.System.IlluminationMode.ILLUMINATION_NIGHT
        }
        return SA.System.IlluminationMode.ILLUMINATION_DAY
    };
    SystemDelegate.prototype.isReverse = function() {
        var param = this.nnapi.getParam(4224, "");
        if (param.result < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
        if (Number(param.outParam1) === 1) {
            return true
        }
        return false
    };
    SystemDelegate.prototype.getSpeed = function() {
        var param = this.nnapi.getParam(4240, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getSpeed is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        if (param.outParam1.length === 0) {
            throw new SA.NoDataException("getSpeed is not available.")
        }
        return Number(param.outParam1)
    };
    SystemDelegate.prototype.getLocale = function(withDetail) {
        var param = this.nnapi.getParam(4352, "");
        var defaultLocale = "eng";
        if (withDetail === true) {
            var retJson = {
                Locale: defaultLocale,
                Detail: "US"
            };
            if (param.result === 1) {
                return retJson
            }
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
            retJson.Locale = param.outParam1;
            retJson.Detail = param.outParam2;
            return retJson
        }
        if (param.result === 1) {
            return defaultLocale
        }
        if (param.result < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
        return param.outParam1
    };
    SystemDelegate.prototype.getNaviLog = function() {
        var param = this.nnapi.getParam(4608, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getNaviLog is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return param.outParam1
    };
    SystemDelegate.prototype.deleteNaviLog = function() {
        var ret = this.nnapi.setParam(4609, "", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("deleteNaviLog is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    SystemDelegate.prototype.appendLog = function(log) {
        var ret = this.nnapi.setParam(4624, log, "", "", "");
        if (ret !== 0) {
            throw new SA.NoSupportException("appendLog is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    SystemDelegate.prototype.getLog = function() {
        var param = this.nnapi.getParam(4625, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getLog is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return param.outParam1
    };
    SystemDelegate.prototype.deleteLog = function() {
        var ret = this.nnapi.setParam(4626, "", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("deleteLog is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    SystemDelegate.prototype.getVersion = function() {
        var param = this.nnapi.getParam(4627, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getVersion is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return param.outParam1
    }
}(SmartAccess.Navi, SmartAccess));
(function(Navi, SA) {
    var NavigatorDelegate = function(nnapi) {
        this.nnapi = nnapi
    };
    Navi.NavigatorDelegate = NavigatorDelegate;
    NavigatorDelegate.instance = null;
    NavigatorDelegate.getInstance = function() {
        if (!NavigatorDelegate.instance) {
            NavigatorDelegate.instance = new NavigatorDelegate(SA.getNaviNativeAPI())
        }
        return NavigatorDelegate.instance
    };
    NavigatorDelegate.prototype.getCarPosition = function() {
        var param, carPosition;
        param = this.nnapi.getParam(8192, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getCarPosition is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        carPosition = new SA.Navigator.CarPosition(SA.Navigator.Position.parse(param.outParam1), param.outParam2);
        return carPosition
    };
    NavigatorDelegate.prototype.getDatum = function() {
        var param = this.nnapi.getParam(8208, "");
        if (param.result === 1) {
            return SA.Navigator.DatumType.WGS84
        }
        if (param.result < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
        return param.outParam1
    };
    NavigatorDelegate.prototype.getRoad = function() {
        var param, road;
        param = this.nnapi.getParam(8224, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getRoad is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        road = new SA.Navigator.Road(Number(param.outParam1), String(param.outParam2));
        return road
    };
    NavigatorDelegate.prototype.getDestination = function() {
        var param, location;
        param = this.nnapi.getParam(8240, "0");
        if (param.result === 1) {
            throw new SA.NoSupportException("getDestination is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        location = new SA.Navigator.Location(SA.Navigator.Position.parse(param.outParam1), param.outParam2);
        return location
    };
    NavigatorDelegate.prototype.getWaypoint = function(index) {
        var param, location;
        param = this.nnapi.getParam(8240, String(index));
        if (param.result === 1) {
            throw new SA.NoSupportException("getWaypoint is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        location = new SA.Navigator.Location(SA.Navigator.Position.parse(param.outParam1), param.outParam2);
        return location
    };
    NavigatorDelegate.prototype.getGeoName = function() {
        var param, geographicName;
        param = this.nnapi.getParam(8256, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getGeoName is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        geographicName = new SA.Navigator.GeographicName(param.outParam1, Number(param.outParam2));
        return geographicName
    };
    NavigatorDelegate.prototype.getRouteInfo = function() {
        var param, routeInfo;
        param = this.nnapi.getParam(8272, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getRouteInfo is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        routeInfo = new SA.Navigator.RouteInfo(Boolean(Number(param.outParam1)), Number(param.outParam2), Number(param.outParam3));
        return routeInfo
    };
    NavigatorDelegate.prototype.getRoutePriority = function() {
        var param;
        param = this.nnapi.getParam(8288, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getRoutePriority is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return Number(param.outParam1)
    };
    NavigatorDelegate.prototype.getMapDirection = function() {
        var param = this.nnapi.getParam(8624, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getMapDirection is not supported.")
        } else {
            if (param.result === 2) {
                throw new SA.Navigator.ScreenModeException("screen mode is invalid.")
            } else {
                if (param.result < 0) {
                    throw new SA.DeviceAPIError("An uncategorized error occurred.")
                }
            }
        }
        return param.outParam1
    };
    NavigatorDelegate.prototype.isDestinationInitializable = function() {
        var param = this.nnapi.getParam(8641, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("isDestinationInitializable is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return !(Number(param.outParam1))
    };
    NavigatorDelegate.prototype.isWaypointInitializable = function() {
        var param = this.nnapi.getParam(8641, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("isWaypointInitializable is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return !(Number(param.outParam1))
    };
    NavigatorDelegate.prototype.isLocationRegisterable = function() {
        var param = this.nnapi.getParam(8657, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("isLocationRegisterable is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return !(Number(param.outParam1))
    };
    NavigatorDelegate.prototype.getAlarmInfos = function() {
        var param, alarmInfos, i, len, tokens;
        param = this.nnapi.getParam(8691, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getAlarmInfos is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        alarmInfos = [];
        tokens = param.outParam2.split(",");
        for (i = 0, len = Number(param.outParam1); i < len; i += 1) {
            if (tokens.length >= 2) {
                alarmInfos.push(new SA.Navigator.AlarmInfo(Number(tokens.shift()), Number(tokens.shift())))
            }
        }
        return alarmInfos
    };
    NavigatorDelegate.prototype.updateDatum = function(datum) {
        var ret = this.nnapi.setParam(8209, datum, "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("updateDatum is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.setCruiseMode = function() {
        var ret = this.nnapi.setParam(8320, "", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("setCruiseMode is not supported.")
        } else {
            if (ret === 2) {
                throw new SA.Navigator.ScreenModeException("screen mode is invalid.")
            } else {
                if (ret < 0) {
                    throw new SA.DeviceAPIError("An uncategorized error occurred.")
                }
            }
        }
    };
    NavigatorDelegate.prototype.updateMapGeometry = function(offsetX, position, scale) {
        var ret;
        ret = this.nnapi.setParam(8336, String(offsetX), position.toString(), scale, "");
        if (ret === 1) {
            throw new SA.NoSupportException("updateMapGeometry is not supported.")
        } else {
            if (ret === 2) {
                throw new SA.Navigator.ScreenModeException("screen mode is invalid.")
            } else {
                if (ret < 0) {
                    throw new SA.DeviceAPIError("An uncategorized error occurred.")
                }
            }
        }
    };
    NavigatorDelegate.prototype.updateMapPoints = function(offsetX, position) {
        var ret = this.nnapi.setParam(8608, String(offsetX), position.toString(), "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("updateMapPoints is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.initializeDestination = function(location) {
        var ret = this.nnapi.setParam(8640, "0", location.position.toString(), String(location.name), "");
        if (ret === 1) {
            throw new SA.NoSupportException("initializeDestination is not supported.")
        } else {
            if (ret === 2) {
                throw new SA.Navigator.NotInitializableException("initializeDestination is not allowd.")
            } else {
                if (ret < 0) {
                    throw new SA.DeviceAPIError("An uncategorized error occurred.")
                }
            }
        }
    };
    NavigatorDelegate.prototype.initializeWaypoint = function(location) {
        var ret = this.nnapi.setParam(8640, "1", location.position.toString(), String(location.name), "");
        if (ret === 1) {
            throw new SA.NoSupportException("initializeWaypoint is not supported.")
        } else {
            if (ret === 2) {
                throw new SA.Navigator.NotInitializableException("initializeWaypoint is not allowd.")
            } else {
                if (ret < 0) {
                    throw new SA.DeviceAPIError("An uncategorized error occurred.")
                }
            }
        }
    };
    NavigatorDelegate.prototype.registerLocation = function(location, direction) {
        var ret = this.nnapi.setParam(8656, location.position.toString(), String(location.name), direction, "");
        if (ret === 1) {
            throw new SA.NoSupportException("registerLocation is not supported.")
        } else {
            if (ret === 2) {
                throw new SA.Navigator.NotRegisterableException("registerLocation is not allowed.")
            } else {
                if (ret < 0) {
                    throw new SA.DeviceAPIError("An uncategorized error occurred.")
                }
            }
        }
    };
    NavigatorDelegate.prototype.registerMapIcon = function(index, location, iconType, iconListType) {
        var iconStr, ret;
        iconStr = iconType + "/" + iconListType;
        ret = this.nnapi.setParam(8672, String(index), location.position.toString(), location.name, iconStr);
        if (ret === 1) {
            throw new SA.NoSupportException("registerMapIcon is not supported.")
        } else {
            if (ret === 2) {
                throw new SA.Navigator.UnknownIconException("iconType is unknown.", iconType)
            } else {
                if (ret === 3) {
                    throw new SA.Navigator.UnknownIconListException("iconListType is unknown.", iconListType)
                } else {
                    if (ret < 0) {
                        throw new SA.DeviceAPIError("An uncategorized error occurred.")
                    }
                }
            }
        }
    };
    NavigatorDelegate.prototype.deregisterAllMapIcons = function() {
        var ret = this.nnapi.setParam(8673, "", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("deregisterAllMapIcons is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.showMapIcons = function() {
        var ret = this.nnapi.setParam(8674, String(1), "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("showMapIcons is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.hideMapIcons = function() {
        var ret = this.nnapi.setParam(8674, String(0), "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("hideMapIcons is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.registerMapIcon2 = function(index, location, iconType, iconNum) {
        var ret = this.nnapi.setParam(8709, String(index), location.position.toString(), String(iconType), String(iconNum));
        if (ret === 1) {
            throw new SA.NoSupportException("registerMapIcon2 is not supported.")
        } else {
            if (ret === 2) {
                throw new SA.Navigator.UnknownIconException("iconType is unknown.", iconType)
            } else {
                if (ret === 3) {
                    throw new SA.Navigator.UnknownIconListException("iconNumber is unknown.", iconListType)
                } else {
                    if (ret === 4) {
                        throw new SA.NoSupportException("registerMapIcon2 is other error.")
                    } else {
                        if (ret < 0) {
                            throw new SA.DeviceAPIError("An uncategorized error occurred.")
                        }
                    }
                }
            }
        }
    };
    NavigatorDelegate.prototype.deregisterAllMapIcons2 = function() {
        var ret = this.nnapi.setParam(8710, "", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("deregisterAllMapIcons2 is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.showMapIcons2 = function() {
        var ret = this.nnapi.setParam(8711, String(1), "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("showMapIcons is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.hideMapIcons2 = function() {
        var ret = this.nnapi.setParam(8711, String(0), "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("hideMapIcons is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.registerAlarm = function(index, position, direction, distance, alarmId) {
        var ret = this.nnapi.setParam(8688, String(index), position.toString(), direction + "," + distance, alarmId);
        if (ret === 1) {
            throw new SA.NoSupportException("registerAlarm is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    NavigatorDelegate.prototype.deregisterAllAlarms = function() {
        var ret = this.nnapi.setParam(8689, "", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("deregisterAllAlarms is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    }
}(SmartAccess.Navi, SmartAccess));
(function(Navi, SA) {
    var PhoneDelegate = function(nnapi) {
        this.nnapi = nnapi
    };
    Navi.PhoneDelegate = PhoneDelegate;
    PhoneDelegate.instance = null;
    PhoneDelegate.getInstance = function() {
        if (!PhoneDelegate.instance) {
            PhoneDelegate.instance = new PhoneDelegate(SA.getNaviNativeAPI())
        }
        return PhoneDelegate.instance
    };
    PhoneDelegate.prototype.getCallStatus = function() {
        var param = this.nnapi.getParam(12304, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getCallStatus is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        return param.outParam1
    };
    PhoneDelegate.prototype.makePhoneCall = function(phoneNumber) {
        var ret = this.nnapi.setParam(12336, phoneNumber, "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("makePhoneCall is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    PhoneDelegate.prototype.receivePhoneCall = function() {
        var ret = this.nnapi.setParam(12352, "", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("receivePhoneCall is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    PhoneDelegate.prototype.getPhoneStatuses = function() {
        var param, phoneStatuses;
        param = this.nnapi.getParam(12384, "");
        if (param.result === 1) {
            throw new SA.NoSupportException("getPhoneStatuses is not supported.")
        } else {
            if (param.result < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
        phoneStatuses = new SA.Phone.PhoneStatuses(param.outParam1, param.outParam2);
        return phoneStatuses
    }
}(SmartAccess.Navi, SmartAccess));
(function(Navi, SA) {
    var AudioDelegate = function(nnapi) {
        this.nnapi = nnapi
    };
    Navi.AudioDelegate = AudioDelegate;
    AudioDelegate.instance = null;
    AudioDelegate.getInstance = function() {
        if (!AudioDelegate.instance) {
            AudioDelegate.instance = new AudioDelegate(SA.getNaviNativeAPI())
        }
        return AudioDelegate.instance
    };
    AudioDelegate.prototype.acquireAudioSource = function() {
        var ret = this.nnapi.setParam(20480, "0", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("acquireAudioSource is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    AudioDelegate.prototype.releaseAudioSource = function() {
        var ret = this.nnapi.setParam(20480, "1", "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("releaseAudioSource is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    };
    AudioDelegate.prototype.launchAudioApp = function(application) {
        var ret = this.nnapi.setParam(20496, application, "", "", "");
        if (ret === 1) {
            throw new SA.NoSupportException("launchAudioApp is not supported.")
        } else {
            if (ret < 0) {
                throw new SA.DeviceAPIError("An uncategorized error occurred.")
            }
        }
    }
}(SmartAccess.Navi, SmartAccess));
(function(Navi, SA) {
    var BrowserDelegate = function(nnapi) {
        this.nnapi = nnapi
    };
    Navi.BrowserDelegate = BrowserDelegate;
    BrowserDelegate.instance = null;
    BrowserDelegate.getInstance = function() {
        if (!BrowserDelegate.instance) {
            BrowserDelegate.instance = new BrowserDelegate(SA.getNaviNativeAPI())
        }
        return BrowserDelegate.instance
    };
    BrowserDelegate.prototype.notifyLaunched = function(success) {
        var ret;
        if (success) {
            ret = this.nnapi.setParam(16384, "", "", "", "")
        } else {
            ret = this.nnapi.setParam(16385, "", "", "", "")
        }
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    };
    BrowserDelegate.prototype.resetApplication = function() {
        var ret = this.nnapi.setParam(16386, "", "", "", "");
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    };
    BrowserDelegate.prototype.startApplication = function(applicationUrl, applicationId) {
        var ret = this.nnapi.setParam(16387, String(applicationId), applicationUrl, "", "");
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    };
    BrowserDelegate.prototype.showNavi = function(exit) {
        var ret = this.nnapi.setParam(16391, "1", (exit ? "0" : "1"), "", "");
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    };
    BrowserDelegate.prototype.showMenu = function(exit) {
        var ret = this.nnapi.setParam(16391, "0", (exit ? "0" : "1"), "", "");
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    };
    BrowserDelegate.prototype.showLauncher = function() {
        var ret = this.nnapi.setParam(16392, "0", "", "", "");
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    };
    BrowserDelegate.prototype.showTab = function(tabId) {
        var ret = this.nnapi.setParam(16392, String(tabId), "", "", "");
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    };
    BrowserDelegate.prototype.getApplicationType = function() {
        var param = this.nnapi.getParam(16395, "");
        if (param.result < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
        return param.outParam1
    }
}(SmartAccess.Navi, SmartAccess));
(function(Navi, SA) {
    var VoiceInputDelegate = function(nnapi) {
        this.nnapi = nnapi
    };
    Navi.VoiceInputDelegate = VoiceInputDelegate;
    VoiceInputDelegate.instance = null;
    VoiceInputDelegate.getInstance = function() {
        if (!VoiceInputDelegate.instance) {
            VoiceInputDelegate.instance = new VoiceInputDelegate(SA.getNaviNativeAPI())
        }
        return VoiceInputDelegate.instance
    };
    VoiceInputDelegate.prototype.startVoiceInput = function() {
        var ret = this.nnapi.setParam(24576, "", "", "", "");
        if (ret < 0) {
            throw new SA.VoiceInput.VoiceInputStartFaultException("startVoiceInput is failed with " + ret)
        }
    };
    VoiceInputDelegate.prototype.stopVoiceInput = function() {
        var ret = this.nnapi.setParam(24577, "", "", "", "");
        if (ret < 0) {
            throw new SA.DeviceAPIError("An uncategorized error occurred.")
        }
    }
}(SmartAccess.Navi, SmartAccess));
(function(Navi, SA) {
    var PolicyDelegate = function() {};
    Navi.PolicyDelegate = PolicyDelegate;
    PolicyDelegate.instance = null;
    PolicyDelegate.getInstance = function() {
        if (!PolicyDelegate.instance) {
            PolicyDelegate.instance = new PolicyDelegate()
        }
        return PolicyDelegate.instance
    };
    PolicyDelegate.prototype.getPolicyData = function(callback) {
        callback("")
    }
}(SmartAccess.Navi, SmartAccess));
(function(Navi, SA) {
    var LoggerDelegate = function() {};
    Navi.LoggerDelegate = LoggerDelegate;
    LoggerDelegate.instance = null;
    LoggerDelegate.getInstance = function() {
        if (!LoggerDelegate.instance) {
            LoggerDelegate.instance = new LoggerDelegate()
        }
        return LoggerDelegate.instance
    };
    LoggerDelegate.prototype.trace = function(namespace, method, args) {}
}(SmartAccess.Navi, SmartAccess));
SmartAccess.UI = SmartAccess.UI || {};
(function(document, SA, UI) {
    var CLASS_NAME_WIDTH400 = "sa-width-400",
        CLASS_NAME_WIDTH400R = "sa-width-400-right",
        CLASS_NAME_WIDTH800 = "sa-width-800";
    UI.setScreenModeFull = function(bodyElement) {
        if (!bodyElement) {
            bodyElement = document.getElementsByTagName("body").item(0)
        }
        bodyElement.classList.remove(CLASS_NAME_WIDTH400);
        bodyElement.classList.remove(CLASS_NAME_WIDTH400R);
        bodyElement.classList.add(CLASS_NAME_WIDTH800);
        SA.System.getInstance().updateScreenMode(SA.System.ScreenMode.FULL)
    };
    UI.setScreenModeHalfLeft = function(bodyElement) {
        if (!bodyElement) {
            bodyElement = document.getElementsByTagName("body").item(0)
        }
        bodyElement.classList.remove(CLASS_NAME_WIDTH800);
        bodyElement.classList.remove(CLASS_NAME_WIDTH400R);
        bodyElement.classList.add(CLASS_NAME_WIDTH400);
        SA.System.getInstance().updateScreenMode(SA.System.ScreenMode.HALF_LEFT)
    };
    UI.setScreenModeHalfRight = function(bodyElement) {
        if (!bodyElement) {
            bodyElement = document.getElementsByTagName("body").item(0)
        }
        bodyElement.classList.remove(CLASS_NAME_WIDTH800);
        bodyElement.classList.remove(CLASS_NAME_WIDTH400);
        bodyElement.classList.add(CLASS_NAME_WIDTH400R);
        SA.System.getInstance().updateScreenMode(SA.System.ScreenMode.HALF_RIGHT)
    }
}(document, SmartAccess, SmartAccess.UI));
/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(UI, SA) {
    var Instance, Event, utils, Detection, Gestures, defaults = {
            stop_browser_behavior: {
                userSelect: "none",
                touchAction: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        },
        EVENT_TYPES = {},
        DIRECTION_DOWN = "down",
        DIRECTION_LEFT = "left",
        DIRECTION_UP = "up",
        DIRECTION_RIGHT = "right",
        POINTER_MOUSE = "mouse",
        EVENT_START = "start",
        EVENT_MOVE = "move",
        EVENT_END = "end",
        DOCUMENT = document,
        READY = false,
        last_move_event = null,
        enable_detect = false,
        touch_triggered = false;

    function setup() {
        var name;
        if (READY) {
            return
        }
        Event.determineEventTypes();
        for (name in Gestures) {
            if (Gestures.hasOwnProperty(name)) {
                Detection.register(Gestures[name])
            }
        }
        Event.onTouch(DOCUMENT, EVENT_MOVE, Detection.detect);
        Event.onTouch(DOCUMENT, EVENT_END, Detection.detect);
        READY = true
    }
    Instance = function(element) {
        var self = this;
        setup();
        this.element = element;
        this.enabled = true;
        this.options = utils.extend({}, defaults);
        if (this.options.stop_browser_behavior) {
            utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior)
        }
        Event.onTouch(element, EVENT_START, function(ev) {
            if (self.enabled) {
                Detection.startDetect(self, ev)
            }
        })
    };
    UI.Gesture = Instance;
    Instance.prototype = {
        on: function onEvent(gesture, handler) {
            var t, gestures = gesture.split(" ");
            for (t = 0; t < gestures.length; t += 1) {
                this.element.addEventListener(gestures[t], handler, false)
            }
            return this
        },
        off: function offEvent(gesture, handler) {
            var t, gestures = gesture.split(" ");
            for (t = 0; t < gestures.length; t += 1) {
                this.element.removeEventListener(gestures[t], handler, false)
            }
            return this
        },
        trigger: function triggerEvent(gesture, eventData) {
            var event, element;
            event = DOCUMENT.createEvent("Event");
            event.initEvent(gesture, true, true);
            event.gesture = eventData;
            element = this.element;
            if (utils.hasParent(eventData.target, element)) {
                element = eventData.target
            }
            element.dispatchEvent(event);
            return this
        }
    };
    Event = {
        bindDom: function(element, type, handler) {
            var t, types = type.split(" ");
            for (t = 0; t < types.length; t += 1) {
                element.addEventListener(types[t], handler, false)
            }
        },
        onTouch: function onTouch(element, eventType, handler) {
            var self = this;
            this.bindDom(element, EVENT_TYPES[eventType], function bindDomOnTouch(ev) {
                var sourceEventType = ev.type.toLowerCase(),
                    count_touches = 0;
                if (ev.which === 1) {
                    enable_detect = true
                }
                if (enable_detect) {
                    if (!touch_triggered) {
                        count_touches = sourceEventType.match(/up/) ? 0 : 1
                    }
                    if (count_touches > 0 && eventType === EVENT_END) {
                        eventType = EVENT_MOVE
                    } else {
                        if (!count_touches) {
                            eventType = EVENT_END
                        }
                    }
                    if (!count_touches && last_move_event !== null) {
                        ev = last_move_event
                    } else {
                        last_move_event = ev
                    }
                    handler.call(Detection, self.collectEventData(element, eventType, ev))
                }
                if (!count_touches) {
                    last_move_event = null;
                    enable_detect = false;
                    touch_triggered = false
                }
            })
        },
        determineEventTypes: function determineEventTypes() {
            var types;
            types = ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"];
            EVENT_TYPES[EVENT_START] = types[0];
            EVENT_TYPES[EVENT_MOVE] = types[1];
            EVENT_TYPES[EVENT_END] = types[2]
        },
        getTouchList: function getTouchList(ev, eventType) {
            return [{
                identifier: 1,
                pageX: ev.pageX,
                pageY: ev.pageY,
                target: ev.target
            }]
        },
        collectEventData: function collectEventData(element, eventType, ev) {
            var touches = this.getTouchList(ev, eventType);
            return {
                center: utils.getCenter(touches),
                timeStamp: new Date().getTime(),
                target: ev.target,
                touches: touches,
                eventType: eventType,
                pointerType: POINTER_MOUSE,
                srcEvent: ev
            }
        }
    };
    utils = {
        extend: function extend(dest, src, merge) {
            var key;
            for (key in src) {
                if (src.hasOwnProperty(key)) {
                    if (dest[key] === undefined || !merge) {
                        dest[key] = src[key]
                    }
                }
            }
            return dest
        },
        hasParent: function(node, parent) {
            while (node) {
                if (node === parent) {
                    return true
                }
                node = node.parentNode
            }
            return false
        },
        getCenter: function getCenter(touches) {
            var t, len, valuesX = [],
                valuesY = [];
            for (t = 0, len = touches.length; t < len; t += 1) {
                valuesX.push(touches[t].pageX);
                valuesY.push(touches[t].pageY)
            }
            return {
                pageX: ((Math.min.apply(Math, valuesX) + Math.max.apply(Math, valuesX)) / 2),
                pageY: ((Math.min.apply(Math, valuesY) + Math.max.apply(Math, valuesY)) / 2)
            }
        },
        getVelocity: function getVelocity(delta_time, delta_x, delta_y) {
            return {
                x: Math.abs(delta_x / delta_time) || 0,
                y: Math.abs(delta_y / delta_time) || 0
            }
        },
        getAngle: function getAngle(touch1, touch2) {
            var y = touch2.pageY - touch1.pageY,
                x = touch2.pageX - touch1.pageX;
            return Math.atan2(y, x) * 180 / Math.PI
        },
        getDirection: function getDirection(touch1, touch2) {
            var x = Math.abs(touch1.pageX - touch2.pageX),
                y = Math.abs(touch1.pageY - touch2.pageY);
            if (x >= y) {
                return touch1.pageX - touch2.pageX > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT
            }
            return touch1.pageY - touch2.pageY > 0 ? DIRECTION_UP : DIRECTION_DOWN
        },
        getDistance: function getDistance(touch1, touch2) {
            var x = touch2.pageX - touch1.pageX,
                y = touch2.pageY - touch1.pageY;
            return Math.sqrt((x * x) + (y * y))
        },
        isVertical: function isVertical(direction) {
            return (direction === DIRECTION_UP || direction === DIRECTION_DOWN)
        },
        stopDefaultBrowserBehavior: function stopDefaultBrowserBehavior(element, css_props) {
            var i, p, prop, vendors = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (!css_props || !element.style) {
                return
            }
            for (i = 0; i < vendors.length; i += 1) {
                for (p in css_props) {
                    if (css_props.hasOwnProperty(p)) {
                        prop = p;
                        if (vendors[i]) {
                            prop = vendors[i] + prop.substring(0, 1).toUpperCase() + prop.substring(1)
                        }
                        element.style[prop] = css_props[p]
                    }
                }
            }
            if (css_props.userSelect === "none") {
                element.onselectstart = function() {
                    return false
                }
            }
        }
    };
    Detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: false,
        startDetect: function startDetect(inst, eventData) {
            if (this.current) {
                return
            }
            this.stopped = false;
            this.current = {
                inst: inst,
                startEvent: utils.extend({}, eventData),
                lastEvent: false,
                name: ""
            };
            this.detect(eventData)
        },
        detect: function detect(eventData) {
            var inst_options, g, len, gesture;
            if (!this.current || this.stopped) {
                return
            }
            eventData = this.extendEventData(eventData);
            inst_options = this.current.inst.options;
            for (g = 0, len = this.gestures.length; g < len; g += 1) {
                gesture = this.gestures[g];
                if (!this.stopped && inst_options[gesture.name] !== false) {
                    if (gesture.handler(eventData, this.current.inst) === false) {
                        this.stopDetect();
                        break
                    }
                }
            }
            if (this.current) {
                this.current.lastEvent = eventData
            }
            if (eventData.eventType === EVENT_END && !eventData.touches.length - 1) {
                this.stopDetect()
            }
            return eventData
        },
        stopDetect: function stopDetect() {
            this.previous = utils.extend({}, this.current);
            this.current = null;
            this.stopped = true
        },
        extendEventData: function extendEventData(ev) {
            var i, len, delta_time, delta_x, delta_y, velocity, startEv = this.current.startEvent;
            if (startEv && (ev.touches.length !== startEv.touches.length || ev.touches === startEv.touches)) {
                startEv.touches = [];
                for (i = 0, len = ev.touches.length; i < len; i += 1) {
                    startEv.touches.push(utils.extend({}, ev.touches[i]))
                }
            }
            delta_time = ev.timeStamp - startEv.timeStamp;
            delta_x = ev.center.pageX - startEv.center.pageX;
            delta_y = ev.center.pageY - startEv.center.pageY;
            velocity = utils.getVelocity(delta_time, delta_x, delta_y);
            utils.extend(ev, {
                deltaTime: delta_time,
                deltaX: delta_x,
                deltaY: delta_y,
                velocityX: velocity.x,
                velocityY: velocity.y,
                distance: utils.getDistance(startEv.center, ev.center),
                angle: utils.getAngle(startEv.center, ev.center),
                direction: utils.getDirection(startEv.center, ev.center),
                scale: 1,
                rotation: 0,
                startEvent: startEv
            });
            return ev
        },
        register: function register(gesture) {
            var options = gesture.defaults || {};
            if (options[gesture.name] === undefined) {
                options[gesture.name] = true
            }
            utils.extend(defaults, options, true);
            gesture.index = gesture.index || 1000;
            this.gestures.push(gesture);
            this.gestures.sort(function(a, b) {
                if (a.index < b.index) {
                    return -1
                }
                if (a.index > b.index) {
                    return 1
                }
                return 0
            });
            return this.gestures
        }
    };
    Gestures = Gestures || {};
    Gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: 0.7
        },
        handler: function swipeGesture(ev, inst) {
            if (ev.eventType === EVENT_END) {
                if (inst.options.swipe_max_touches > 0 && ev.touches.length > inst.options.swipe_max_touches) {
                    return
                }
                if (ev.velocityX > inst.options.swipe_velocity || ev.velocityY > inst.options.swipe_velocity) {
                    inst.trigger(this.name, ev);
                    inst.trigger(this.name + ev.direction, ev)
                }
            }
        }
    };
    Gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: false,
            drag_block_vertical: false,
            drag_lock_to_axis: false,
            drag_lock_min_distance: 25
        },
        triggered: false,
        handler: function dragGesture(ev, inst) {
            if (Detection.current.name !== this.name && this.triggered) {
                inst.trigger(this.name + "end", ev);
                this.triggered = false;
                return
            }
            if (inst.options.drag_max_touches > 0 && ev.touches.length > inst.options.drag_max_touches) {
                return
            }
            switch (ev.eventType) {
                case EVENT_START:
                    this.triggered = false;
                    break;
                case EVENT_MOVE:
                    if (ev.distance < inst.options.drag_min_distance && Detection.current.name !== this.name) {
                        return
                    }
                    Detection.current.name = this.name;
                    if (Detection.current.lastEvent.drag_locked_to_axis || (inst.options.drag_lock_to_axis && inst.options.drag_lock_min_distance <= ev.distance)) {
                        ev.drag_locked_to_axis = true
                    }
                    var last_direction = Detection.current.lastEvent.direction;
                    if (ev.drag_locked_to_axis && last_direction !== ev.direction) {
                        if (utils.isVertical(last_direction)) {
                            ev.direction = (ev.deltaY < 0) ? DIRECTION_UP : DIRECTION_DOWN
                        } else {
                            ev.direction = (ev.deltaX < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT
                        }
                    }
                    if (!this.triggered) {
                        inst.trigger(this.name + "start", ev);
                        this.triggered = true
                    }
                    inst.trigger(this.name, ev);
                    inst.trigger(this.name + ev.direction, ev);
                    if ((inst.options.drag_block_vertical && utils.isVertical(ev.direction)) || (inst.options.drag_block_horizontal && !utils.isVertical(ev.direction))) {
                        ev.preventDefault()
                    }
                    break;
                case EVENT_END:
                    if (this.triggered) {
                        inst.trigger(this.name + "end", ev)
                    }
                    this.triggered = false;
                    break
            }
        }
    }
}(SmartAccess.UI, SmartAccess));
(function(UI) {
    var Progressbar = {},
        CLASS_NAME_PROGRESS_BAR = "sa-progress-bar",
        CLASS_NAME_PROGRESS_TEXT = "sa-progress-text";
    UI.Progressbar = Progressbar;
    Progressbar.progress = function(element, value, caption) {
        value = String(value) + "%";
        caption = (!caption || caption.length < 0) ? value : caption;
        var i, len, barElements = element.getElementsByClassName(CLASS_NAME_PROGRESS_BAR),
            captionElements = element.getElementsByClassName(CLASS_NAME_PROGRESS_TEXT);
        for (i = 0, len = barElements.length; i < len; i += 1) {
            barElements[i].style.width = value
        }
        for (i = 0, len = captionElements.length; i < len; i += 1) {
            captionElements[i].innerHTML = caption
        }
    }
}(SmartAccess.UI));
(function(UI, SA) {
    var ScrollView = {};
    UI.ScrollView = ScrollView;
    ScrollView.setup = function(scrollview, options) {
        var correctContentHeight, initializeStyles, disableDraggingChildren, calculatePageOffsets, calculateSliderHeight, setVerticalPosition, getVerticalPosition, scrollTo, scrollUp, scrollDown, getIndex, setIndex, getContentHeight, setContentHeight, snapToOffset, diffFromSnapPoint, gesture = new UI.Gesture(scrollview),
            contentview = scrollview.getElementsByClassName("sa-scroll-body")[0],
            slider = scrollview.getElementsByClassName("sa-scroll-bar")[0],
            scrollUpBtn = scrollview.getElementsByClassName("sa-scroll-up")[0],
            scrollDownBtn = scrollview.getElementsByClassName("sa-scroll-down")[0],
            timerId = null,
            pageOffsets, dragstartPosition = 0,
            verticalPosition = 0,
            viewContentRatio = 0,
            snapDuration = 400,
            opts = options || {},
            pageIndex = opts.pageIndex || 0,
            viewHeight = opts.hasOwnProperty("viewHeight") ? opts.viewHeight : scrollview.offsetHeight,
            contentHeight = opts.hasOwnProperty("contentHeight") ? opts.contentHeight : contentview.offsetHeight,
            pageGap = opts.pageGap || 0,
            changeListener = opts.changeListener || null,
            changeListenerContext = opts.changeListenerContext || this,
            beforeScrollListener = opts.beforeScrollListener || null,
            beforeScrollListenerContext = opts.beforeScrollListenerContext || this,
            afterScrollListener = opts.afterScrollListener || null,
            afterScrollListenerContext = opts.afterScrollListenerContext || this,
            disableContentViewScroll = opts.disableContentViewScroll || false,
            disableContentViewScrollGesture = opts.disableContentViewScrollGesture || false;
        correctContentHeight = function(viewHeight, contentHeight, pageGap) {
            return (viewHeight + pageGap) * Math.floor((contentHeight + viewHeight + pageGap - 1) / (viewHeight + pageGap)) - pageGap
        };
        initializeStyles = function(scrollview, contentview) {
            scrollview.style.height = String(viewHeight) + "px";
            contentview.style.height = String(contentHeight) + "px"
        };
        disableDraggingChildren = function(scrollview) {
            scrollview.ondragstart = function() {
                return false
            }
        };
        calculatePageOffsets = function() {
            var i, offset = 0;
            pageOffsets = [];
            for (i = 0; true; i += 1) {
                offset = i * (viewHeight + pageGap);
                if (offset >= contentHeight + pageGap) {
                    break
                }
                pageOffsets.push(offset)
            }
        };
        calculateSliderHeight = function(slider) {
            if (contentHeight > 0) {
                viewContentRatio = viewHeight / contentHeight
            }
            slider.style.height = viewContentRatio * viewHeight + "px"
        };
        setVerticalPosition = function(newPosition) {
            verticalPosition = newPosition
        };
        getVerticalPosition = function() {
            return verticalPosition
        };
        scrollTo = function(newPosition, duration, easing) {
            var splitVal = contentview.style.WebkitTransform.split(",");
            var currentVal = 0;
            if (splitVal.length > 1) {
                var val = splitVal[1].match(/[0-9\-]+/);
                if (val != null) {
                    currentVal = parseInt(val[0], 10);
                    if (isNaN(currentVal)) {
                        currentVal = 0
                    }
                }
            } else {
                currentVal = 0
            }
            var transitionText = "-webkit-transform",
                durationText = String(duration || 0) + "ms",
                easingText = String(easing || "ease-out"),
                cssText = "translate(0px," + newPosition + "px)";
            if (!disableContentViewScroll) {
                contentview.style.WebkitTransitionProperty = transitionText;
                contentview.style.WebkitTransitionDuration = durationText;
                contentview.style.WebkitTransitionTimingFunction = easingText;
                contentview.style.WebkitTransform = cssText
            }
            cssText = "translate(0px," + newPosition * viewContentRatio * -1 + "px)";
            slider.style.WebkitTransitionProperty = transitionText;
            slider.style.WebkitTransitionDuration = durationText;
            slider.style.WebkitTransitionTimingFunction = easingText;
            slider.style.WebkitTransform = cssText;
            if (newPosition == currentVal) {
                if (afterScrollListener) {
                    afterScrollListener.call(afterScrollListenerContext, pageIndex)
                }
            }
        };
        scrollUp = function() {
            setIndex(pageIndex - 1)
        };
        scrollDown = function() {
            setIndex(pageIndex + 1)
        };
        getIndex = function() {
            return pageIndex
        };
        setIndex = function(index, animate) {
            if (animate === undefined) {
                animate = true
            }
            if (index >= 0 && index < pageOffsets.length) {
                pageIndex = index;
                if (beforeScrollListener) {
                    beforeScrollListener.call(beforeScrollListenerContext, pageIndex)
                }
                scrollTo(-pageOffsets[pageIndex], animate ? snapDuration : 0);
                if (changeListener) {
                    changeListener.call(changeListenerContext, pageIndex)
                }
            }
            if (pageIndex <= 0) {
                scrollUpBtn.classList.add("sa-disable")
            } else {
                scrollUpBtn.classList.remove("sa-disable")
            }
            if (pageIndex >= pageOffsets.length - 1) {
                scrollDownBtn.classList.add("sa-disable")
            } else {
                scrollDownBtn.classList.remove("sa-disable")
            }
        };
        getContentHeight = function() {
            return contentHeight
        };
        setContentHeight = function(newContentHeight) {
            contentHeight = correctContentHeight(viewHeight, newContentHeight, pageGap);
            initializeStyles(scrollview, contentview);
            calculatePageOffsets();
            calculateSliderHeight(slider)
        };
        snapToOffset = function(currentPosition) {
            var i, len, minDiff, diff, newPageIndex, newPosition;
            newPageIndex = pageIndex;
            minDiff = Number.MAX_VALUE;
            for (i = 0, len = pageOffsets.length; i < len; i += 1) {
                diff = Math.abs(currentPosition + pageOffsets[i]);
                if (diff < minDiff) {
                    minDiff = diff;
                    newPageIndex = i
                }
            }
            pageIndex = newPageIndex;
            newPosition = -pageOffsets[pageIndex];
            scrollTo(newPosition, snapDuration);
            setVerticalPosition(newPosition)
        };
        diffFromSnapPoint = function(currentPosition) {
            var i, len, minDiff, diff, newPageIndex;
            newPageIndex = pageIndex;
            minDiff = Number.MAX_VALUE;
            for (i = 0, len = pageOffsets.length; i < len; i += 1) {
                diff = Math.abs(currentPosition + pageOffsets[i]);
                if (diff < minDiff) {
                    minDiff = diff;
                    newPageIndex = i
                }
            }
            return (currentPosition + pageOffsets[newPageIndex])
        };
        contentHeight = correctContentHeight(viewHeight, contentHeight, pageGap);
        initializeStyles(scrollview, contentview);
        disableDraggingChildren(scrollview);
        calculatePageOffsets();
        calculateSliderHeight(slider);
        if (!disableContentViewScrollGesture) {
            gesture.on("swipe", function(event) {
                switch (event.gesture.direction) {
                    case "down":
                        scrollUp();
                        break;
                    case "up":
                        scrollDown();
                        break;
                    default:
                        break
                }
            })
        }
        var transitionEndListener = function(event) {
            if (event.propertyName == "-webkit-transform" || event.propertyName == "transform") {
                if (afterScrollListener) {
                    afterScrollListener.call(afterScrollListenerContext, pageIndex)
                }
            }
        };
        contentview.addEventListener("oTransitionEnd", transitionEndListener);
        contentview.addEventListener("mozTransitionEnd", transitionEndListener);
        contentview.addEventListener("webkitTransitionEnd", transitionEndListener);
        contentview.addEventListener("transitionend", transitionEndListener);
        if (pageIndex < 0) {
            pageIndex = 0
        }
        if (pageOffsets.length <= pageIndex) {
            pageIndex = pageOffsets.length - 1
        }
        setIndex(pageIndex, false);
        scrollUpBtn.addEventListener("click", function(event) {
            event.preventDefault();
            scrollUp()
        });
        scrollDownBtn.addEventListener("click", function(event) {
            event.preventDefault();
            scrollDown()
        });
        return {
            getIndex: getIndex,
            setIndex: setIndex,
            getContentHeight: getContentHeight,
            setContentHeight: setContentHeight,
            scrollUp: scrollUp,
            scrollDown: scrollDown
        }
    }
}(SmartAccess.UI, SmartAccess));
(function(UI, SA, d) {
    var Spinner = {},
        body = null,
        spinner = null,
        CLASS_NAME_CONTAINER = "sa-spinner",
        CLASS_NAME_INNER = "sa-spinner-img";
    UI.Spinner = Spinner;
    Spinner.show = function(options) {
        options = options || {};
        var img, zIndex = options.zIndex || "auto";
        body = body || d.getElementsByTagName("body")[0];
        if (!spinner) {
            spinner = d.createElement("div");
            spinner.classList.add(CLASS_NAME_CONTAINER);
            img = d.createElement("div");
            img.classList.add(CLASS_NAME_INNER);
            spinner.appendChild(img)
        }
        spinner.style.zIndex = zIndex;
        body.appendChild(spinner)
    };
    Spinner.hide = function() {
        if (body && spinner) {
            body.removeChild(spinner)
        }
    }
}(SmartAccess.UI, SmartAccess, document));
(function(UI, d) {
    var Tenkey = {},
        container = null,
        overlay = null,
        popup = null,
        data = "",
        cursor = 0,
        cancelListenerInternal = null,
        okListenerInternal = null,
        MAX_LENGTH = 24;
    UI.Tenkey = Tenkey;

    function updateDisplay() {
        var i, len, buffer = "",
            display = popup.getElementsByClassName("sa-display")[0];
        for (i = 0, len = data.length; i < len; i += 1) {
            if (cursor === i) {
                buffer += '<span class="sa-cursor">'
            } else {
                buffer += "<span>"
            }
            buffer += data[i] + "</span>"
        }
        if (cursor === data.length) {
            buffer += '<span class="sa-cursor"></span>'
        }
        display.innerHTML = buffer
    }

    function prevKeyListener(event) {
        event.preventDefault();
        cursor -= 1;
        if (cursor < 0) {
            cursor = 0
        }
        updateDisplay()
    }

    function nextKeyListener(event) {
        event.preventDefault();
        cursor += 1;
        if (cursor > data.length) {
            cursor = data.length
        }
        if (cursor > MAX_LENGTH) {
            cursor = MAX_LENGTH
        }
        updateDisplay()
    }

    function numKeyListener(event) {
        var insertPosition = cursor,
            input = event.currentTarget.getAttribute("data-input");
        event.preventDefault();
        if (insertPosition >= 0 && insertPosition <= data.length) {
            data = data.substring(0, insertPosition).concat(input, data.substring(insertPosition, data.length));
            cursor += 1;
            if (cursor > MAX_LENGTH) {
                data = data.substr(0, MAX_LENGTH + 1);
                cursor = MAX_LENGTH
            }
        }
        updateDisplay()
    }

    function delKeyListener(event) {
        var deletePosition = cursor - 1;
        event.preventDefault();
        if (deletePosition >= 0 && deletePosition < data.length) {
            data = data.substring(0, deletePosition).concat(data.substring(deletePosition + 1, data.length));
            cursor -= 1
        }
        updateDisplay()
    }

    function cancelKeyListener(event) {
        event.preventDefault();
        if (cancelListenerInternal) {
            cancelListenerInternal.call(Tenkey)
        }
        Tenkey.hide()
    }

    function okKeyListener(event) {
        event.preventDefault();
        if (okListenerInternal) {
            okListenerInternal.call(Tenkey, data)
        }
        Tenkey.hide()
    }
    Tenkey.show = function(template, title, onInput, onCancel, initialValue, zIndex) {
        var i, len, numKeys, prevKey, nextKey, delKey, cancelKey, okKey;
        title = (!title || title.length === 0) ? "" : title;
        data = (!initialValue || initialValue.length === 0) ? "" : initialValue;
        zIndex = (!zIndex && zIndex !== 0) ? "auto" : String(zIndex);
        data = data.substr(0, MAX_LENGTH + 1);
        cursor = data.length;
        okListenerInternal = onInput;
        cancelListenerInternal = onCancel;
        container = container || d.getElementsByClassName("sa-container")[0];
        if (!overlay) {
            overlay = d.createElement("div");
            overlay.classList.add("sa-popup-overlay")
        }
        if (!popup) {
            popup = d.createElement("article");
            popup.classList.add("sa-popup");
            popup.innerHTML = template;
            numKeys = popup.getElementsByClassName("sa-key-num");
            for (i = 0, len = numKeys.length; i < len; i += 1) {
                numKeys[i].addEventListener("click", numKeyListener)
            }
            prevKey = popup.getElementsByClassName("sa-key-prev")[0];
            prevKey.addEventListener("click", prevKeyListener);
            nextKey = popup.getElementsByClassName("sa-key-next")[0];
            nextKey.addEventListener("click", nextKeyListener);
            delKey = popup.getElementsByClassName("sa-key-del")[0];
            delKey.addEventListener("click", delKeyListener);
            cancelKey = popup.getElementsByClassName("sa-icon-button-close")[0];
            cancelKey.addEventListener("click", cancelKeyListener);
            okKey = popup.getElementsByClassName("sa-key-ok")[0];
            okKey.addEventListener("click", okKeyListener)
        }
        overlay.style.zIndex = zIndex;
        popup.style.zIndex = zIndex;
        popup.getElementsByClassName("sa-title")[0].textContent = title;
        updateDisplay();
        container.appendChild(overlay);
        container.appendChild(popup)
    };
    Tenkey.hide = function() {
        if (container) {
            if (popup) {
                container.removeChild(popup)
            }
            if (overlay) {
                container.removeChild(overlay)
            }
        }
    }
}(SmartAccess.UI, document));
SmartAccess.Simulator = SmartAccess.Simulator || {};
(function(Simulator, SA) {
    var Config, data, storageKey;
    Config = {};
    Simulator.Config = Config;
    data = {};
    storageKey = "SmartAccess.Simulator.Config";
    Config.load = function() {
        data = SA.Storage.load(storageKey) || {}
    };
    Config.save = function() {
        SA.Storage.store(storageKey, data)
    };
    Config.exportData = function() {
        Config.load();
        try {
            return JSON.stringify(data)
        } catch (exception) {
            return ""
        }
    };
    Config.importData = function(exportedData) {
        try {
            data = JSON.parse(exportedData)
        } catch (exception) {
            data = {}
        }
        Config.save()
    };
    Config.getNamespace = function(namespaceName) {
        data[namespaceName] = data[namespaceName] || {};
        return data[namespaceName]
    };
    Config.getMethod = function(namespaceName, methodName) {
        var namespace = Config.getNamespace(namespaceName);
        namespace.methods = namespace.methods || {};
        if (namespace.methods[methodName] === undefined) {
            namespace.methods[methodName] = {}
        }
        return namespace.methods[methodName]
    };
    Config.isSupport = function(namespaceName, methodName) {
        var method = Config.getMethod(namespaceName, methodName);
        if (method.isSupport === undefined) {
            method.isSupport = true
        }
        return method.isSupport
    };
    Config.setSupport = function(namespaceName, methodName, enable) {
        var method = Config.getMethod(namespaceName, methodName);
        method.isSupport = enable
    };
    Config.getReturnValues = function(namespaceName, methodName) {
        var method = Config.getMethod(namespaceName, methodName);
        if (method.returns === undefined) {
            method.returns = {}
        }
        return method.returns
    };
    Config.addReturnValue = function(namespaceName, methodName, returnKey, returnValue) {
        Config.getReturnValues(namespaceName, methodName)[returnKey] = returnValue
    };
    Config.removeReturnValue = function(namespaceName, methodName, returnKey) {
        delete Config.getReturnValues(namespaceName, methodName)[returnKey]
    };
    Config.getThrowableException = function(namespaceName, methodName) {
        var method = Config.getMethod(namespaceName, methodName);
        if (method.exception === undefined) {
            method.exception = ""
        }
        return method.exception
    };
    Config.setThrowableException = function(namespaceName, methodName, throwableException) {
        var method = Config.getMethod(namespaceName, methodName);
        method.exception = throwableException
    };
    Config.getEvent = function(namespaceName, eventName) {
        var namespace = Config.getNamespace(namespaceName);
        namespace.events = namespace.events || {};
        if (namespace.events[eventName] === undefined) {
            namespace.events[eventName] = {}
        }
        return namespace.events[eventName]
    };
    Config.getEventData = function(namespaceName, eventName) {
        var event = Config.getEvent(namespaceName, eventName);
        if (event.data === undefined) {
            event.data = {}
        }
        return event.data
    };
    Config.addEventData = function(namespaceName, eventName, dataKey, dataValue) {
        Config.getEventData(namespaceName, eventName)[dataKey] = dataValue
    };
    Config.removeEventData = function(namespaceName, eventName, dataKey) {
        delete Config.getEventData(namespaceName, eventName)[dataKey]
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var Messenger = {};
    Simulator.Messenger = Messenger;
    Messenger.saveMethodConfig = function(notification) {
        var namespace, method, data, key;
        namespace = notification.namespace;
        method = notification.method;
        data = notification.data || {};
        SA.Simulator.Config.setSupport(namespace, method, data.isSupport);
        for (key in data.returns) {
            if (data.returns.hasOwnProperty(key)) {
                SA.Simulator.Config.addReturnValue(namespace, method, key, data.returns[key])
            }
        }
        SA.Simulator.Config.setThrowableException(namespace, method, data.exception);
        SA.Simulator.Config.save()
    };
    Messenger.listen = function(dispatchEvent, saveMethodConfig, updatePolicy) {
        Messenger.listenResponse();
        Messenger.listenRequest(function(request, callback) {
            var notification = request,
                data = [];
            switch (request.action) {
                case "fireEvent":
                    switch (notification.namespace) {
                        case "System":
                            switch (notification.event) {
                                case SA.System.EVENT_REVERSE:
                                    data.push(notification.data.isReverse);
                                    break;
                                case SA.System.EVENT_QUICK_START:
                                    data.push(notification.data.applicationId);
                                    break
                            }
                            break;
                        case "Navigator":
                            switch (notification.event) {
                                case SA.Navigator.EVENT_DESTINATION:
                                    data.push(new SA.Navigator.Location(new SA.Navigator.Position(notification.data.lat, notification.data.lon), notification.data.name));
                                    break;
                                case SA.Navigator.EVENT_WAYPOINT:
                                    data.push(notification.data.index);
                                    data.push(new SA.Navigator.Location(new SA.Navigator.Position(notification.data.lat, notification.data.lon), notification.data.name));
                                    break;
                                case SA.Navigator.EVENT_ALARM:
                                    data.push(notification.data.index);
                                    break
                            }
                            break;
                        case "Phone":
                            switch (notification.event) {
                                case SA.Phone.EVENT_CALL_STATUS:
                                    data.push(notification.data.callStatus);
                                    break
                            }
                            break;
                        case "Audio":
                            switch (notification.event) {
                                case SA.Audio.EVENT_AUDIO_SOURCE:
                                    data.push(notification.data.hasAudioSource);
                                    break
                            }
                            break;
                        case "VoiceInput":
                            switch (notification.event) {
                                case SA.VoiceInput.EVENT_DATA:
                                    data.push(notification.data.status);
                                    data.push(notification.data.data);
                                    data.push(notification.data.length);
                                    break
                            }
                            break;
                        case "Browser":
                            switch (notification.event) {
                                case SA.Browser.EVENT_FOCUS:
                                    data.push(notification.data.hasFocus);
                                    break;
                                case SA.Browser.EVENT_REGULATION:
                                    data.push(notification.data.regulationMode);
                                    break;
                                case SA.Browser.EVENT_ILLUMINATION:
                                    data.push(notification.data.illuminationMode);
                                    break
                            }
                            break
                    }
                    notification.data = data;
                    dispatchEvent(notification || {});
                    callback("event dispatched.");
                    break;
                case "updateMethodConfig":
                    saveMethodConfig(notification || {});
                    callback("method config updated.");
                    break;
                case "updatePolicy":
                    updatePolicy((notification || {}).policyData || "");
                    callback("policy updated.");
                    break
            }
        });
        Messenger.sendRequest({
            action: "addConfigListener"
        }, function(response) {
            console.log("listening requests from BACKGROUND...");
            if (response) {
                if (response.hasOwnProperty("policyData")) {
                    SA.Policy.importData(response.policyData)
                }
                if (response.hasOwnProperty("configData")) {
                    SA.Simulator.Config.importData(response.configData)
                }
            }
        })
    };
    Messenger.listenRequest = function(callback) {
        window.addEventListener("message", function(event) {
            var data = event.data || {},
                wrappedRequest = data.request || {},
                requestId = wrappedRequest.requestId,
                request = wrappedRequest.request || {};
            if (data.type !== "REQUEST" || data.from !== "EXTENSION") {
                return
            }
            callback.apply(Messenger, [request, function(response) {
                window.postMessage({
                    type: "RESPONSE",
                    from: "WEB_PAGE",
                    response: {
                        requestId: requestId,
                        response: response
                    }
                }, "*")
            }])
        }, false)
    };
    var requestId = 0,
        callbacks = {};
    Messenger.listenResponse = function() {
        window.addEventListener("message", function(event) {
            var data = event.data || {},
                wrappedResponse = data.response || {},
                requestId = wrappedResponse.requestId,
                response = wrappedResponse.response,
                callback = callbacks[requestId];
            if (data.type !== "RESPONSE" || data.from !== "EXTENSION") {
                return
            }
            if (callback) {
                delete callbacks[requestId];
                callback.apply(Messenger, [response])
            }
        }, false)
    };
    Messenger.sendRequest = function(request, callback) {
        requestId += 1;
        var wrappedRequest = {
            requestId: requestId,
            request: request
        };
        callbacks[requestId] = callback;
        window.postMessage({
            type: "REQUEST",
            from: "WEB_PAGE",
            request: wrappedRequest
        }, "*")
    };
    Messenger.sendTraceLog = function(namespace, method, args) {
        var i, len, argsText, traceLog;
        args = Array.prototype.slice.call(args);
        for (i = 0, len = args.length; i < len; i += 1) {
            if (typeof args[i] === "function") {
                args[i] = String(args[i])
            }
        }
        try {
            argsText = JSON.stringify(args)
        } catch (exception) {
            argsText = ""
        }
        traceLog = namespace + "#" + method + ": " + argsText;
        Messenger.sendRequest({
            action: "appendTraceLog",
            data: {
                log: traceLog
            }
        }, function() {
            console.log(traceLog)
        })
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var SystemDelegate = function() {};
    Simulator.SystemDelegate = SystemDelegate;
    SystemDelegate.instance = null;
    SystemDelegate.getInstance = function() {
        if (!SystemDelegate.instance) {
            SystemDelegate.instance = new SystemDelegate()
        }
        return SystemDelegate.instance
    };
    SystemDelegate.prototype.isSupported = function(namespace, methodName) {
        if (!SA.System.functionIds[namespace] || !SA.System.functionIds[namespace][methodName]) {
            return false
        }
        return SA.Simulator.Config.isSupport(namespace, methodName)
    };
    SystemDelegate.prototype.beep = function(pattern) {
        if (!SA.Simulator.Config.isSupport("System", "beep")) {
            throw new SA.NoSupportException("beep is not supported")
        }
        SA.Simulator.Messenger.sendRequest({
            action: "beep",
            data: {
                pattern: pattern
            }
        })
    };
    SystemDelegate.prototype.getCredential = function(level, time) {
        if (!SA.Simulator.Config.isSupport("System", "getCredential")) {
            throw new SA.NoSupportException("getCredential is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "getCredential").cookie
    };
    SystemDelegate.prototype.getAspectRatio = function() {
        if (!SA.Simulator.Config.isSupport("System", "getAspectRatio")) {
            return new SA.System.AspectRatio(800, 480, 16, 9)
        }
        return new SA.System.AspectRatio(SA.Simulator.Config.getReturnValues("System", "getAspectRatio").pixelV, SA.Simulator.Config.getReturnValues("System", "getAspectRatio").pixelH, SA.Simulator.Config.getReturnValues("System", "getAspectRatio").sizeV, SA.Simulator.Config.getReturnValues("System", "getAspectRatio").sizeH)
    };
    SystemDelegate.prototype.updateScreenMode = function(screenMode) {
        if (!SA.Simulator.Config.isSupport("System", "updateScreenMode")) {
            throw new SA.NoSupportException("updateScreenMode is not supported")
        }
        SA.Simulator.Messenger.sendRequest({
            action: "updateScreenMode",
            data: {
                screenMode: screenMode
            }
        })
    };
    SystemDelegate.prototype.getDrivingRegulation = function() {
        if (!SA.Simulator.Config.isSupport("System", "getDrivingRegulation")) {
            throw new SA.NoSupportException("getDrivingRegulation is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "getDrivingRegulation").regulationMode
    };
    SystemDelegate.prototype.getIlluminationStatus = function() {
        if (!SA.Simulator.Config.isSupport("System", "getIlluminationStatus")) {
            throw new SA.NoSupportException("getIlluminationStatus is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "getIlluminationStatus").illuminationMode
    };
    SystemDelegate.prototype.isReverse = function() {
        if (!SA.Simulator.Config.isSupport("System", "isReverse")) {
            throw new SA.NoSupportException("isReverse is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "isReverse").isReverse
    };
    SystemDelegate.prototype.getSpeed = function() {
        if (!SA.Simulator.Config.isSupport("System", "getSpeed")) {
            throw new SA.NoSupportException("getSpeed is not supported")
        }
        switch (SA.Simulator.Config.getThrowableException("System", "getSpeed")) {
            case "SmartAccess.NoDataException":
                throw new SA.NoDataException("getSpeed is not available")
        }
        return SA.Simulator.Config.getReturnValues("System", "getSpeed").speed
    };
    SystemDelegate.prototype.getLocale = function() {
        if (!SA.Simulator.Config.isSupport("System", "getLocale")) {
            throw new SA.NoSupportException("getLocale is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "getLocale").locale
    };
    SystemDelegate.prototype.getNaviLog = function() {
        if (!SA.Simulator.Config.isSupport("System", "getNaviLog")) {
            throw new SA.NoSupportException("getNaviLog is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "getNaviLog").naviLog
    };
    SystemDelegate.prototype.deleteNaviLog = function() {
        if (!SA.Simulator.Config.isSupport("System", "deleteNaviLog")) {
            throw new SA.NoSupportException("deleteNaviLog is not supported")
        }
        SA.Simulator.Messenger.sendRequest({
            action: "deleteNaviLog"
        })
    };
    SystemDelegate.prototype.appendLog = function(log) {
        if (!SA.Simulator.Config.isSupport("System", "appendLog")) {
            throw new SA.NoSupportException("appendLog is not supported")
        }
        SA.Simulator.Messenger.sendRequest({
            action: "appendLog",
            data: {
                log: log
            }
        })
    };
    SystemDelegate.prototype.getLog = function() {
        if (!SA.Simulator.Config.isSupport("System", "getLog")) {
            throw new SA.NoSupportException("getLog is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "getLog").log
    };
    SystemDelegate.prototype.deleteLog = function() {
        if (!SA.Simulator.Config.isSupport("System", "deleteLog")) {
            throw new SA.NoSupportException("deleteLog is not supported")
        }
        SA.Simulator.Messenger.sendRequest({
            action: "deleteLog"
        })
    };
    SystemDelegate.prototype.getVersion = function() {
        if (!SA.Simulator.Config.isSupport("System", "getVersion")) {
            throw new SA.NoSupportException("getVersion is not supported")
        }
        return SA.Simulator.Config.getReturnValues("System", "getVersion").version
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var NavigatorDelegate = function(nnapi) {
        this.nnapi = nnapi
    };
    Simulator.NavigatorDelegate = NavigatorDelegate;
    NavigatorDelegate.instance = null;
    NavigatorDelegate.getInstance = function() {
        if (!NavigatorDelegate.instance) {
            NavigatorDelegate.instance = new NavigatorDelegate(SA.getNaviNativeAPI())
        }
        return NavigatorDelegate.instance
    };
    NavigatorDelegate.prototype.getCarPosition = function() {
        var returns;
        if (!Simulator.Config.isSupport("Navigator", "getCarPosition")) {
            throw new SA.NoSupportException("getCarPosition is not supported")
        }
        returns = Simulator.Config.getReturnValues("Navigator", "getCarPosition");
        return new SA.Navigator.CarPosition(new SA.Navigator.Position(returns.lat, returns.lon), returns.direction)
    };
    NavigatorDelegate.prototype.getDatum = function() {
        if (!Simulator.Config.isSupport("Navigator", "getDatum")) {
            throw new SA.NoSupportException("getDatum is not supported")
        }
        return Simulator.Config.getReturnValues("Navigator", "getDatum").datum
    };
    NavigatorDelegate.prototype.getRoad = function() {
        var returns;
        if (!Simulator.Config.isSupport("Navigator", "getRoad")) {
            throw new SA.NoSupportException("getRoad is not supported")
        }
        returns = Simulator.Config.getReturnValues("Navigator", "getRoad");
        return new SA.Navigator.Road(returns.roadType, returns.name)
    };
    NavigatorDelegate.prototype.getDestination = function() {
        var returns;
        if (!Simulator.Config.isSupport("Navigator", "getDestination")) {
            throw new SA.NoSupportException("getDestination is not supported")
        }
        returns = Simulator.Config.getReturnValues("Navigator", "getDestination");
        return new SA.Navigator.Location(new SA.Navigator.Position(returns.lat, returns.lon), returns.name)
    };
    NavigatorDelegate.prototype.getWaypoint = function(index) {
        var returns;
        if (!Simulator.Config.isSupport("Navigator", "getWaypoint")) {
            throw new SA.NoSupportException("getWaypoint is not supported")
        }
        returns = Simulator.Config.getReturnValues("Navigator", "getWaypoint");
        return new SA.Navigator.Location(new SA.Navigator.Position(returns["lat-" + index], returns["lon-" + index]), returns["name-" + index])
    };
    NavigatorDelegate.prototype.getGeoName = function() {
        var returns;
        if (!Simulator.Config.isSupport("Navigator", "getGeoName")) {
            throw new SA.NoSupportException("getGeoName is not supported")
        }
        returns = Simulator.Config.getReturnValues("Navigator", "getGeoName");
        return new SA.Navigator.GeographicName(returns.name, returns.prefId)
    };
    NavigatorDelegate.prototype.getRouteInfo = function() {
        var returns;
        if (!Simulator.Config.isSupport("Navigator", "getRouteInfo")) {
            throw new SA.NoSupportException("getRouteInfo is not supported")
        }
        returns = Simulator.Config.getReturnValues("Navigator", "getRouteInfo");
        return new SA.Navigator.RouteInfo(returns.exist, returns.distance, returns.requiredTime)
    };
    NavigatorDelegate.prototype.getRoutePriority = function() {
        if (!Simulator.Config.isSupport("Navigator", "getRoutePriority")) {
            throw new SA.NoSupportException("getRoutePriority is not supported")
        }
        return Simulator.Config.getReturnValues("Navigator", "getRoutePriority").priority
    };
    NavigatorDelegate.prototype.getMapDirection = function() {
        if (!Simulator.Config.isSupport("Navigator", "getMapDirection")) {
            throw new SA.NoSupportException("getMapDirection is not supported")
        }
        switch (Simulator.Config.getThrowableException("Navigator", "getMapDirection")) {
            case "SmartAccess.Navigator.ScreenModeException":
                throw new SA.NoDataException("screen mode is invalid.")
        }
        return Simulator.Config.getReturnValues("Navigator", "getMapDirection").direction
    };
    NavigatorDelegate.prototype.isDestinationInitializable = function() {
        if (!Simulator.Config.isSupport("Navigator", "isDestinationInitializable")) {
            throw new SA.NoSupportException("isDestinationInitializable is not supported")
        }
        return Simulator.Config.getReturnValues("Navigator", "isDestinationInitializable").initializable
    };
    NavigatorDelegate.prototype.isWaypointInitializable = function() {
        if (!Simulator.Config.isSupport("Navigator", "isWaypointInitializable")) {
            throw new SA.NoSupportException("isWaypointInitializable is not supported")
        }
        return Simulator.Config.getReturnValues("Navigator", "isWaypointInitializable").initializable
    };
    NavigatorDelegate.prototype.isLocationRegisterable = function() {
        if (!Simulator.Config.isSupport("Navigator", "isLocationRegisterable")) {
            throw new SA.NoSupportException("isLocationRegisterable is not supported")
        }
        return Simulator.Config.getReturnValues("Navigator", "isLocationRegisterable").registerable
    };
    NavigatorDelegate.prototype.getAlarmInfos = function() {
        var infos, returns, index, distance, i;
        if (!Simulator.Config.isSupport("Navigator", "getAlarmInfos")) {
            throw new SA.NoSupportException("getAlarmInfos is not supported")
        }
        returns = Simulator.Config.getReturnValues("Navigator", "getAlarmInfos");
        infos = [];
        for (i = 0; true; i += 1) {
            index = returns["index" + i];
            distance = returns["distance" + i];
            if (index !== undefined && index !== "" && distance !== undefined && distance !== "") {
                infos.push(new SA.Navigator.AlarmInfo(index, distance))
            } else {
                break
            }
        }
        return infos
    };
    NavigatorDelegate.prototype.updateDatum = function(datum) {
        if (!Simulator.Config.isSupport("Navigator", "updateDatum")) {
            throw new SA.NoSupportException("updateDatum is not supported")
        }
        Simulator.Messenger.sendRequest({
            action: "updateDatum",
            data: {
                datum: datum
            }
        })
    };
    NavigatorDelegate.prototype.setCruiseMode = function() {
        if (!Simulator.Config.isSupport("Navigator", "setCruiseMode")) {
            throw new SA.NoSupportException("setCruiseMode is not supported")
        }
        switch (Simulator.Config.getThrowableException("Navigator", "setCruiseMode")) {
            case "SmartAccess.Navigator.ScreenModeException":
                throw new SA.NoDataException("screen mode is invalid.")
        }
        Simulator.Messenger.sendRequest({
            action: "setCruiseMode"
        })
    };
    NavigatorDelegate.prototype.updateMapGeometry = function(offsetX, position, scale) {
        if (!Simulator.Config.isSupport("Navigator", "updateMapGeometry")) {
            throw new SA.NoSupportException("updateMapGeometry is not supported")
        }
        switch (Simulator.Config.getThrowableException("Navigator", "updateMapGeometry")) {
            case "SmartAccess.Navigator.ScreenModeException":
                throw new SA.NoDataException("screen mode is invalid.")
        }
        Simulator.Messenger.sendRequest({
            action: "updateMapGeometry",
            data: {
                offsetX: offsetX,
                lon: position.lon,
                lat: position.lat,
                scale: scale
            }
        })
    };
    NavigatorDelegate.prototype.initializeDestination = function(location) {
        if (!Simulator.Config.isSupport("Navigator", "initializeDestination")) {
            throw new SA.NoSupportException("initializeDestination is not supported")
        }
        switch (Simulator.Config.getThrowableException("Navigator", "initializeDestination")) {
            case "SmartAccess.Navigator.NotInitializableException":
                throw new SA.Navigator.NotInitializableException("initializeDestination is not allowed.")
        }
        Simulator.Messenger.sendRequest({
            action: "initializeDestination",
            data: {
                lon: location.position.lon,
                lat: location.position.lat,
                name: location.name
            }
        })
    };
    NavigatorDelegate.prototype.initializeWaypoint = function(location) {
        if (!Simulator.Config.isSupport("Navigator", "initializeWaypoint")) {
            throw new SA.NoSupportException("initializeWaypoint is not supported")
        }
        switch (Simulator.Config.getThrowableException("Navigator", "initializeWaypoint")) {
            case "SmartAccess.Navigator.NotInitializableException":
                throw new SA.Navigator.NotInitializableException("initializeWaypoint is not allowed.")
        }
        Simulator.Messenger.sendRequest({
            action: "initializeWaypoint",
            data: {
                lon: location.position.lon,
                lat: location.position.lat,
                name: location.name
            }
        })
    };
    NavigatorDelegate.prototype.registerLocation = function(location, direction) {
        if (!Simulator.Config.isSupport("Navigator", "registerLocation")) {
            throw new SA.NoSupportException("registerLocation is not supported")
        }
        switch (Simulator.Config.getThrowableException("Navigator", "registerLocation")) {
            case "SmartAccess.Navigator.NotRegisterableException":
                throw new SA.Navigator.NotRegisterableException("registerLocation is not allowed.")
        }
        Simulator.Messenger.sendRequest({
            action: "registerLocation",
            data: {
                lon: location.position.lon,
                lat: location.position.lat,
                name: location.name
            }
        })
    };
    NavigatorDelegate.prototype.registerMapIcon = function(index, location, iconType, iconListType) {
        if (!Simulator.Config.isSupport("Navigator", "registerMapIcon")) {
            throw new SA.NoSupportException("registerMapIcon is not supported")
        }
        switch (Simulator.Config.getThrowableException("Navigator", "registerMapIcon")) {
            case "SmartAccess.Navigator.UnknownIconException":
                throw new SA.Navigator.UnknownIconException("iconType is unknown.", iconType);
            case "SmartAccess.Navigator.UnknownIconListException":
                throw new SA.Navigator.UnknownIconListException("iconListType is unknown.", iconListType)
        }
        Simulator.Messenger.sendRequest({
            action: "registerMapIcon",
            data: {
                index: index,
                lon: location.position.lon,
                lat: location.position.lat,
                name: location.name,
                iconType: iconType,
                iconListType: iconListType
            }
        })
    };
    NavigatorDelegate.prototype.deregisterAllMapIcons = function() {
        if (!Simulator.Config.isSupport("Navigator", "deregisterAllMapIcons")) {
            throw new SA.NoSupportException("deregisterAllMapIcons is not supported")
        }
        Simulator.Messenger.sendRequest({
            action: "deregisterAllMapIcons"
        })
    };
    NavigatorDelegate.prototype.showMapIcons = function() {
        if (!Simulator.Config.isSupport("Navigator", "showMapIcons")) {
            throw new SA.NoSupportException("showMapIcons is not supported")
        }
        Simulator.Messenger.sendRequest({
            action: "showMapIcons"
        })
    };
    NavigatorDelegate.prototype.hideMapIcons = function() {
        if (!Simulator.Config.isSupport("Navigator", "hideMapIcons")) {
            throw new SA.NoSupportException("hideMapIcons is not supported")
        }
        Simulator.Messenger.sendRequest({
            action: "hideMapIcons"
        })
    };
    NavigatorDelegate.prototype.registerAlarm = function(index, position, direction, distance, alarmId) {
        if (!Simulator.Config.isSupport("Navigator", "registerAlarm")) {
            throw new SA.NoSupportException("registerAlarm is not supported")
        }
        Simulator.Messenger.sendRequest({
            action: "registerAlarm",
            data: {
                index: index,
                lon: position.lon,
                lat: position.lat,
                direction: direction,
                distance: distance,
                alarmId: alarmId
            }
        })
    };
    NavigatorDelegate.prototype.deregisterAllAlarms = function() {
        if (!Simulator.Config.isSupport("Navigator", "deregisterAllAlarms")) {
            throw new SA.NoSupportException("deregisterAllAlarms is not supported")
        }
        Simulator.Messenger.sendRequest({
            action: "deregisterAllAlarms"
        })
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var PhoneDelegate = function() {};
    Simulator.PhoneDelegate = PhoneDelegate;
    PhoneDelegate.instance = null;
    PhoneDelegate.getInstance = function() {
        if (!PhoneDelegate.instance) {
            PhoneDelegate.instance = new PhoneDelegate()
        }
        return PhoneDelegate.instance
    };
    PhoneDelegate.prototype.getCallStatus = function() {
        if (!SA.Simulator.Config.isSupport("Phone", "getCallStatus")) {
            throw new SA.NoSupportException("getCallStatus is not supported")
        }
        return SA.Simulator.Config.getReturnValues("Phone", "getCallStatus").callStatus
    };
    PhoneDelegate.prototype.makePhoneCall = function(phoneNumber) {
        if (!SA.Simulator.Config.isSupport("Phone", "makePhoneCall")) {
            throw new SA.NoSupportException("makePhoneCall is not supported")
        }
    };
    PhoneDelegate.prototype.receivePhoneCall = function() {
        if (!SA.Simulator.Config.isSupport("Phone", "receivePhoneCall")) {
            throw new SA.NoSupportException("receivePhoneCall is not supported")
        }
    };
    PhoneDelegate.prototype.getPhoneStatuses = function() {
        if (!SA.Simulator.Config.isSupport("Phone", "getPhoneStatuses")) {
            throw new SA.NoSupportException("getPhoneStatuses is not supported")
        }
        return new SA.Phone.PhoneStatuses(SA.Simulator.Config.getReturnValues("Phone", "getPhoneStatuses").batteryStatus, SA.Simulator.Config.getReturnValues("Phone", "getPhoneStatuses").fiStatus)
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var AudioDelegate = function() {};
    Simulator.AudioDelegate = AudioDelegate;
    AudioDelegate.instance = null;
    AudioDelegate.getInstance = function() {
        if (!AudioDelegate.instance) {
            AudioDelegate.instance = new AudioDelegate()
        }
        return AudioDelegate.instance
    };
    AudioDelegate.prototype.acquireAudioSource = function() {
        if (!SA.Simulator.Config.isSupport("Audio", "acquireAudioSource")) {
            throw new SA.NoSupportException("acquireAudioSource is not supported")
        }
    };
    AudioDelegate.prototype.releaseAudioSource = function() {
        if (!SA.Simulator.Config.isSupport("Audio", "releaseAudioSource")) {
            throw new SA.NoSupportException("releaseAudioSource is not supported")
        }
    };
    AudioDelegate.prototype.launchAudioApp = function(application) {
        if (!SA.Simulator.Config.isSupport("Audio", "launchAudioApp")) {
            throw new SA.NoSupportException("launchAudioApp is not supported")
        }
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var BrowserDelegate = function() {
        this.appUrl = "";
        this.appWindowId = null
    };
    Simulator.BrowserDelegate = BrowserDelegate;
    BrowserDelegate.instance = null;
    BrowserDelegate.SCREEN_WIDTH = 800;
    BrowserDelegate.SCREEN_HEIGHT = 480;
    BrowserDelegate.getInstance = function() {
        if (!BrowserDelegate.instance) {
            BrowserDelegate.instance = new BrowserDelegate()
        }
        return BrowserDelegate.instance
    };
    BrowserDelegate.prototype.notifyLaunched = function(success) {
        SA.Simulator.Messenger.sendRequest({
            action: "notifyLaunched",
            data: {
                success: success
            }
        })
    };
    BrowserDelegate.prototype.resetApplication = function() {
        SA.Simulator.Messenger.sendRequest({
            action: "resetSimulator"
        })
    };
    BrowserDelegate.prototype.startApplication = function(applicationUrl, applicationId) {
        SA.Simulator.Messenger.sendRequest({
            action: "launchApplication",
            data: {
                applicationId: applicationId,
                applicationUrl: applicationUrl
            }
        })
    };
    BrowserDelegate.prototype.showNavi = function(exit) {
        SA.Simulator.Messenger.sendRequest({
            action: "showNavi",
            data: {
                exit: exit
            }
        })
    };
    BrowserDelegate.prototype.showMenu = function(exit) {
        SA.Simulator.Messenger.sendRequest({
            action: "showMenu",
            data: {
                exit: exit
            }
        })
    };
    BrowserDelegate.prototype.showLauncher = function() {
        SA.Simulator.Messenger.sendRequest({
            action: "showLauncher"
        })
    };
    BrowserDelegate.prototype.showTab = function(tabId) {};
    BrowserDelegate.prototype.getApplicationType = function() {
        return SA.Simulator.Config.getReturnValues("Browser", "getApplicationType").applicationType
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var VoiceInputDelegate = function() {};
    Simulator.VoiceInputDelegate = VoiceInputDelegate;
    VoiceInputDelegate.instance = null;
    VoiceInputDelegate.getInstance = function() {
        if (!VoiceInputDelegate.instance) {
            VoiceInputDelegate.instance = new VoiceInputDelegate()
        }
        return VoiceInputDelegate.instance
    };
    VoiceInputDelegate.prototype.startVoiceInput = function() {
        if (!SA.Simulator.Config.isSupport("VoiceInput", "startVoiceInput")) {
            throw new SA.NoSupportException("startVoiceInput is not supported")
        }
    };
    VoiceInputDelegate.prototype.stopVoiceInput = function() {
        if (!SA.Simulator.Config.isSupport("VoiceInput", "stopVoiceInput")) {
            throw new SA.NoSupportException("stopVoiceInput is not supported")
        }
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var PolicyDelegate = function() {};
    Simulator.PolicyDelegate = PolicyDelegate;
    PolicyDelegate.instance = null;
    PolicyDelegate.getInstance = function() {
        if (!PolicyDelegate.instance) {
            PolicyDelegate.instance = new PolicyDelegate()
        }
        return PolicyDelegate.instance
    };
    PolicyDelegate.prototype.getPolicyData = function(callback) {
        SA.Simulator.Messenger.sendRequest({
            action: "getPolicyData"
        }, function(response) {
            console.log(response);
            callback(response.policyData)
        })
    }
}(SmartAccess.Simulator, SmartAccess));
(function(Simulator, SA) {
    var LoggerDelegate = function() {};
    Simulator.LoggerDelegate = LoggerDelegate;
    LoggerDelegate.instance = null;
    LoggerDelegate.getInstance = function() {
        if (!LoggerDelegate.instance) {
            LoggerDelegate.instance = new LoggerDelegate()
        }
        return LoggerDelegate.instance
    };
    LoggerDelegate.prototype.trace = function(namespace, method, args) {
        Simulator.Messenger.sendTraceLog(namespace, method, args)
    }
}(SmartAccess.Simulator, SmartAccess));