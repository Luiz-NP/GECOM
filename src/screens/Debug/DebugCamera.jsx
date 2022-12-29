import { PermissionsAndroid, View, Image, Button, Text, Alert} from 'react-native';
import {useEffect, useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import RNFS from 'react-native-fs';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default function DebugCamera() {
  const [permissions, setPermissios] = useState();
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState();
  const [showPhoto, setShowPhoto] = useState();

  useEffect(() => {
    (async () => {
      const camera = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      const storage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      const location = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      const locationEnabler = await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });

      console.log(locationEnabler);

      if (camera === 'granted' && storage === 'granted' && location === 'granted' && (locationEnabler === 'enabled' || locationEnabler === 'already-enabled')) setPermissios(true);
      else setPermissios('denied');
    })();
  }, []);

  async function takePic(e) {
    if (e.type === 'capture') {
      await getLocation();

      const uri = e.captureImages[e.captureImages.length-1].uri;

      const data = await RNFS.readFile(uri, 'base64').then(res => {
        return res;
      });
      setPhotos(prev => [...prev, data]);
      setShowPhoto(true);
    }
  }

  async function getLocation() {
    Geolocation.getCurrentPosition(info => {
      console.log(info.coords.latitude);
      console.log(info.coords.longitude);
    },
    error => {
      console.log(error);
      setError(true);
    },
    {timeout: 20000, maximumAge: 1000});
  }

  if (permissions === undefined) {
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

  if (permissions === 'denied') {
    return (
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white'}}>
          Verifique se concedeu as permissões necessárias.
        </Text>
      </View>
    );
  }

  if (photos.length > 0 && showPhoto) {
    console.log(photos.length);
    if (error) {
      setShowPhoto(false);
      setError(false);
      Alert.alert("Epa, deu ruim", "Verifique se a localização está ligada.")
    }
      return (
      <View>
        <Image
          style={{width: '100%', height: '92.9%'}}
          source={{uri: 'data:image/jpeg;base64,' + photos[photos.length-1]}}
        />
        <Button onPress={() => setShowPhoto(false)} title="Back" />
      </View>
    );
  }

  return (
    permissions && (
      <CameraScreen
        style={{
          height: '100%',
          paddingBottom: 80,
          paddingRight: 130,
        }}
        torchImageStyle={{
          top: 50,
          left: 120,
        }}
        onBottomButtonPressed={(e) => takePic(e)}
        flashImages={{
          // optional, images for flash state
          on: require('../../../assets/camera/flash-on.png'),
          off: require('../../../assets/camera/flash-off.png'),
          auto: require('../../../assets/camera/flash-auto.png'),
        }}
        captureButtonImage={require('../../../assets/camera/capture-icon.png')} // optional, image capture button
        hideControls={false} // (default false) optional, hides camera controls
        showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
      />
    )
  );
}
