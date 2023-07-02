package com.uievolution.microserver.http;

public interface StatusLine {
    //ProtocolVersion getProtocolVersion();

    String getReasonPhrase();

    int getStatusCode();
}