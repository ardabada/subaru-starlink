package com.custom.modules.music;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import com.uievolution.microserver.MicroServer;

public class SpotifyBroadcastReceiver extends BroadcastReceiver {
    public static final class BroadcastTypes {
        static final String SPOTIFY_PACKAGE = "com.spotify.music";
        static final String PLAYBACK_STATE_CHANGED = SPOTIFY_PACKAGE + ".playbackstatechanged";
        static final String QUEUE_CHANGED = SPOTIFY_PACKAGE + ".queuechanged";
        static final String METADATA_CHANGED = SPOTIFY_PACKAGE + ".metadatachanged";
        static final String ACTIVE = SPOTIFY_PACKAGE + ".active";
    }

    private ReceiverCallback receiverCallback;

    public Song song = null;
    public boolean playing = false;
    public int position = 0;

    public SpotifyBroadcastReceiver() {
        MicroServer.Logger.d("MusicModule", "create SpotifyBroadcastReceiver");
        // this.receiverCallback = callback;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
    
        MicroServer.Logger.d("MusicModule", "SpotifyBroadcastReceiver " + action);
        switch (action) {
            case BroadcastTypes.METADATA_CHANGED:
                Song songForMetadata = new Song(
                        intent.getStringExtra("id"),
                        intent.getStringExtra("artist"),
                        intent.getStringExtra("album"),
                        intent.getStringExtra("track"),
                        intent.getIntExtra("length", 0),
                        intent.getLongExtra("timeSent", -1L),
                        System.currentTimeMillis(),
                        intent.getIntExtra("playbackPosition", 0)
                );
                this.song = songForMetadata;
                // receiverCallback.metadataChanged(songForMetadata); 
                break;

            case BroadcastTypes.PLAYBACK_STATE_CHANGED:
                boolean playing = intent.getBooleanExtra("playing", false);
                int positionInMs = intent.getIntExtra("playbackPosition", 0);
                Song song = new Song(
                        intent.getStringExtra("id"),
                        intent.getStringExtra("artist"),
                        intent.getStringExtra("album"),
                        intent.getStringExtra("track"),
                        intent.getIntExtra("length", 0),
                        intent.getLongExtra("timeSent", -1L),
                        System.currentTimeMillis(),
                        intent.getIntExtra("playbackPosition", 0)
                );
                this.song = song;
                this.playing = playing;
                this.position = positionInMs;
                // receiverCallback.playbackStateChanged(playing, positionInMs, song);
                break;

            case BroadcastTypes.QUEUE_CHANGED:
                break;
        }
    }
}