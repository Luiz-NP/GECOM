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

import iconCamera from '../assets/camera/capture-icon.png';

import {DataContext} from '../contexts/DataContext';
import Geolocation from '@react-native-community/geolocation';

import RNFS from 'react-native-fs';

export function CameraView() {
  const [device, setDevice] = useState();
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const devices = useCameraDevices('wide-angle-camera');
  const {setData, distance} = useContext(DataContext);

  const camera = useRef();

  useEffect(() => {
    setDevice(devices.back);

    (async () => {
      const newCameraPermission = await Camera.requestCameraPermission();

      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });

      console.log(newCameraPermission);
    })();
  }, [devices]);

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      info => {
        const coordinates = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        };

        console.log(coordinates);
        setLocation(coordinates);
        setLoading(false);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
    );
  };

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });

    setLoading(true);
    await getLocation();

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
