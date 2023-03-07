import { PermissionsAndroid } from 'react-native';

import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export const requestPermission = async () => {
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
}