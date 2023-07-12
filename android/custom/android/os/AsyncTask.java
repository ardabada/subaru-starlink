package android.os;

public abstract class AsyncTask<Params, Progress, Result>
{
    protected abstract Result doInBackground (Params... params);

    public final AsyncTask<Params, Progress, Result> execute (Params... params) {
        return null;
    }
}