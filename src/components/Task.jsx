import {StyleSheet, Text, View} from 'react-native';

export default function Task() {
  const local = 'Rio de Janeiro - RJ';
  const taskType = 'Fiscalização de Campo';
  const status = true;

  if (status === true) {
    statusBadge = 'CONCLUÍDA';
  } else {
    statusBadge = 'PENDENTE';
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.statusContainer,
          backgroundColor: status ? '#198A19' : '#FF6F00',
        }}>
        <Text style={styles.taskStatus}>{statusBadge}</Text>
      </View>
      <View style={styles.infoItems}>
        <Text style={styles.taskTitle}>{taskType}</Text>
        <View style={styles.taskLocal}>
          <Text style={styles.localTitle}>{local}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
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
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
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
