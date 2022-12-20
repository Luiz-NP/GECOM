import {CameraScreen} from 'react-native-camera-kit';
import RNFS from 'react-native-fs';
import {PermissionsAndroid, View, Image, Button, Text} from 'react-native';
import {useEffect, useRef, useState} from 'react';

export default function DebugCamera() {
  const cameraRef = useRef(null);
  const [permissions, setPermissios] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const camera = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      const storage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (camera === 'granted' && storage === 'granted') setPermissios(true);
      else setPermissios('denied');
    })();
  }, []);

  async function takePic(e) {
    if (e.type === 'capture') {
      const {uri} = await cameraRef.current.camera.capture();

      const data = await RNFS.readFile(uri, 'base64').then(res => {
        return res;
      });
      setPhoto(data);
    }
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

  if (photo) {
    return (
      <View>
        <Image
          style={{width: '100%', height: '92.9%'}}
          source={{uri: 'data:image/jpeg;base64,' + photo}}
        />
        <Button onPress={() => setPhoto(null)} title="Back" />
      </View>
    );
  }

  return (
    permissions && (
      <CameraScreen
        ref={cameraRef}
        style={{
          height: '100%',
          paddingBottom: 80,
          paddingRight: 130,
        }}
        torchImageStyle={{
          top: 50,
          left: 120,
        }}
        onBottomButtonPressed={takePic}
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
