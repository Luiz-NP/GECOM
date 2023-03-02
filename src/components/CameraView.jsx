import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {
  Image,
  Pressable,
  View,
  Button,
  PermissionsAndroid,
  Text,
} from 'react-native';
import {useEffect, useRef, useState, useContext} from 'react';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from '@react-native-community/geolocation';
import {getPreciseDistance} from 'geolib';

import iconCamera from '../assets/camera/capture-icon.png';

import {DataContext} from '../contexts/DataContext';
import {useInterval} from '../hooks/useInterval';

import RNFS from 'react-native-fs';

import {NativeModules} from 'react-native';

export function CameraView({navigation}) {
  const iceland = {
    latitude: 64.9631,
    longitude: 19.0208,
  };

  const [device, setDevice] = useState();
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [lastLocation, setLastLocation] = useState(iceland);
  const [delay, setDelay] = useState(null);
  const [loading, setLoading] = useState(false);

  const devices = useCameraDevices('wide-angle-camera');
  const {data, setData, distance} = useContext(DataContext);

  const camera = useRef();

  const {GetLocation} = NativeModules;

  useEffect(() => {
    setDevice(devices.back);

    (async () => {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      const locationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });

      console.log('camera:', cameraPermission);
      console.log('location:', locationPermission);
    })();
  }, [devices]);

  const getCurrentPosition = () =>
    Geolocation.getCurrentPosition(
      position => {
        const coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        const diference = getPreciseDistance(lastLocation, coordinates);

        setLastLocation(coordinates);

        console.log('diference:', diference);

        if (
          diference < 1 &&
          !data.some(
            x =>
              coordinates.latitude === x.location.latitude &&
              coordinates.longitude === x.location.longitude,
          )
        ) {
          setLocation(coordinates);
          setDelay(null);
          setLoading(false);
        }
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
        setError(true);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );

  // using custom hook
  useInterval(() => getCurrentPosition(), delay);

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({
      // flash: 'on',
    });
    setDelay(3000);
    setLoading(true);

    // await GetLocation.getUserLocation().then(res => {
    //   console.log(res);
    //   setLoading(false);

    //   setLocation(res);
    // });

    const pic = await RNFS.readFile(photo.path, 'base64').then(res => {
      return res;
    });
    setPhoto(pic);
  };

  // loading state
  if (loading) {
    return (
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white'}}>Carregando...</Text>
      </View>
    );
  }

  if (photo && location) {
    return (
      <View>
        <Image
          style={{width: '100%', height: '92%'}}
          source={{uri: 'data:image/jpeg;base64,' + photo}}
        />
        <Button
          onPress={() => {
            const data = {
              photo: photo,
              location: location,
            };

            setData(prev => [...prev, data]);
            setLocation(null);
            setPhoto(null);
            navigation.navigate('ConfirmTask');
          }}
          title="continuar"
        />
      </View>
    );
  }

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          position: 'absolute',
          top: 100,
          zIndex: 3,
          backgroundColor: 'black',
        }}>
        {distance} metros percorridos
      </Text>
      {device ? (
        <Camera
          style={{
            width: '100%',
            height: '100%',
          }}
          ref={camera}
          device={device}
          isActive={true}
          photo={true}
          enableZoomGesture
        />
      ) : null}

      <Pressable
        style={{
          bottom: 60,
          position: 'absolute',
        }}
        onPress={takePhoto}>
        <Image source={iconCamera} />
      </Pressable>
    </View>
  );
}
