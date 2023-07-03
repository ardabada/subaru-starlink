package com.custom.modules.music;

public interface ReceiverCallback {
    void metadataChanged(Song song);
    void playbackStateChanged(boolean isPlaying, int playbackPos, Song song);
}
