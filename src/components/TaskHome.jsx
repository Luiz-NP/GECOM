/*========== ROOT IMPORTS ==========*/
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GarbageIcon} from '../assets/icons/GarbageIcon';

const taskType = 'Fiscalização de Campo';

/*========== COMPONENT DECLARATION ==========*/
export function TaskHome({data, setModalData, navigate, setModal}) {
  const handleConfirmationWantDeleteTask = () => {
    setModalData(data);
    setModal(true);
  };

  let meters = data.meters?.traveled ?? 0;

  if (meters === 0) {
    meters = 'Não iniciada';
  }

  if (meters > 0) {
    meters = `${meters} metros`;
  }

  console.log(data.status);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={data.status === 'completed' ? styles.taskFinished : styles.task}
      onPress={() =>
        navigate('TaskInfo', {
          data,
        })
      }>
      <Text
        style={
          data.status === 'completed'
            ? styles.ownerTaskFinished
            : styles.ownerTask
        }>
        {data.company}
      </Text>
      <Text
        style={
          data.status === 'completed'
            ? styles.textTaskFinished
            : styles.textTask
        }>
        {taskType}
      </Text>

      <View style={styles.contentInfo}>
        <View
          style={
            data.status === 'completed' ? styles.infoFinished : styles.info
          }>
          <Text style={styles.textInfo}>
            {meters === 'Não iniciada' ? meters : meters}
          </Text>
        </View>
        <View
          style={
            data.status === 'completed' ? styles.infoFinished : styles.info
          }>
          <Text style={styles.textInfo}>{data.location.city}</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={
          data.status === 'completed' ? {display: 'none'} : styles.deleteTask
        }
        onPress={handleConfirmationWantDeleteTask}>
        <GarbageIcon width={32} height={32} />
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
  taskFinished: {
    borderWidth: 1,
    borderColor: '#15796D',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  textTaskFinished: {
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
    color: 'white',
    marginBottom: 6,
  },

  ownerTaskFinished: {
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#15796D',
  },

  infoFinished: {
    backgroundColor: '#15796D',
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
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
    top: 36,
    right: 12,
    backgroundColor: '#006458',
    padding: 6,
    borderRadius: 50,
  },
});
