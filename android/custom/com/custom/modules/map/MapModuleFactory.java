package com.custom.modules.map;

import com.uievolution.microserver.MSModule;
import com.uievolution.microserver.MSModuleFactory;
import com.custom.modules.map.MapModule;
import com.uievolution.microserver.MicroServer;

public class MapModuleFactory implements MSModuleFactory {
    @Override 
    public MSModule create() {
        return new MapModule(MicroServer.getInstance().getContext());
    }
}