package com.starlink.playground;

import androidx.appcompat.app.AppCompatActivity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.media.AudioManager;
import android.net.ConnectivityManager;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    TextView status = null;
    SpotifyBroadcastReceiver receiver = null;
    IntentFilter intentFilter = null;
    MyCallback callback = null;

    class MyCallback implements ReceiverCallback {
        @Override
        public void metadataChanged(Song song) {

            SongArtworkDownloader.getThumbnailBase64(song.getId(), new ThumbnailCallback() {
                @Override
                public void onDone(String thumbnailBase64) {
                    Log.d("Playground", "metadataChanged: " + song.toString() + " artwork: " + thumbnailBase64);
                }
            });
        }

        @Override
        public void playbackStateChanged(boolean isPlaying, int playbackPos, Song song) {
            SongArtworkDownloader.getThumbnailBase64(song.getId(), new ThumbnailCallback() {
                @Override
                public void onDone(String thumbnailBase64) {
                    Log.d("Playground", "playbackStateChanged: isPlaying=" + isPlaying + " playbackPos=" + playbackPos + " " + song.toString() + " artwork: " + thumbnailBase64);
                }
            });
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        callback = new MyCallback();
        receiver = new SpotifyBroadcastReceiver(callback);
        intentFilter = new IntentFilter();
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.ACTIVE);
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.PLAYBACK_STATE_CHANGED);
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.METADATA_CHANGED);
        intentFilter.addAction(SpotifyBroadcastReceiver.BroadcastTypes.QUEUE_CHANGED);
        registerReceiver(receiver, intentFilter);
    }

    @Override
    protected void onResume() {
        super.onResume();
        registerReceiver(receiver, intentFilter);
    }

    @Override
    protected void onPause() {
        super.onPause();
        unregisterReceiver(receiver);
    }
}