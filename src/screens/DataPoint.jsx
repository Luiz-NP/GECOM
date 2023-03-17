/*========== ROOT IMPORTS ==========*/
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useState, useContext } from 'react';
import { PositionContext } from "../contexts/PositionContext";

/*========== LOCAL FILES & COMPONENTS ==========*/
import { Path, Svg } from 'react-native-svg';
import { NotificationLocation } from '../components/NotificationLocation';
import { DropDown } from '../components/DropDown';

import { dataPointAndCableTypeLengthUpdate } from '../services/dataPointAndCableTypeLengthUpdate';
/*========== COMPONENTS DECLARATION ==========*/
export function DataPoint({ navigation, route }) {
  /*========== DESTRUCTURING ==========*/
  const { navigate } = navigation;
  const { taskID } = route.params;

  /*========== STATES ==========*/
  const [cableType, setCableType] = useState([
    {label: 'CTP-APL 20P', value: 'CTP-APL 20P'},
    {label: 'CTP-APL 40P', value: 'CTP-APL 40P'},
    {label: 'CTP-APL 60P', value: 'CTP-APL 60P'},
    {label: 'CTP-APL 80P', value: 'CTP-APL 80P'},
  ]);
  const [cableTypes, setCableTypes] = useState(null);

  const { position, setPosition, meters, setMeters } = useContext(PositionContext)

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
      <NotificationLocation />
      <View showsVerticalScrollIndicator={false} style={styles.form}>
        <View style={[styles.inputArea, styles.spacer]}>
          <View style={styles.localInput}></View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Variedade de Cabos</Text>
            <DropDown
              items={cableType} 
              setItems={setCableType}
              value={cableTypes}
              setValue={setCableTypes}
              multiple={true}
            />
          </View>
        </View>
      </View>
        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={() => {
            dataPointAndCableTypeLengthUpdate(
            cableTypes,
            taskID,
            navigate,
            meters,
            setMeters,
          )}}>
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

  spacer: {
    marginTop: 24,
    zIndex: 1,
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
  continueButton: {
    position: 'absolute',
    bottom: 48,
    width: '100%'
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
