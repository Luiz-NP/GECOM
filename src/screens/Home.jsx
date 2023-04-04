/*========== ROOT IMPORTS ==========*/
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import {useCallback, useContext, useEffect, useState} from 'react';

/*========== LIBRARY IMPORTS ==========*/
import LottieView from 'lottie-react-native';
import {useFocusEffect} from '@react-navigation/native';
import Svg, {Path} from 'react-native-svg';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {TaskHome} from '../components/TaskHome';
import {ButtonNavHome} from '../components/ButtonNavHome';

import {AuthContext} from '../contexts/AuthContext';

import {UpdateContext} from '../contexts/UpdateContext';
import {deleteTask} from '../services/deleteTask';

import {getTasks} from '../services/getTasks';

import {ConfirmModal} from '../components/modals/ConfirmModal';
import {requestPermission} from '../utils/requestPermission';

/*========== COMPONENT DECLARATION ==========*/
export function Home({navigation}) {
  /*========== DESTRUCTURING ==========*/
  const {navigate} = navigation;
  const darkMode = true;
  /*========== STATES ==========*/
  const [buttonSelected, setButtonSelected] = useState(0); // indexs: 0 = Todas | 1 = Pendentes | 3 = Concluídas
  const [tasks, setTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();

  /*========== CONTEXTS ==========*/
  const {user} = useContext(AuthContext); // getting user from AuthContext
  const {update, setUpdate} = useContext(UpdateContext); // reload data when change

  /*========= WORKAROUNDS =========*/
  let profileImage = user?.photoURL?.replace('s96-c', 's400-c');

  if (!profileImage) profileImage = 'https://i.imgur.com/yWia8IK.png';

  /*========== LIFE CICLE ==========*/
  useEffect(() => {
    // checking if there is a user, if not, we send it to Login screen
    if (!user) navigate('Auth');

    setUpdate(!update);
    requestPermission();
  }, []);

  useEffect(() => {
    // function to get users's tasks
    getTasks(setTasks, setPendingTasks, setCompletedTasks);
  }, [update]);

  // defining back button behavior to block user back action
  useFocusEffect(useCallback(() => {
    const onBackPress = () => {
      BackHandler.exitApp();
      return true;
    };

    const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
    );

    return () => subscription.remove()
  }, []));

  /*========== FRONT ==========*/
  return (
    <View style={darkMode ? dark.homeContainer : styles.homeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ConfirmModal
        modal={modal}
        setModal={setModal}
        update={update}
        setUpdate={setUpdate}
        data={modalData}
      />
      <View style={styles.header}>
        <View style={styles.userArea}>
          <TouchableOpacity
            activeOpacity={1.0}
            onPress={() => navigate('Profile')}>
            <Image style={styles.userImage} source={{uri: profileImage}} />
          </TouchableOpacity>
          <Text style={styles.titleScreen}>Suas tarefas</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('Settings')}
            style={styles.icon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18.724 19.5">
              <Path
                id="Settings"
                d="M12.013,2.25a10.583,10.583,0,0,1,2.182.253.75.75,0,0,1,.582.649l.17,1.527a1.384,1.384,0,0,0,1.375,1.233,1.358,1.358,0,0,0,.553-.117l1.4-.615a.75.75,0,0,1,.849.174,9.793,9.793,0,0,1,2.2,3.792.75.75,0,0,1-.271.826l-1.241.915a1.381,1.381,0,0,0,0,2.226l1.243.915a.75.75,0,0,1,.271.826,9.8,9.8,0,0,1-2.2,3.792.75.75,0,0,1-.849.175L16.872,18.2a1.381,1.381,0,0,0-1.926,1.113l-.169,1.527a.75.75,0,0,1-.572.647,9.518,9.518,0,0,1-4.406,0,.75.75,0,0,1-.572-.647L9.058,19.32a1.382,1.382,0,0,0-1.925-1.111l-1.407.616a.75.75,0,0,1-.849-.175,9.8,9.8,0,0,1-2.2-3.8.75.75,0,0,1,.272-.826l1.243-.916a1.381,1.381,0,0,0,0-2.226L2.946,9.973a.75.75,0,0,1-.272-.826,9.793,9.793,0,0,1,2.2-3.792.75.75,0,0,1,.849-.174l1.4.615A1.388,1.388,0,0,0,9.059,4.678l.17-1.526A.75.75,0,0,1,9.812,2.5,10.665,10.665,0,0,1,12.013,2.25ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                transform="translate(-2.641 -2.25)"
                fill="#fff"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.nav}>
        <ButtonNavHome
          buttonSelected={buttonSelected}
          setButtonSelected={setButtonSelected}
          tasks={tasks}
          number={0}
          text={'Todas'}
          isToShowCount={false}
        />

        <ButtonNavHome
          buttonSelected={buttonSelected}
          setButtonSelected={setButtonSelected}
          tasks={pendingTasks}
          number={1}
          text={'Pendentes'}
          isToShowCount={true}
        />

        <ButtonNavHome
          buttonSelected={buttonSelected}
          setButtonSelected={setButtonSelected}
          tasks={completedTasks}
          number={2}
          text={'Concluídas'}
          isToShowCount={true}
        />
      </View>

      {tasks?.length ? (
        <FlatList
          data={
            buttonSelected === 0
              ? tasks
              : buttonSelected === 1
              ? pendingTasks
              : completedTasks
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <TaskHome
                data={item}
                setModalData={setModalData}
                key={item.id}
                navigate={navigate}
                setModal={setModal}
                setUpdate={setUpdate}
                update={update}
                deleteTask={deleteTask}
                onPress={() => navigate('TaskInfo', {item})}
              />
            </>
          )}
        />
      ) : (
        <View style={styles.notFoundTask}>
          <LottieView
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}
            source={require('../assets/img/not_found.json')}
            loop
            autoPlay
          />
          <Text style={styles.notFoundTaskText}>Nenhuma tarefa encontrada</Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={async () => {
          if (!(await requestPermission())) return requestPermission();

          navigate('AddNewTask');
          // set button selected to 0
          setTimeout(() => setButtonSelected(0), 1000);
        }}
        style={styles.addTaskButton}>
        <Svg
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M11.883 3.007L12 3a1 1 0 01.993.883L13 4v7h7a1 1 0 01.993.883L21 12a1 1 0 01-.883.993L20 13h-7v7a1 1 0 01-.883.993L12 21a1 1 0 01-.993-.883L11 20v-7H4a1 1 0 01-.993-.883L3 12a1 1 0 01.883-.993L4 11h7V4a1 1 0 01.883-.993L12 3l-.117.007z"
            fill="#00c4ac"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#025248',
    paddingHorizontal: 20,
  },

  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImage: {
    width: 42,
    height: 42,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'white',
  },

  header: {
    flexDirection: 'row',
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

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  addTaskButton: {
    width: '100%',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00c4ac',
    marginTop: 24,
    marginBottom: 48,
  },

  notFoundTask: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  notFoundTaskText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    top: -20,
  },
});

const dark = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
});
