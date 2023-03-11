import { Camera, useCameraDevices } from 'react-native-vision-camera';
import {
  Image,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useEffect, useRef, useState, useContext } from 'react';


import iconCamera from '../assets/camera/capture-icon.png';

import { DataContext } from '../contexts/DataContext';
import { useInterval } from '../hooks/useInterval';

import { getCurrentPosition } from '../functions/getCurrentPosition';
import { takePhoto } from '../functions/takePhoto';
import { continueAndSendPhoto } from '../services/continueAndSendPhoto';
import { requestPermission } from '../utils/requestPermission';

import { LoadingIndicator } from './LoadingIndicator';

export function CameraView({ navigation, route }) {
  const iceland = {
    latitude: 64.9631,
    longitude: 19.0208,
  };

  const { replace } = navigation;
  const { taskID } = route.params;

  const [device, setDevice] = useState();
  const [permissions, setPermissions] = useState();
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
    // request the camera and location permissions
    requestPermission(setPermissions);
  }, [devices]);

  // using custom hook to get the location of user
  useInterval(() => getCurrentPosition(lastLocation, setLastLocation, setLocation, setDelay, setLoading, data), delay);

  // while data is loading a loading indicator is shown
  if (loading || !device || !permissions) return <LoadingIndicator />;

  if (photo && location) {
    return (
      <View style={{ padding: 20, backgroundColor: "#025248" }}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 24 }}
          source={{ uri: 'data:image/jpeg;base64,' + photo }}
        />
        <TouchableOpacity style={styles.continueButton} onPress={() => continueAndSendPhoto(setData, setLocation, location, setPhoto, photo, taskID, replace)}>
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

  return (
    <View
      style={styles.container}>
      <TouchableOpacity style={styles.backHomeButton} onPress={() => {
        replace("Home");
      }}>
        <Text style={styles.buttonsText}>Voltar</Text>
      </TouchableOpacity>
      {data.length > 1 && (
        <TouchableOpacity style={styles.finishButton} onPress={() => {
          replace("FinishTask");
        }}>
          <Text style={styles.buttonsText}>Finalizar</Text>
        </TouchableOpacity>
      )}
      {device && (
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
      )}

      <Pressable
        style={{
          bottom: 60,
          position: 'absolute',
        }}
        onPress={() => takePhoto(camera, setDelay, setLoading, setPhoto)}>
        <Image source={iconCamera} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
