package com.uievolution.microserver;

public interface MSModule {

    public enum Requester {
        HeadUnit,
        HandSet
    }

    void cancel();

    void finished();

    void init(HttpRequestInfo httpRequestInfo, InBlockingQueue inBlockingQueue, OutBlockingQueue outBlockingQueue, UAConnectionCloser uAConnectionCloser, String str);

    void setDigestAuth(DigestAuth digestAuth);

    byte[] start();
}