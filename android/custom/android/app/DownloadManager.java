package android.app;

import android.net.Uri;
import java.lang.CharSequence;

public class DownloadManager {

    public long enqueue (DownloadManager.Request request) {
        return 0L;
    }

    public static class Request {
        public static final int VISIBILITY_VISIBLE_NOTIFY_COMPLETED = 0;

        public Request(Uri uri) {

        }

        public Request setDescription(CharSequence title) {
            return null;
        }

        public Request setTitle (CharSequence title) {
            return null;
        }

        public DownloadManager.Request setNotificationVisibility (int visibility) {
            return null;
        }

        public Request setDestinationInExternalPublicDir (String dirType, String subPath) {
            return null;
        }
    }
}