package com.uievolution.microserver;

import com.uievolution.microserver.http.Header;
import com.uievolution.microserver.http.StatusLine;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.Channels;
import java.nio.channels.WritableByteChannel;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.zip.GZIPOutputStream;

public abstract class AbstractMSModuleImpl implements MSModule {

    public static final Header[] sCommonResponseHeaders = {};

    public static boolean isActiveClose() {
        return false;
    }

    public static boolean isForceHttp11() {
        return false;
    }

    public static void setActiveClose(boolean z) {
    }

    @Override 
    public void cancel() {
    }

    public boolean closeResponse() {
        return false;
    }

    public void closeUaConnectionNow() {
    }

    public void closeUaConnectionOnEmpty() {
    }

    public void disableGzipEncoding() {
    }

    protected abstract byte[] doStart();

    public void enableGzipEncoding() {
    }

    @Override
    public void finished() {
    }

    public String getConnectionType() {
        return "dummy";
    }

    public InBlockingQueue getInQueue() {
        return null;
    }

    public OutBlockingQueue getOutQueue() {
        return null;
    }

    public HttpRequestInfo getRequestInfo() {
        return null;
    }

    public UAConnectionCloser getUAConnectionCloser() {
        return null;
    }

    public byte[] getWholeBody() {
        return null;
    }

    @Override
    public void init(HttpRequestInfo httpRequestInfo, InBlockingQueue inBlockingQueue, OutBlockingQueue outBlockingQueue, UAConnectionCloser uAConnectionCloser, String str) {

    }

    public boolean isCanceled() {
        return false;
    }

    public boolean isDeleteMethod() {
        return false;
    }

    public boolean isGetMethod() {
        return false;
    }

    public boolean isGzipEncodingEnabled() {
        return false;
    }

    protected boolean isHeadMethod() {
        return false;
    }

    public boolean isOptionsMethod() {
        return false;
    }

    public boolean isPostMethod() {
        return false;
    }

    protected boolean isPutMethod() {
        return false;
    }

    protected boolean isTraceMethod() {
        return false;
    }

    public void sendResponse(int i) {
    }

    @Override
    public void setDigestAuth(DigestAuth digestAuth) {
    }

    @Override
    public byte[] start() {
        return null;
    }

    public boolean startResponse(int i, List<Header> list) {
        return false;
    }

    protected boolean writeResponseData(byte[] bArr) {
        return false;
    }

    public boolean closeResponse(boolean z) {
        return false;
    }

    public void sendResponse(int i, String str) {
        
    }

    public boolean writeResponseData(byte[] bArr, int i, int i2) {
        return false;
    }

    public void sendResponse(int i, String str, Header[] headerArr, byte[] bArr) {
    }

    public boolean startResponse(int i, Header[] headerArr) {
        return false;
    }

    protected void sendResponse(int i, String str, List<Header> list, byte[] bArr) {
    }

    public boolean startResponse(StatusLine statusLine, List<Header> list) {
        return false;
    }

    protected boolean startResponse(StatusLine statusLine, Header[] headerArr) {
        return false;
    }

    protected void sendResponse(StatusLine statusLine, Header[] headerArr, byte[] bArr) {
    }

    protected void sendResponse(StatusLine statusLine, List<Header> list, byte[] bArr) {
        
    }
}