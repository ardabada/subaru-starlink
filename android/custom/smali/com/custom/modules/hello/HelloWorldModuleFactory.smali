.class public Lcom/custom/modules/hello/HelloWorldModuleFactory;
.super Ljava/lang/Object;
.source "HelloWorldModuleFactory.java"

# interfaces
.implements Lcom/uievolution/microserver/MSModuleFactory;


# direct methods
.method public constructor <init>()V
    .registers 1

    .prologue
    .line 7
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public create()Lcom/uievolution/microserver/MSModule;
    .registers 2

    .prologue
    .line 10
    new-instance v0, Lcom/custom/modules/hello/HelloWorldModule;

    invoke-direct {v0}, Lcom/custom/modules/hello/HelloWorldModule;-><init>()V

    return-object v0
.end method
