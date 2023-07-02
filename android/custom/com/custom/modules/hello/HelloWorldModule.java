package com.custom.modules.hello;

import com.uievolution.microserver.AbstractMSModuleImpl;

public class HelloWorldModule extends AbstractMSModuleImpl {

    protected byte[] doStart() {
        String response = "Hello, World!";
        sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, response.getBytes());
        return null;
    }
}