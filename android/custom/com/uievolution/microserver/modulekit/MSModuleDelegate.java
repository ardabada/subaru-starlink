package com.uievolution.microserver.modulekit;

public interface MSModuleDelegate {
    void dispatch(MSHTTPRequest mSHTTPRequest, MSHTTPResponder mSHTTPResponder);
}