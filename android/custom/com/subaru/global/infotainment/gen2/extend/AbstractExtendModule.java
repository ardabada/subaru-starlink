package com.subaru.global.infotainment.gen2.extend;

import com.uievolution.microserver.modulekit.MSHTTPRequest;
import com.uievolution.microserver.modulekit.MSHTTPResponder;
import com.uievolution.microserver.modulekit.MSModuleDelegate;

public abstract class AbstractExtendModule implements MSModuleDelegate {
    @Override
    public abstract void dispatch(MSHTTPRequest mSHTTPRequest, MSHTTPResponder mSHTTPResponder);

    public void responseErrorJson(MSHTTPResponder mSHTTPResponder, String str, int i) {
     }
}