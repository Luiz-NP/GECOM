package com.gecom;

import android.Manifest;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;


public class GetLocation extends ReactContextBaseJavaModule {

    private static final int REQUEST_LOCATION_PERMISSION = 1;
    private LocationManager mLocationManager;
    private LocationListener mLocationListener;

    public GetLocation(ReactApplicationContext reactContext) {
        super(reactContext);
        mLocationManager = (LocationManager) reactContext.getSystemService(reactContext.LOCATION_SERVICE);
        mLocationListener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                if (location != null) {
                    // Use the location data
                    double latitude = location.getLatitude();
                    double longitude = location.getLongitude();
                    WritableMap map = Arguments.createMap();
                    map.putDouble("latitude", latitude);
                    map.putDouble("longitude", longitude);
                    sendEvent(getReactApplicationContext(), "onLocationChanged", map);
                }
            }

            @Override
            public void onStatusChanged(String provider, int status, Bundle extras) {
            }

            @Override
            public void onProviderEnabled(String provider) {
            }

            @Override
            public void onProviderDisabled(String provider) {
            }
        };
    }

    @Override
    public String getName() {
        return "GetLocation";
    }

    @ReactMethod
    public void getUserLocation(Promise promise) {
        Activity activity = getCurrentActivity();

        if (activity == null) {
            promise.reject("GetLocationError", "Activity is null");
            return;
        }

        if (ContextCompat.checkSelfPermission(activity,
                Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(activity,
                    new String[]{Manifest.permission.ACCESS_FINE_LOCATION},
                    REQUEST_LOCATION_PERMISSION);
            promise.reject("GetLocationError", "Location permission not granted");
        } else {
            mLocationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, mLocationListener);
            promise.resolve(getLastKnownLocation());
        }
    }

    private WritableMap getLastKnownLocation() {
        Location lastKnownLocation = mLocationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
        if (lastKnownLocation == null) {
            return null;
        }

        double latitude = lastKnownLocation.getLatitude();
        double longitude = lastKnownLocation.getLongitude();
        WritableMap map = Arguments.createMap();
        map.putDouble("latitude", latitude);
        map.putDouble("longitude", longitude);
        return map;
    }

    private void sendEvent(ReactApplicationContext reactContext,
                           String eventName,
                           Object params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
