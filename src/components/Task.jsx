import {StyleSheet, Text, View} from 'react-native';

export default function Task() {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.taskStatus}>PENDENTE</Text>
      </View>
      <View style={styles.infoItems}>
        <Text style={styles.taskTitle}>Fiscalização de Campo</Text>
        <View style={styles.taskLocal}>
          <Text style={styles.localTitle}>Rio de Janeiro - SP</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 15,
    margin: 12,
    padding: 25,
    marginTop: 36,
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
  },
  statusContainer: {
    position: 'absolute',
    top: -25,
    left: 25,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6F00',
    padding: 12,
    borderRadius: 25,
  },
  taskStatus: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    color: 'white',
  },
  taskLocal: {
    backgroundColor: '#121212',
    width: 145,
    marginTop: 6,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  infoItems: {
    marginTop: 16,
  },
  taskTitle: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: 'white',
  },
  localTitle: {
    fontFamily: 'ClashGrotesk-Regular',
    fontSize: 16,
    color: 'white',
  },
});
