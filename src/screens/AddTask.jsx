/*========== ROOT IMPORTS ==========*/
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {useContext, useState} from 'react';

/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {UpdateContext} from '../contexts/UpdateContext';
import {Path, Svg} from 'react-native-svg';

/*========== COMPONENTS DECLARATION ==========*/
export function AddNewTask({route, navigation}) {
  /*========== DESTRUCTURING ==========*/
  const {taskID} = route.params;
  const {navigate} = navigation;

  /*========== STATES ==========*/
  const [location, setLocation] = useState('');
  const [cableCount, setCableCount] = useState(0);
  const [cableType, setCableType] = useState('');
  const [allCables, setAllCables] = useState([]);
  const [poles, setPoles] = useState('0');

  /*========== CONTEXTS ==========*/
  const {update, setUpdate} = useContext(UpdateContext);

  /*========== FUNCTIONS ==========*/
  // adding new task when user click on add task button
  function handleAddNewTask(target) {
    // getting current user id
    const uid = auth().currentUser.uid;

    if (location === '' || cableCount === '' || cableType === '' || poles < 1)
      return Alert.alert('Preencha todos os campos, de forma válida');

    console.log(allCables);
    firestore()
      .collection('Tasks')
      .doc(uid)
      .update({
        Task: firestore.FieldValue.arrayUnion({
          id: taskID,
          distance: 0,
          location: location,
          cables: allCables,
          poles: poles,
          status: 'pending',
        }),
      })
      .then(() => {
        console.log('task created!');
        setUpdate(!update);
        navigate(target);
      })
      .catch(error => {
        console.log(error);

        // if this user dont have a doc on firestore, this create a new doc
        if (error.code === 'firestore/not-found') {
          firestore()
            .collection('Tasks')
            .doc(uid)
            .set({
              Task: [
                {
                  id: taskID,
                  distance: 0,
                  location: location,
                  cables: allCables,
                  poles: poles,
                  status: 'pending',
                },
              ],
            })
            .then(() => {
              console.log('task created!');
              setUpdate(!update);
              navigate(target);
            })
            .catch(error => console.log(error));
        }
      });
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
          <Text style={styles.titleScreen}>Nova tarefa</Text>
        </View>
      </View>
    </View>
    /* <View>
        <Text style={styles.label}>Local da Inspeção</Text>
        <TextInput
          onChangeText={text => setLocation(text)}
          style={styles.input}
          placeholder="Ex: São Paulo - SP"
        />
        <Text style={styles.label}>Variedade de Cabos</Text>
        <TextInput
          onChangeText={text => setCableCount(text)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          placeholder="Ex: 2"
        />
        {Array.from({length: cableCount}).map((value, index) => (
          <View key={index}>
            <Text style={styles.label}>Tipo do Cabo {index + 1}</Text>
            <TextInput
              onChangeText={text => setCableType(text)}
              onBlur={() =>
                setAllCables(prev => [
                  ...prev,
                  {id: index + 1, type: cableType},
                ])
              }
              style={styles.input}
              placeholder="Ex: Cat5e"
            />
          </View>
        ))}
        <Text style={styles.label}>Quantidade de Postes</Text>
        <TextInput
          onChangeText={text => setPoles(text)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
          placeholder="Ex: 4"
        />
      </View>

      <TouchableOpacity
        onPress={() => handleAddNewTask('Home')}
        style={styles.addTaskButton}>
        <Text style={styles.addTaskText}>adicionar e voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleAddNewTask('CameraView')}
        style={styles.initTask}>
        <Text style={styles.initTaskText}>iniciar inspeção</Text>
      </TouchableOpacity>
    </View> */
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
  infoContainer: {
    paddingHorizontal: 24,
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoBox: {
    width: 180,
    height: 180,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitleScreen: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
  },
  form: {
    marginVertical: 24,
  },
  label: {
    marginLeft: 12,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 70,
    borderWidth: 2,
    borderColor: '#8af3cb',
    padding: 12,
    backgroundColor: 'transparent',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 12,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#fff',
    fontSize: 24,
  },
  addTaskButton: {
    width: '100%',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#00c4ac',
    marginTop: 12,
  },

  addTaskText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#00c4ac',
  },

  initTask: {
    width: '100%',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#00c4ac',
    backgroundColor: '#00c4ac',
    marginTop: 24,
  },

  initTaskText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
  },
});
