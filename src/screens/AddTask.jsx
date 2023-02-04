/*========== ROOT IMPORTS ==========*/
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useContext, useState} from 'react';

/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {UpdateContext} from '../contexts/UpdateContext';

/*========== COMPONENTS DECLARATION ==========*/
export function AddNewTask({route, navigation}) {
  /*========== DESTRUCTURING ==========*/
  const {taskID} = route.params;
  const {navigate} = navigation;

  /*========== STATES ==========*/ 
  const [location, setLocation] = useState('');

  /*========== CONTEXTS ==========*/
  const {update, setUpdate} = useContext(UpdateContext)

  /*========== FUNCTIONS ==========*/
  // adding new task when user click on add task button
  const handleAddNewTask = () => {
    // getting current user id
    const uid = auth().currentUser.uid;

    firestore()
      .collection('Tasks')
      .doc(uid)
      .update({
        Task: firestore.FieldValue.arrayUnion({
          id: taskID,
          distance: 0,
          location: location,
          status: 'pending',
        }),
      })
      .then(() => {
        console.log('task created!');
        setUpdate(!update);
        navigate('Home');
      })
      .catch(error => {
        console.log(error)
        
        // if this user dont have a doc on firestore, this create a new doc
        if (error.code === "firestore/not-found") {
          firestore()
            .collection('Tasks')
            .doc(uid)
            .set({
              Task: [{
                id: taskID,
                distance: 0,
                location: location,
                status: 'pending',
              }]
            })
            .then(() => {
              console.log('task created!');
              setUpdate(!update);
              navigate('Home');
            })
            .catch(error => console.log(error));
        }
      });
  };

  /*========== FRONT ==========*/
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <View style={styles.form}>
          <Text style={styles.titleScreen}>Adicionar nova Task</Text>
          <Text style={styles.subTitleScreen}>Preencha os campos</Text>
        </View>
      </View>

      <View>
        <TextInput
          onChangeText={text => setLocation(text)}
          style={styles.input}
          placeholder="Localização"
        />
      </View>

      <TouchableOpacity onPress={handleAddNewTask} style={styles.addTaskButton}>
        <Text style={styles.addTaskText}>adicionar tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#025248',
    paddingHorizontal: 20,
  },
  header: {
    minHeight: 200,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleScreen: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 32,
    color: '#FFFFFF',
  },
  subTitleScreen: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
  },
  form: {
    marginVertical: 24,
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
    marginTop: 24,
    marginBottom: 96,
  },

  addTaskText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#00c4ac',
  },
});
