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
  const {update, setUpdate} = useContext(UpdateContext)

  /*========== FUNCTIONS ==========*/
  // adding new task when user click on add task button
  function handleAddNewTask(target) {
    // getting current user id
    const uid = auth().currentUser.uid;

    if (location === '' || cableCount === '' || cableType === '' || poles < 1) return Alert.alert('Preencha todos os campos, de forma válida');

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
                cables: allCables,
                poles: poles,
                status: 'pending',
              }]
            })
            .then(() => {
              console.log('task created!');
              setUpdate(!update);
              navigate(target);
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
        {Array.from({ length: cableCount }).map((value, index) => (
            <View key={index}>
               <Text style={styles.label}>Tipo do Cabo {index + 1}</Text>
               <TextInput
                 onChangeText={text => setCableType(text)}
                 onBlur={() => setAllCables(prev => [...prev, {id: index + 1, type: cableType}])}
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

      <TouchableOpacity onPress={() => handleAddNewTask('Home')} style={styles.addTaskButton}>
        <Text style={styles.addTaskText}>adicionar e voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAddNewTask('Camera')} style={styles.initTask}>
        <Text style={styles.initTaskText}>iniciar inspeção</Text>
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
