/*========== ROOT IMPORTS ==========*/
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const taskOwner = 'Algar Telecom';
const taskType = 'Fiscalização de Campo';

/*========== COMPONENT DECLARATION ==========*/
export function TaskHome({data, navigate}) {
  const {alert} = Alert;

  // update context
  const {update, setUpdate} = useContext(UpdateContext);

  const deleteTask = async () => {
    const taskToDelete = data.id;

    const {uid} = auth().currentUser;
    const tasksRef = firestore().collection('Tasks').doc(uid);
    const tasksData = (await tasksRef.get()).data();

    const tasksUpdated = tasksData.Task.filter(
      task => task.id !== taskToDelete,
    );

    tasksData.Task = tasksUpdated;
    await tasksRef.update(tasksData);
    setUpdate(!update);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.task}
      onPress={() =>
        navigate('TaskInfo', {
          data,
        })
      }>
      <Text style={styles.ownerTask}>{taskOwner}</Text>
      <Text style={styles.textTask}>{taskType}</Text>

      <View style={styles.contentInfo}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{data.distance}km</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{data.location}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.deleteTask}
        onPress={() => {
          alert('Apagar Task?', 'Tem certeza de que deseja apagar?', [
            {
              text: 'nao',
              onPress: () => '',
              style: 'cancel',
            },
            {
              text: 'sim',
              onPress: deleteTask,
            },
          ]);
        }}>
        <Svg
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M10 5h4a2 2 0 10-4 0zM8.5 5a3.5 3.5 0 117 0h5.75a.75.75 0 010 1.5h-1.32L18.76 18.611A3.75 3.75 0 0115.026 22H8.974a3.75 3.75 0 01-3.733-3.389L4.07 6.5H2.75a.75.75 0 010-1.5H8.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zM14.25 9a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75z"
            fill="#00c4ac"
          />
        </Svg>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: {
    borderWidth: 1,
    borderColor: '#00c4ac',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  textTask: {
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  ownerTask: {
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#00c4ac',
  },

  contentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  info: {
    backgroundColor: '#00c4ac',
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  textInfo: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },

  deleteTask: {
    position: 'absolute',
    right: 0,
    height: '100%',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 16,
    borderRadius: 50,
  },
});
