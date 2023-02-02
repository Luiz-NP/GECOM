import {useContext, useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import {TaskHome} from '../components/TaskHome';
import {AuthContext} from '../contexts/AuthContext';

// firestore
import firestore from '@react-native-firebase/firestore';

interface IFirestoreProps {
  distance: number;
  location: string;
  status: boolean;
}

interface IData {
  _data: IFirestoreProps;
}

export const Home = ({navigation}: any): JSX.Element => {
  const {navigate} = navigation;

  const [tasks, setTasks] = useState<IData[] | any>([]);
  const [tasksFiltered, setTasksFiltered] = useState<IData[] | any>([]);

  // index = 0 -> Todas
  // index = 1 -> Pendentes
  // index = 2 -> Concluídas
  const [buttonSelected, setButtonSelected] = useState(0);

  const [count, setCount] = useState(10);

  // getting user from AuthContext
  const { user } = useContext(AuthContext);

  // firestore querys
  useEffect(() => {
    // verify when user is connected, else navigate to Login screen
    if (!user) navigate("Auth"); 

    // getting task data from firestore
    firestore()
      .collection('Tasks')
      .doc('BdqLKrrejbVdGRryDtDppZtJ7mt1')
      .get()
      .then(({_data}: any) => {
        setTasks(_data.Task);
        setTasksFiltered(_data.Task);
      });
  }, []);

  useEffect(() => {
    if (buttonSelected === 1) {
      const tasksPending = tasks.filter((task: any) => {
        return task.status === 'pending';
      });

      return setTasksFiltered(tasksPending);
    }
    if (buttonSelected === 2) {
      const tasksCompleted = tasks.filter((task: any) => {
        return task.status === 'completed';
      });

      return setTasksFiltered(tasksCompleted);
    }
    return setTasksFiltered(tasks);
  }, [buttonSelected]);

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
        {tasksFiltered.map((task: any) => {
          return (
            <TaskHome
              key={task.id}
              distance={task.distance}
              location={task.location}
              status={task.status}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

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
});
