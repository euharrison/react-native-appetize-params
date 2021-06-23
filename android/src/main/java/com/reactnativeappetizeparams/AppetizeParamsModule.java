package com.reactnativeappetizeparams;

import androidx.annotation.NonNull;

import android.content.SharedPreferences;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = AppetizeParamsModule.NAME)
public class AppetizeParamsModule extends ReactContextBaseJavaModule {
    public static final String NAME = "AppetizeParams";

    private final ReactApplicationContext reactContext;

    public AppetizeParamsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void get(String key, Promise promise) {
        promise.resolve(getPreferences().getString(key, null));
    }

    @ReactMethod
    public void isAppetize(Promise promise) {
        promise.resolve(getPreferences().getBoolean("isAppetize", false));
    }

    private SharedPreferences getPreferences() {
        return getReactApplicationContext().getSharedPreferences("prefs.db", 0);
    }
}
