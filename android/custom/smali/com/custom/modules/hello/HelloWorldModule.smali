.class public Lcom/custom/modules/hello/HelloWorldModule;
.super Lcom/uievolution/microserver/AbstractMSModuleImpl;
.source "HelloWorldModule.java"


# direct methods
.method public constructor <init>()V
    .registers 1

    .prologue
    .line 5
    invoke-direct {p0}, Lcom/uievolution/microserver/AbstractMSModuleImpl;-><init>()V

    return-void
.end method


# virtual methods
.method protected doStart()[B
    .registers 6

    .prologue
    const/4 v1, 0x0

    .line 8
    const-string v2, "Hello, World!"

    .line 9
    const/16 v3, 0xc8

    move-object v0, v1

    check-cast v0, Ljava/lang/String;

    sget-object v4, Lcom/uievolution/microserver/AbstractMSModuleImpl;->sCommonResponseHeaders:[Lcom/uievolution/microserver/http/Header;

    invoke-virtual {v2}, Ljava/lang/String;->getBytes()[B

    move-result-object v2

    invoke-virtual {p0, v3, v0, v4, v2}, Lcom/custom/modules/hello/HelloWorldModule;->sendResponse(ILjava/lang/String;[Lcom/uievolution/microserver/http/Header;[B)V

    .line 10
    return-object v1
.end method
