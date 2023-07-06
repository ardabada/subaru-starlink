package com.custom.modules.music;

import android.content.IntentFilter;
import android.content.Context;
import com.uievolution.microserver.AbstractMSModuleImpl;
import com.uievolution.microserver.MicroServer;
// import com.custom.modules.music.SpotifyBroadcastReceiverCallback;

public class MusicModule extends AbstractMSModuleImpl {

    private static SpotifyBroadcastReceiver receiver = null;
    private static IntentFilter intentFilter = null;

    public MusicModule() {
        MicroServer.Logger.d("MusicModule", "new MusicModule()");
        initIntentFilter();
    }

    private void initIntentFilter() {
        MicroServer.Logger.d("MusicModule", "initIntentFilter");
        if (intentFilter != null) return;

        MicroServer.Logger.d("MusicModule", "do initIntentFilter");

        intentFilter = new IntentFilter();
        MicroServer.Logger.d("MusicModule", "new IntentFilter() done");
        // callback = new SpotifyBroadcastReceiverCallback();
        // MicroServer.Logger.d("MusicModule", "SpotifyBroadcastReceiverCallback.getInstance() done");
        receiver = new SpotifyBroadcastReceiver();
        MicroServer.Logger.d("MusicModule", "new SpotifyBroadcastReceiver done");
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.ACTIVE);
        MicroServer.Logger.d("MusicModule", "addAction done");
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.PLAYBACK_STATE_CHANGED);
        MicroServer.Logger.d("MusicModule", "addAction done");
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.METADATA_CHANGED);
        MicroServer.Logger.d("MusicModule", "addAction done");
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.QUEUE_CHANGED);
        MicroServer.Logger.d("MusicModule", "addAction done");
        MicroServer.Logger.d("MusicModule", "begin getContext");
        Context ctx = getContext();
        MicroServer.Logger.d("MusicModule", "getContext done");
        if (ctx == null) {
            MicroServer.Logger.d("MusicModule", "ctx is null");
        }
        else {
            MicroServer.Logger.d("MusicModule", "ctx is not null");
            ctx.registerReceiver(receiver, intentFilter);
        }
    }

    protected byte[] doStart() {
        // if (isGetMethod()) {
            Song currentSong = receiver.song;//SpotifyBroadcastReceiverCallback.getInstance().getCurrentSong();
            
            sendResponse(200, (String) null, sCommonResponseHeaders, JsonUtils.toJson(currentSong).toString().getBytes());
        // }
        // else {
        //     sendResponse(405, (String) null, sCommonResponseHeaders, "MusicModule module can only accept a GET request".getBytes());
        // }

        return null;
    }

    
}