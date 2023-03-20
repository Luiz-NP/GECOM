import { TouchableOpacity, StyleSheet, View, Text, BackHandler } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import LottieView from 'lottie-react-native';

import { LoadingIndicator } from '../components/LoadingIndicator';
import { downloadExcel } from '../services/downloadExcel';
import { useFocusEffect } from '@react-navigation/native';
import { calcMetersAndFinishTask } from '../functions/calcMetersAndFinishTask';

export const FinishTask = ({ navigation, route }) => {
  const { navigate } = navigation;
  const { taskID } = route.params;

  const [speed, setSpeed] = useState(1);
  const [meters, setMeters] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) setTimeout(() => setSpeed(0), 1900);
  }, [loading]);

  useEffect(() => {
    calcMetersAndFinishTask(taskID, setMeters, setLoading);
  }, []);

  // defining back button behavior to block user back action
  useFocusEffect(useCallback(() => {
    const onBackPress = () => {
      navigate('Home');
      return true;
    };

    const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
    );

    return () => subscription.remove();
  }, []));

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
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={() => navigate('Home')}>
        <Text style={styles.backButtonText}>Voltar</Text>
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
  backButton: {
    backgroundColor: '#025248',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'ClashGrotesk-Medium',
  },
});