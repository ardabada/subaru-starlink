package android.content;

import java.io.File;
import android.content.res.AssetManager;

public abstract class Context {
    public static final String DOWNLOAD_SERVICE = "download";

    public abstract Intent registerReceiver (BroadcastReceiver receiver, IntentFilter filter);

    public abstract Object getSystemService (String name);

    public abstract File getExternalFilesDir (String type);

    public abstract AssetManager getAssets ();

    public File getFilesDir () {
        return null;
    }
}
