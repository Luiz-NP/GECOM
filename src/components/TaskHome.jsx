/*========== ROOT IMPORTS ==========*/
import { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { GarbageIcon } from '../assets/icons/GarbageIcon';
import { UpdateContext } from '../contexts/UpdateContext';

import { deleteTask } from '../services/deleteTask';
import { deleteTaskImages } from '../services/deleteTaskImages';

const taskOwner = 'Algar Telecom';
const taskType = 'Fiscalização de Campo';

/*========== COMPONENT DECLARATION ==========*/
export function TaskHome({data, navigate, setModal}) {
  const handleConfirmationWantDeleteTask = () => {
    setModal(true);
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
        onPress={handleConfirmationWantDeleteTask}>
        <GarbageIcon />
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
