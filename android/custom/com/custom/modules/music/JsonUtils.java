package com.custom.modules.music;

import org.json.JSONObject;
import org.json.JSONException;

public final class JsonUtils {
    public static JSONObject toJson(Song song) {
        JSONObject result = new JSONObject();
        try {
            result.put("id", song.getId());
            result.put("artist", song.getArtist());
            result.put("track", song.getTrack());
            result.put("album", song.getAlbum());
            result.put("length", song.getLength());
        }
        catch (JSONException e) {

        }
        return result;
    }
}