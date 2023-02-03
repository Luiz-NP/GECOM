/*========== ROOT IMPORTS ==========*/
import {View, Text, Pressable, StyleSheet} from 'react-native';

/*========== COMPONENT DECLARATION ==========*/
export function TaskHome({distance, location, status}) {
  return (
    <Pressable style={styles.task}>
      <Text style={styles.textTask}>Fiscalização de Campo</Text>

      <View style={styles.contentInfo}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{distance}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfo}>{location}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#338f84',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  textTask: {
    fontSize: 32,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#FFFFFF',
    marginBottom: 10,
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
    fontSize: 18,
    color: '#FFFFFF',
  },
});
