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
import Svg, {Defs, Path, ClipPath, Use} from 'react-native-svg';

/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

/*========== LOCAL FILES & COMPONENTS ==========*/
import {TaskHome} from '../components/TaskHome';
import {AuthContext} from '../contexts/AuthContext';
import {UpdateContext} from '../contexts/UpdateContext';

/*========== COMPONENT DECLARATION ==========*/
export function Home({navigation}) {
  /*========== DESTRUCTURING ==========*/
  const {navigate} = navigation;

  /*========== STATES ==========*/
  const [tasks, setTasks] = useState([]);
  const [tasksFiltered, setTasksFiltered] = useState([]);
  const [buttonSelected, setButtonSelected] = useState(0); // indexs: 0 = Todas | 1 = Pendentes | 3 = Concluídas
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  /*========== CONTEXTS ==========*/
  const {user} = useContext(AuthContext); // getting user from AuthContext
  const {update, setUpdate} = useContext(UpdateContext) // reload data when change
  
  /*========== LIFE CICLE ==========*/
  useEffect(() => {
    // checking if there is a user, if not, we send it to Login screen
    if (!user) navigate('Auth');
    
    setUpdate(!update);
  }, []);

  useEffect(() => {
    // getting task data from firestore
    firestore()
      .collection('Tasks')
      .doc('BdqLKrrejbVdGRryDtDppZtJ7mt1')
      .get()
      .then(({_data}) => {
        // all tasks
        setTasks(_data?.Task);
        setTasksFiltered(_data?.Task);

        // pending tasks
        const tasksPending = _data?.Task.filter(task => task.status === 'pending');
        setPendingTasks(tasksPending);

        // completed tasks
        const tasksCompleted = _data?.Task.filter(task => task.status === 'completed');
        setCompletedTasks(tasksCompleted);
      });
  }, [update]);

  // filtering tasks when user click on buttons
  useEffect(() => {
    if (buttonSelected === 1) return setTasksFiltered(pendingTasks);
    if (buttonSelected === 2) return setTasksFiltered(completedTasks);
    
    return setTasksFiltered(tasks);
  }, [buttonSelected]);

  /*========== FRONT ==========*/
  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.header}>
        <View>
          <Text style={styles.titleScreen}>Início</Text>
          <Text style={styles.subTitleScreen}>Suas tarefas</Text>
        </View>

        <View style={styles.icons}>
          <View style={styles.icon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20.996 20.995">
              <Path
                id="Account"
                d="M13,14.049V14H4.253A2.249,2.249,0,0,0,2,16.248v.92a2.75,2.75,0,0,0,.51,1.6C4.056,20.928,6.579,22,10,22q.536,0,1.043-.035A2.518,2.518,0,0,1,11,21.5v-5A2.5,2.5,0,0,1,13,14.049ZM10,2A5,5,0,1,1,5,7,5,5,0,0,1,10,2Zm4,13h-.5A1.5,1.5,0,0,0,12,16.5v5A1.5,1.5,0,0,0,13.5,23h8A1.5,1.5,0,0,0,23,21.5v-5A1.5,1.5,0,0,0,21.5,15H21v-1.25A1.75,1.75,0,0,0,19.25,12h-3.5A1.75,1.75,0,0,0,14,13.749Zm1.5-1.25a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25V15h-4Z"
                transform="translate(-2.004 -2.004)"
                fill="#fff"
              />
            </Svg>
          </View>
          <View style={styles.icon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 18.724 19.5">
              <Path
                id="Settings"
                d="M12.013,2.25a10.583,10.583,0,0,1,2.182.253.75.75,0,0,1,.582.649l.17,1.527a1.384,1.384,0,0,0,1.375,1.233,1.358,1.358,0,0,0,.553-.117l1.4-.615a.75.75,0,0,1,.849.174,9.793,9.793,0,0,1,2.2,3.792.75.75,0,0,1-.271.826l-1.241.915a1.381,1.381,0,0,0,0,2.226l1.243.915a.75.75,0,0,1,.271.826,9.8,9.8,0,0,1-2.2,3.792.75.75,0,0,1-.849.175L16.872,18.2a1.381,1.381,0,0,0-1.926,1.113l-.169,1.527a.75.75,0,0,1-.572.647,9.518,9.518,0,0,1-4.406,0,.75.75,0,0,1-.572-.647L9.058,19.32a1.382,1.382,0,0,0-1.925-1.111l-1.407.616a.75.75,0,0,1-.849-.175,9.8,9.8,0,0,1-2.2-3.8.75.75,0,0,1,.272-.826l1.243-.916a1.381,1.381,0,0,0,0-2.226L2.946,9.973a.75.75,0,0,1-.272-.826,9.793,9.793,0,0,1,2.2-3.792.75.75,0,0,1,.849-.174l1.4.615A1.388,1.388,0,0,0,9.059,4.678l.17-1.526A.75.75,0,0,1,9.812,2.5,10.665,10.665,0,0,1,12.013,2.25ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                transform="translate(-2.641 -2.25)"
                fill="#fff"
              />
            </Svg>
          </View>
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
          <Text style={styles.count}>{pendingTasks?.length ?? 0}</Text>

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
          <Text style={styles.count}>{completedTasks?.length ?? 0}</Text>

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
        {tasksFiltered?.map(task => {
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
          onPress={() => {
            const taskID = tasks?.length ?? 0 
            navigate('AddNewTask', {taskID: taskID + 1})
          }}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 72,
  },
  titleScreen: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 32,
    color: '#FFFFFF',
  },
  subTitleScreen: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'ClashGrotesk-Medium',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },

  icon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00c4ac',
  },

  count: {
    position: 'absolute',
    borderColor: '#00c4ac',
    backgroundColor: '#00c4ac',
    fontFamily: 'ClashGrotesk-Medium',
    color: '#FFFFFF',
    fontSize: 16,
    borderRadius: 5,
    paddingHorizontal: 5,
    top: -5,
    right: -5,
  },

  btnNavSelected: {
    width: '31%',
    borderRadius: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#338f84',
    borderColor: '#338f84',
  },

  textBtnNav: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#00c4ac',
  },

  textBtnNavSelected: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
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
