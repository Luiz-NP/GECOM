import { Camera, useCameraDevices } from 'react-native-vision-camera';
import {
  Image,
  Pressable,
  View,
  Button,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useEffect, useRef, useState, useContext } from 'react';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from '@react-native-community/geolocation';
import { getPreciseDistance } from 'geolib';

import iconCamera from '../assets/camera/capture-icon.png';

import { DataContext } from '../contexts/DataContext';
import { useInterval } from '../hooks/useInterval';

import RNFS from 'react-native-fs';

import storage from '@react-native-firebase/storage';

export function CameraView({ navigation }) {
  const iceland = {
    latitude: 64.9631,
    longitude: 19.0208,
  };

  const { navigate } = navigation;

  const [device, setDevice] = useState();
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [lastLocation, setLastLocation] = useState(iceland);
  const [delay, setDelay] = useState(null);
  const [loading, setLoading] = useState(false);

  const devices = useCameraDevices('wide-angle-camera');
  const { data, setData } = useContext(DataContext);

  const camera = useRef();

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
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 },
    );

  // using custom hook
  useInterval(() => getCurrentPosition(), delay);

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({
      // flash: 'on',
    });
    setDelay(3000);
    setLoading(true);

    const pic = await RNFS.readFile(photo.path, 'base64').then(res => {
      return res;
    });
    setPhoto(pic);

    const storageRef = storage().ref('photos/imageTest.jpg')

    storageRef.putString(pic, 'base64')
      .then(snapshot => {
        console.log('Image uploaded successfully!');
      })
      .catch(error => {
        console.log('Error uploading image:', error);
      });
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
        <Text style={{ color: 'white' }}>Carregando...</Text>
      </View>
    );
  }

  if (photo && location) {
    return (
      <View style={{ padding: 20, backgroundColor: "#025248" }}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 24 }}
          source={{ uri: 'data:image/jpeg;base64,' + photo }}
        />
        <TouchableOpacity style={styles.continueButton} onPress={() => {
          const data = {
            photo: photo,
            location: location,
          };

          setData(prev => [...prev, data]);
          setLocation(null);
          setPhoto(null);
          // navigation.navigate('ConfirmTask');
        }}>
          <Text style={styles.buttonsText}>continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.repeatButton} onPress={() => {
          setLocation(null);
          setPhoto(null);
        }}>
          <Text style={styles.buttonsText}>repetir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  console.log(data.length)

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity style={styles.backHomeButton} onPress={() => {
        navigate("Home");
      }}>
        <Text style={styles.buttonsText}>Voltar</Text>
      </TouchableOpacity>
      {data.length > 1 ? (
        <TouchableOpacity style={styles.finishButton} onPress={() => {
          navigate("FinishTask");
        }}>
          <Text style={styles.buttonsText}>Finalizar</Text>
        </TouchableOpacity>
      ) : null}
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
};

const styles = StyleSheet.create({
  repeatButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: 72,
    marginLeft: 32,
    width: 120,
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#025248',
    backgroundColor: "#025248",
  },

  continueButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: 72,
    marginRight: 32,
    width: 120,
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#025248',
    backgroundColor: "#025248",
  },

  finishButton: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 72,
    marginRight: 18,
    width: 120,
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#025248',
    backgroundColor: "#025248",
    zIndex: 1,
  },

  backHomeButton: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: 72,
    marginLeft: 18,
    width: 120,
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#025248',
    backgroundColor: "#025248",
    zIndex: 1,
  },

  buttonsText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 20,
    color: '#FFFFFF',
  }
});
