import {View, Text, Pressable, StyleSheet} from 'react-native';

interface ITaksProps {
  distance: number;
  location: string;
  status: boolean;
}

export const TaskHome = ({distance, location, status}: ITaksProps) => {
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
  },

  textTask: {
    fontSize: 24,
    marginBottom: 10,
  },

  contentInfo: {
    width: '60%',
    flexDirection: 'row',
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
    fontFamily: 'ClashGrotesk-Bold',
  },
});
