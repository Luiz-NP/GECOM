/*========== ROOT IMPORTS ==========*/
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useContext, useState } from 'react';

/*========== LOCAL FILES & COMPONENTS ==========*/
import { UpdateContext } from '../contexts/UpdateContext';
import { Path, Svg } from 'react-native-svg';
import { NotificationLocation } from '../components/NotificationLocation';
import { DropDown } from '../components/DropDown';
import { addNewTask } from '../services/addNewTask';

/*========== COMPONENTS DECLARATION ==========*/
export function DataPoint({ route, navigation }) {
  /*========== DESTRUCTURING ==========*/
  const { taskID } = route.params;
  const { navigate } = navigation;

  // dropdown options
  const options = {
    varietyOfCables: [1, 2, 3, 4],
    cableType: [
      'CTP-APL 40X10 P',
      'CTP-APL 20P',
      'CTP-APL XSDL 40X20 P',
      'CTP-APL 40X30 P',
      'CTP-APL XSDL 40X30 P',
      'CTP-APL 40X40 P',
      'CTP-APL 40X50 P',
      'CTP-APL XSDL 50P',
      'CTP-APL 40X100 P',
      'CTP-APL XSDL 100 P',
      'CTP-APL 200 P',
      'CTP-APL XSDL 40X200 P',
      'CTP-APL 300 P',
      'CTP-APL XSDL 40X300 P',
      'CTP-APL XSDL 40X400 P',
      'CTS-APL-G 40C600 P',
      'CTP-APL 40X1200 P',
      'CTP-APL 40X1800 P',
      'CTP-APL 40X2400 P',
    ],
  };

  /*========== STATES ==========*/
  const [cableCount, setCableCount] = useState(null);
  const [allCables, setAllCables] = useState([]);

  /*========== CONTEXTS ==========*/
  const { update, setUpdate } = useContext(UpdateContext);

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
          <Text style={styles.titleScreen}>Adicionar tarefa</Text>
        </View>
      </View>
      <NotificationLocation />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.form}>
        <View style={[styles.inputArea, styles.spacer]}>
          <View style={styles.localInput}></View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Variedade de Cabos</Text>
            <DropDown
              options={options.varietyOfCables}
              value={cableCount}
              setValue={setCableCount}
            />
          </View>
          {Array.from({ length: cableCount }).map((value, index) => (
            <View key={index}>
              <Text style={styles.label}>Tipo do Cabo {index + 1}</Text>
              <DropDown
                options={options.cableType}
                value={allCables[index]}
                setValue={setAllCables}
                id={index + 1}
              />
            </View>
          ))}
        </View>
        <View style={styles.actionArea}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              addNewTask(
                'Home',
                cableCount,
                allCables,
                setUpdate,
                update,
                navigate,
                taskID
              )}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Adicionar tarefa</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              addNewTask(
                'CameraView',
                cableCount,
                allCables,
                setUpdate,
                update,
                navigate,
                taskID
              )}>
            <View style={styles.buttonHighlight}>
              <Text style={styles.buttonText}>Iniciar inspeção</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHighlight: {
    width: '100%',
    height: 60,
    backgroundColor: '#025248',
    borderRadius: 15,
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