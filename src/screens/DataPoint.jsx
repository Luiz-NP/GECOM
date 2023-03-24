/*========== ROOT IMPORTS ==========*/
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { useState, useContext, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-simple-toast';

/*========== LOCAL FILES & COMPONENTS ==========*/
import { Path, Svg, G, Polygon, Rect } from 'react-native-svg';
import { NotificationLocation } from '../components/NotificationLocation';
import { DropDown } from '../components/DropDown';
import { PositionContext } from "../contexts/PositionContext";
import { addNewDataPoint } from '../services/addNewDataPoint';
import { getDataPoints } from '../services/getDataPoints';
import { useFocusEffect } from '@react-navigation/native';

/*========== COMPONENTS DECLARATION ==========*/
export function DataPoint({ navigation, route }) {
  /*========== DESTRUCTURING ==========*/
  const { navigate } = navigation;
  const { taskID, imageRef } = route.params;

  const { control, handleSubmit  } = useForm();
  /*========== STATES ==========*/
  const [cableType, setCableType] = useState([
    {label: 'CTP-APL 20P', value: 'CTP-APL 20P'},
    {label: 'CTP-APL 40P', value: 'CTP-APL 40P'},
    {label: 'CTP-APL 60P', value: 'CTP-APL 60P'},
    {label: 'CTP-APL 80P', value: 'CTP-APL 80P'},
  ]);
  const [cableCount, setCableCount] = useState(1);
  const [dataPointsLength, setDataPointsLength] = useState();

  const { position } = useContext(PositionContext);

  useEffect(() => {
    (async () => {
      const dataPoints = await getDataPoints(taskID);
      setDataPointsLength(dataPoints.length);
    })();
  }, []);

  // defining back button behavior to block user back action
  useFocusEffect(useCallback(() => {
    const onBackPress = () => {
      return true;
    };

    const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
    );

    return () => subscription.remove();
  }, []));

  const onSubmit = (data, finish) => {
    console.log(control)
    const fields = {};
    
    if (finish) return addNewDataPoint(fields, position, taskID, navigate, target = 'FinishTask', imageRef);

    // checking for empty fields and preventing invisible values from being sent as a response
    for (let i = 1; i <= cableCount; i++) {
      if (data[`cable-${i}`] === undefined) return Toast.show(
        "Preencha todos os campos.",
        Toast.LONG,
      );

      fields[`cable-${i}`] = data[`cable-${i}`];
    }

    addNewDataPoint(fields, position, taskID, navigate, target = 'CameraView', imageRef);
  }

  /*========== FRONT ==========*/
  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <View style={styles.userArea}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={styles.backBtn}
            activeOpacity={0.8}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill={'white'}
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M9.474 5.209L3.22 11.468c-.147.146-.22.338-.22.53s.073.384.22.53l6.252 6.257a.742.742 0 00.527.217.753.753 0 00.534-1.278l-4.976-4.976h14.692a.75.75 0 000-1.5H5.557l4.978-4.979a.745.745 0 00-.006-1.054.749.749 0 00-1.055-.006z"
                fillRule="nonzero"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1.0}
            onPress={() => navigate('Profile')}></TouchableOpacity>
          <Text style={styles.titleScreen}>Selecionar tipos de cabo</Text>
        </View>
      </View>
      <View style={styles.form}>
        {Array.from({ length: cableCount }).map((_, index) => (
          <View key={index} style={{marginBottom: 48, zIndex: cableType.length - index}}>
            <Text style={styles.label}>Tipo do cabo {index+1}</Text>

            <Controller
              control={control}
              name={`cable-${index+1}`}
              render={({ field: { value, onChange } }) => (
                <DropDown
                  value={value}
                  setValue={onChange}
                  items={cableType}
                  setItems={setCableType}
                />
              )}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={() => setCableCount(cableCount+1)}>
          <Svg
            width={42}
            height={42}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16">
            <G>
              <G>
                <Path 
                  d="M8,0C3.589,0,0,3.589,0,8s3.589,8,8,8s8-3.589,8-8S12.411,0,8,0z M8,14c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6 S11.309,14,8,14z" 
                  fill="white" 
                  style="fill: rgb(255, 255, 255);">
                </Path>
                <Polygon 
                  points="9,4 7,4 7,7 4,7 4,9 7,9 7,12 9,12 9,9 12,9 12,7 9,7 " 
                  fill="white" 
                  style="fill: rgb(255, 255, 255);">
                </Polygon>
              </G>
            </G>
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity style={styles.removeButton} onPress={() => cableCount < 2 ? '' : setCableCount(cableCount-1)}>
          <Svg
            width={42}
            height={42}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16">
            <G>
              <G>
                <Path
                  d="M8,0C3.589,0,0,3.589,0,8s3.589,8,8,8s8-3.589,8-8S12.411,0,8,0z M8,14c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6 S11.309,14,8,14z"
                  fill="white"
                />
                <Rect 
                  x="4" 
                  y="7" 
                  width="8" 
                  height="2"
                  fill="white"
                />
              </G>
            </G>
          </Svg>
        </TouchableOpacity>
      </View>

        {dataPointsLength > 0 && (
          <TouchableOpacity
            style={styles.finishButton}
            activeOpacity={0.8}
            onPress={handleSubmit((data) => onSubmit(data, finish = true))}>
            <Text style={styles.buttonText}>Finalizar a inspeção</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={handleSubmit((data) => onSubmit(data, finish = false))}>
          <View style={styles.buttonHighlight}>
            <Text style={styles.buttonText}>Continuar a inspeção</Text>
          </View>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },

  backBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#1e1e1e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 64,
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    borderBottomColor: 'white',
  },
  titleScreen: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },

  form: {
    paddingHorizontal: 24,
    position: 'relative'
  },

  label: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 6,
    marginTop: 12,
  },

  localInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionArea: {
    marginTop: 12,
    marginBottom: 36,
  },

  addButton: {
    position: 'absolute',
    right: 24,
    bottom: -60,
    zIndex: -1
  },

  removeButton: {
    position: 'absolute',
    right: 96,
    bottom: -60,
    zIndex: -1
  },

  continueButton: {
    position: 'absolute',
    bottom: 48,
    width: '100%'
  },

  finishButton: {
    position: 'absolute',
    bottom: 132,
    width: '100%',
    height: 60,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonHighlight: {
    width: '100%',
    height: 60,
    backgroundColor: '#025248',
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: 'white',
  },
});