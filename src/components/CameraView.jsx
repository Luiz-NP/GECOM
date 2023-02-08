import {
  Camera,
  useCameraDevices,
  TakePhotoOptions,
} from 'react-native-vision-camera';
import {Image, Pressable, Text, View} from 'react-native';
import {useEffect, useRef, useState} from 'react';

import iconCamera from '../assets/camera/capture-icon.png';

import RNFS from 'react-native-fs';

export function CameraView() {
  const [device, setDevice] = useState();
  const [photo, setPhoto] = useState(null);

  const devices = useCameraDevices('wide-angle-camera');

  const camera = useRef(null);

  useEffect(() => {
    setDevice(devices.back);

    (async () => {
      const newCameraPermission = await Camera.requestCameraPermission();

      console.log(newCameraPermission);
    })();
  }, [devices]);

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });

    const pic = await RNFS.readFile(photo.path, 'base64').then(res => {
      return res;
    });
    setPhoto(pic);
  };

  if (photo) {
    return (
      <View>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri: 'data:image/jpeg;base64,' + photo}}
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
          position: 'absolute',
        }}
        onPress={takePhoto}>
        <Image source={iconCamera} />
      </Pressable>
    </View>
  );
}
