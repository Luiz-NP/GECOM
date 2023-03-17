import { PermissionsAndroid } from 'react-native';

import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export const requestPermission = async () => {
    try {
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
    
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    
        await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
        });
    } catch (error) {
        console.log('request permission error:', error);
    }
}