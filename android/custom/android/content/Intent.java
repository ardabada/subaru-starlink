package android.content;

public class Intent {
    public String getAction() {
        return "dummy";
    }

    public String getStringExtra(String key) {
        return "dummy";
    }

    public int getIntExtra(String key, int defaultValue) {
        return 0;
    }

    public long getLongExtra(String key, long defaultValue) {
        return 0L;
    }

    public boolean getBooleanExtra(String key, boolean defaultValue) {
        return false;
    }
}