/*========== ROOT IMPORTS ==========*/
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/*========== COMPONENT DECLARATION ==========*/
export function TaskHome({data, navigate}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.task}
      onPress={() =>
        navigate('TaskInfo', {
          data,
        })
      }>
      <Text style={styles.ownerTask}>Algar Telecom</Text>
      <Text style={styles.textTask}>Fiscalização de Campo</Text>

      <View style={styles.contentInfo}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{data.distance}km</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{data.location}</Text>
        </View>
      </View>
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
});
