package com.uievolution.microserver;

public interface UAConnectionCloser {
    void closeNow();

    void closeOnEmpty();
}