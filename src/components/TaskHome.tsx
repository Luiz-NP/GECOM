import {View, Text, Pressable, StyleSheet} from 'react-native';

export const TaskHome = () => {
  return (
    <Pressable style={styles.task}>
      <Text style={styles.textTask}>Fiscalização de Campo</Text>

      <View style={styles.contentInfo}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>0.8Km</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfo}>São Paulo - SP</Text>
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
  },

  textTask: {
    fontSize: 24,
    marginBottom: 10,
  },

  contentInfo: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  info: {
    backgroundColor: '#00c4ac',
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInfo: {
    fontFamily: 'ClashGrotesk-Bold',
  },
});
