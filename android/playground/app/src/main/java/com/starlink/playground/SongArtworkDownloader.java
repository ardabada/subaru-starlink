package com.starlink.playground;
import android.os.AsyncTask;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

public class SongArtworkDownloader {
    private static Map<String, String> thumbnailCache = new HashMap<>();

    public static void getThumbnailBase64(String trackId, ThumbnailCallback callback) {
        if (thumbnailCache.containsKey(trackId)) {
            String thumbnailBase64 = thumbnailCache.get(trackId);
            callback.onDone(thumbnailBase64);
            return;
        }

        new ThumbnailTask(callback).execute(trackId);
    }

    private static class ThumbnailTask extends AsyncTask<String, Void, String> {
        private ThumbnailCallback callback;

        public ThumbnailTask(ThumbnailCallback callback) {
            this.callback = callback;
        }

        @Override
        protected String doInBackground(String... trackIds) {
            String trackId = trackIds[0];

            try {
                Log.d("Playground", "Get artwork for " + trackId);
                URL url = new URL("https://open.spotify.com/oembed?url=" + trackId);

                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");

                InputStream inputStream = connection.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));

                StringBuilder response = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                reader.close();

                String json = response.toString();
                String thumbnailUrl = parseThumbnailUrlFromJson(json);
                Log.d("Playground", "thumbnailUrl " + thumbnailUrl);

                URL thumbnailUrlObj = new URL(thumbnailUrl);
                InputStream thumbnailInputStream = thumbnailUrlObj.openStream();

                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = thumbnailInputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }

                byte[] thumbnailBytes = outputStream.toByteArray();
                thumbnailInputStream.close();
                outputStream.close();

                String thumbnailBase64 = Base64.getEncoder().encodeToString(thumbnailBytes);

                thumbnailCache.put(trackId, thumbnailBase64);

                return thumbnailBase64;
            }
            catch (Exception e)
            {
                Log.e("Playground", e.toString());
            }

            return null;
        }

        @Override
        protected void onPostExecute(String thumbnailBase64) {
            callback.onDone(thumbnailBase64);
        }
    }

    // Helper method to parse the thumbnail URL from the JSON response
    private static String parseThumbnailUrlFromJson(String json) throws JSONException {
        JSONObject jsonObject = new JSONObject(json);
        String thumbnailUrl = jsonObject.getString("thumbnail_url");
        return thumbnailUrl;
    }
}
