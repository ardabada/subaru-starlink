package com.subaru.custom.test;

import com.uievolution.microserver.MSModule;
import com.uievolution.microserver.MSModuleFactory;

/* loaded from: C:\Users\ardabada\AppData\Local\Temp\jadx-10032455704441861713.dex */
public class TestModuleFactory implements MSModuleFactory {
    public MSModule create() {
        return new TestModule();
    }
}