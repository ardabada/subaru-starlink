package com.custom.modules.music;

import com.uievolution.microserver.MicroServer;

public class SpotifyBroadcastReceiverCallback implements ReceiverCallback {
   
    private static SpotifyBroadcastReceiverCallback instance = null;

    private Song currentSong = null;
    private Boolean isPlaying = false;
    private Integer playbackPos = 0;

    public SpotifyBroadcastReceiverCallback() {
        MicroServer.Logger.d("MusicModule", "ctor SpotifyBroadcastReceiverCallback()");
    }

    @Override
    public void metadataChanged(Song song) {
        this.currentSong = song;
    }

    @Override
    public void playbackStateChanged(boolean isPlaying, int playbackPos, Song song) {
        this.isPlaying = isPlaying;
        this.playbackPos = playbackPos;
        this.currentSong = song;
    }

    public static SpotifyBroadcastReceiverCallback getInstance() {
        if (instance == null) {
            instance = new SpotifyBroadcastReceiverCallback();
        }
        return instance;
    }

    public Song getCurrentSong() {
        return currentSong;
    }
    public Boolean getIsPlaying() {
        return isPlaying;
    }
    public Integer getPlaybackPosition() {
        return playbackPos;
    }
}