/*========== ROOT IMPORTS ==========*/
import { 
  PermissionsAndroid, 
  View, 
  Image, 
  Button, 
  Text, 
  Alert
} from 'react-native';
import { useEffect, useState, useContext } from 'react';

/*========== LIBRARY IMPORTS ==========*/
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from '@react-native-community/geolocation';
import RNFS from 'react-native-fs';

/*========== LOCAL FILES & COMPONENTS ==========*/
import { CameraScreen } from 'react-native-camera-kit';
import { DataContext } from "../contexts/DataContext";

/*========== COMPONENT DECLARATION ==========*/
export function Camera({ navigation }) {
  
  /*========== DESTRUCTURING ==========*/
  const { navigate } = navigation;

  /*========== STATES ==========*/
  const [permissions, setPermissios] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);


  /*========== CONTEXTS ==========*/
  const { setData } = useContext(DataContext);

  /*========== LIFE CICLE ==========*/
   useEffect(() => {
    // get permissions
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

      if (camera === 'granted' && storage === 'granted' && location === 'granted' && (locationEnabler === 'enabled' || locationEnabler === 'already-enabled')) setPermissios(true);
      else setPermissios('denied');
    })();
  }, []);

  /*========== FUNCTIONS ==========*/

  // taking a pic
  async function takePic(e) {
    if (e.type === 'capture') {
      setLoading(true);
      await getLocation();

      const uri = e.captureImages[e.captureImages.length-1].uri;

      const pic = await RNFS.readFile(uri, 'base64').then(res => {
        return res;
      });
      setPhoto(pic);
    }
  }

  // getting location at photo time
  async function getLocation() {
    Geolocation.getCurrentPosition(info => {
      const coordinates = {
        latitude: parseFloat(String(info.coords.latitude)),
        longitude: parseFloat(String(info.coords.longitude)), 
      };

      console.log(coordinates);

      setLocation(coordinates);
      setLoading(false);
    },
    error => {
      console.log(error);
      setError(true);
    },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
  }

  /*========== CONDITIONAL RENDERING ==========*/

  // loading if you haven't already given permissions
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

  // blocking if you don't have permissions
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

  // showing photo
  if (photo && location) {
    if (error) {
      setPhoto(null);
      setLocation(null);
      setError(false);
      Alert.alert("Epa, deu ruim", "Verifique se a localização está ligada.")
    }
      return (
      <View>
        <Image
          style={{width: '100%', height: '95.3%'}}
          source={{uri: 'data:image/jpeg;base64,' + photo}}
        />
        <Button onPress={() => {
          // storing data in context
          const data = {
            photo: photo,
            location: location
          };
          
          setData(prev => [...prev, data]);

          // cleaning up
          setPhoto(null);
          setLocation(null);
        }} title="Back" />
      </View>
    );
  }

  /*========== FRONT ==========*/
  return (
    permissions && (
      <View style={{
          height: '100%',
          paddingBottom: 10,
          paddingRight: 130,
        }}>
        <CameraScreen
          torchImageStyle={{
            top: 10,
            left: 120,
          }}
          onBottomButtonPressed={(e) => takePic(e)}
            flashImages={{
              // optional, images for flash state
              on: require('../assets/camera/flash-on.png'),
              off: require('../assets/camera/flash-off.png'),
              auto: require('../assets/camera/flash-auto.png'),
            }}
          captureButtonImage={require('../assets/camera/capture-icon.png')} // optional, image capture button
        />
      </View>
    )
  ); 
}
