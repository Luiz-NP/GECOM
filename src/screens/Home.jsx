/*========== ROOT IMPORTS ==========*/
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {useContext, useEffect, useState} from 'react';

/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {TaskHome} from '../components/TaskHome';
import {AuthContext} from '../contexts/AuthContext';

/*========== COMPONENT DECLARATION ==========*/
export function Home({navigation}) {
  /*========== DESTRUCTURING ==========*/
  const {navigate} = navigation;

  /*========== STATES ==========*/
  const [tasks, setTasks] = useState([]);
  const [tasksFiltered, setTasksFiltered] = useState([]);
  const [update, setUpdate] = useState(false); // when this is changed, useEffect runs again
  const [buttonSelected, setButtonSelected] = useState(0); // indexs: 0 = Todas | 1 = Pendentes | 3 = Concluídas
  const [count, setCount] = useState(10);

  /*========== CONTEXTS ==========*/
  const {user} = useContext(AuthContext); // getting user from AuthContext

  /*========== USE EFFECTS ==========*/
  useEffect(() => {
    // checking if there is a user, if not, we send it to Login screen
    if (!user) navigate('Auth');

    // getting task data from firestore
    firestore()
      .collection('Tasks')
      .doc('BdqLKrrejbVdGRryDtDppZtJ7mt1')
      .get()
      .then(({_data}) => {
        setTasks(_data.Task);
        setTasksFiltered(_data.Task);
      });
  }, [update]);

  // filtering tasks when user click on buttons
  useEffect(() => {
    if (buttonSelected === 1) {
      const tasksPending = tasks.filter(task => task.status === 'pending');

      return setTasksFiltered(tasksPending);
    }
    if (buttonSelected === 2) {
      const tasksCompleted = tasks.filter(task => task.status === 'completed');

      return setTasksFiltered(tasksCompleted);
    }
    return setTasksFiltered(tasks);
  }, [buttonSelected]);

  /*========== FUNCTIONS ==========*/

  /*========== FRONT ==========*/
  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.header}>
        <View>
          <Text style={styles.titleScreen}>Início</Text>
          <Text style={styles.subTitleScreen}>Suas Tarefas</Text>
        </View>

        <View style={styles.icons}>
          <View style={styles.icon}></View>
          <View style={styles.icon}></View>
        </View>
      </View>

      <View style={styles.nav}>
        <Pressable
          onPress={() => setButtonSelected(0)}
          style={buttonSelected === 0 ? styles.btnNavSelected : styles.btnNav}>
          <Text
            style={
              buttonSelected === 0
                ? styles.textBtnNavSelected
                : styles.textBtnNav
            }>
            Todas
          </Text>
        </Pressable>

        <Pressable
          style={buttonSelected === 1 ? styles.btnNavSelected : styles.btnNav}
          onPress={() => setButtonSelected(1)}>
          <Text style={styles.count}>{count}</Text>

          <Text
            style={
              buttonSelected === 1
                ? styles.textBtnNavSelected
                : styles.textBtnNav
            }>
            Pendente
          </Text>
        </Pressable>

        <Pressable
          style={buttonSelected === 2 ? styles.btnNavSelected : styles.btnNav}
          onPress={() => setButtonSelected(2)}>
          <Text style={styles.count}>{count}</Text>

          <Text
            style={
              buttonSelected === 2
                ? styles.textBtnNavSelected
                : styles.textBtnNav
            }>
            Concluídas
          </Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.tasks}>
        {tasksFiltered.map(task => {
          return (
            <TaskHome
              key={task.id}
              distance={task.distance}
              location={task.location}
              status={task.status}
            />
          );
        })}
        <Pressable
          onPress={() => navigate('AddNewTask', {id: tasks.length + 1})}
          style={styles.addTaskButton}>
          <Text style={styles.addTaskText}>adicionar tarefa</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
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
  icons: {
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'space-between',
  },

  icon: {
    backgroundColor: '#FFFFFF70',
    borderRadius: 20,
    width: 50,
    height: 50,
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  btnNav: {
    width: '31%',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#00c4ac',
  },

  count: {
    position: 'absolute',
    borderColor: '#00c4ac',
    backgroundColor: '#00c4ac',
    borderRadius: 5,
    paddingHorizontal: 5,
    top: -10,
    right: 0,
  },

  btnNavSelected: {
    width: '31%',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    backgroundColor: '#338f84',
    borderColor: '#338f84',
  },

  textBtnNav: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#00c4ac',
  },

  textBtnNavSelected: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },

  tasks: {
    marginTop: 10,
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
