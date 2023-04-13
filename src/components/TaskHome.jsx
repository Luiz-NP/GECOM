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

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.task}
      onPress={() =>
        navigate('TaskInfo', {
          data,
        })
      }>
      <Text style={styles.ownerTask}>{data.company}</Text>
      <Text style={styles.textTask}>{taskType}</Text>

      <View style={styles.contentInfo}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            {meters === 'Não iniciada' ? meters : meters}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{data.location.city}</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.deleteTask}
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
