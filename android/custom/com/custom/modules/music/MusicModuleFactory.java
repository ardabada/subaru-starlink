package com.custom.modules.music;

import com.uievolution.microserver.MSModule;
import com.uievolution.microserver.MSModuleFactory;

public class MusicModuleFactory implements MSModuleFactory {
    @Override 
    public MSModule create() {
        return new MusicModule();
    }
}