import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import {useState} from 'react';

export function AddNewTask({route, navigation}) {
  const [location, setLocation] = useState('');

  const {id} = route.params;

  // adding new task when user click on add task button
  const handleAddNewTask = () => {
    firestore()
      .collection('Tasks')
      .doc('BdqLKrrejbVdGRryDtDppZtJ7mt1')
      .update({
        Task: firestore.FieldValue.arrayUnion({
          id: id,
          distance: 0,
          location: location,
          status: 'pending',
        }),
      })
      .then(() => {
        console.log('task created!');
        setUpdate(!update);
      })
      .catch(error => console.log(error));
  };
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
