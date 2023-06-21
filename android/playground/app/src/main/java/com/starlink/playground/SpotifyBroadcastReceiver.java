package com.starlink.playground;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class SpotifyBroadcastReceiver extends BroadcastReceiver {
    public static final class BroadcastTypes {
        static final String SPOTIFY_PACKAGE = "com.spotify.music";
        static final String PLAYBACK_STATE_CHANGED = SPOTIFY_PACKAGE + ".playbackstatechanged";
        static final String QUEUE_CHANGED = SPOTIFY_PACKAGE + ".queuechanged";
        static final String METADATA_CHANGED = SPOTIFY_PACKAGE + ".metadatachanged";
        static final String ACTIVE = SPOTIFY_PACKAGE + ".active";
    }

    private ReceiverCallback receiverCallback;

    public SpotifyBroadcastReceiver(ReceiverCallback callback) {
        // initialize callback
        this.receiverCallback = callback;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();

        switch (action) {
            case BroadcastTypes.METADATA_CHANGED:
                // create a new song from received intent.
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
                // send it off to MainActivity with callback
                receiverCallback.metadataChanged(songForMetadata); // callback function
                break;

            case BroadcastTypes.PLAYBACK_STATE_CHANGED:
                // get info variables
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
                receiverCallback.playbackStateChanged(playing, positionInMs, song);
                break;

            case BroadcastTypes.QUEUE_CHANGED:
                break;
        }

//        Log.d("PLAYGROUND", "RECEIVE " + action);
//
//        if (action.equals(BroadcastTypes.METADATA_CHANGED)) {
//            String trackId = intent.getStringExtra("id");
//            String artistName = intent.getStringExtra("artist");
//            String albumName = intent.getStringExtra("album");
//            String trackName = intent.getStringExtra("track");
//            int trackLengthInSec = intent.getIntExtra("length", 0);
//            // Do something with extracted information...
//            Log.d("PLAYGROUND", "METADATA_CHANGED: " + trackId + " " + artistName + " - " + trackName + " (" + albumName + ") " + trackLengthInSec);
//        } else if (action.equals(BroadcastTypes.PLAYBACK_STATE_CHANGED)) {
//            boolean playing = intent.getBooleanExtra("playing", false);
//            int positionInMs = intent.getIntExtra("playbackPosition", 0);
//            Log.d("PLAYGROUND", "PLAYBACK_STATE_CHANGED: playing = " + playing + " position " + positionInMs);
//            // Do something with extracted information
//        } else if (action.equals(BroadcastTypes.QUEUE_CHANGED)) {
//            // Sent only as a notification, your app may want to respond accordingly.
//        }
    }
}


/*class MyBroadcastReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        if (connectivityAction(intent)) {
            Log.d("footag", "onReceive");
        }
    }

    private boolean connectivityAction(Intent intent) {
        return ConnectivityManager.CONNECTIVITY_ACTION.equals(intent.getAction());
    }*/