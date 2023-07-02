package com.custom.modules.hello;

import com.uievolution.microserver.MSModule;
import com.uievolution.microserver.MSModuleFactory;
import com.custom.modules.hello.HelloWorldModule;

public class HelloWorldModuleFactory implements MSModuleFactory {
    @Override 
    public MSModule create() {
        return new HelloWorldModule();
    }
}