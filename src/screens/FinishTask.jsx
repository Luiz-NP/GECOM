import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {useEffect, useState} from 'react';

import {downloadExcel} from '../services/downloadExcel';
import LottieView from 'lottie-react-native';

import {LoadingIndicator} from '../components/LoadingIndicator';

export const FinishTask = ({navigation}) => {
  const {navigate} = navigation;

  const [speed, setSpeed] = useState(1);
  const [meters, setMeters] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpeed(0), 2000);
  }, []);

  // loading state
  if (loading) return <LoadingIndicator />;

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/img/concluded.json')}
        style={styles.animation}
        autoPlay
        speed={speed}
      />
      <View style={styles.textArea}>
        <Text style={styles.title}>Tarefa finalizada</Text>
        <Text style={styles.text}>{meters} metros percorridos</Text>
      </View>
      <TouchableOpacity
        style={styles.downloadBtn}
        activeOpacity={0.8}
        onPress={() => downloadExcel(roadPoints)}>
        <Text style={styles.downloadBtnText}>Baixar relatório</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006458',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'ClashGrotesk-Medium',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'ClashGrotesk-Light',
  },
  animation: {
    width: 300,
    height: 300,
  },
  downloadBtn: {
    backgroundColor: '#025248',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  downloadBtnText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'ClashGrotesk-Medium',
  },
});
