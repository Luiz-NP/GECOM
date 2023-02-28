/*========== ROOT IMPORTS ==========*/
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContext, useEffect, useState} from 'react';

/*========== LIBRARY IMPORTS ==========*/
import LottieView from 'lottie-react-native';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {AuthContext} from '../contexts/AuthContext';

/*========== COMPONENT DECLARATION ==========*/
export function Welcome({navigation}) {
  /*========== DESTRUCTURING ==========*/
  const {navigate} = navigation;

  setTimeout(() => setSpeed(0), 2680);

  /*========== STATES ==========*/
  const [loading, setLoading] = useState(true);
  const [speed, setSpeed] = useState(1);

  /*========== CONTEXTS ==========*/
  const {user} = useContext(AuthContext);

  /*========== USE EFFECTS ==========*/
  useEffect(() => {
    setTimeout(() => setLoading(false), 2800);
    if (user) navigate('Home');
  }, [user]);

  /*========== FRONT ==========*/
  // loads while verifying the user
  if (loading)
    return (
      <View style={styles.welcomeContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <LottieView
          style={{}}
          source={require('../assets/img/checklist.json')}        
          autoPlay 
          speed={speed}
        />
      </View>
    );


  return (
    !loading && (
      <View style={styles.welcomeContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <LottieView
          style={{width: '100%', height: '100%'}}
          source={require('../assets/img/lines.json')}
          loop
          autoPlay
        />
        <View style={styles.bottomContainer}>
          <View style={styles.textArea}>
            <Text style={styles.title}>Vistoria Técnica</Text>
            <Text style={styles.subTitle}>
              Confiabilidade em seus processos, com a garantia de resultados
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate('Auth')}
            style={styles.authBtn}
            activeOpacity={0.8}>
            <Text style={styles.authText}>Autenticar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={styles.registerBtn}
            activeOpacity={0.8}>
            <Text style={styles.registerText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#025248',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    backgroundColor: '#006458',
    marginTop: 'auto',
  },
  textArea: {
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#fff',
    textAlign: 'left',
    fontSize: 32,
  },
  subTitle: {
    fontFamily: 'ClashGrotesk-Light',
    color: '#fff',
    textAlign: 'left',
    fontSize: 24,
  },
  authBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#8af3cb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  authText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#006458',
    textAlign: 'center',
    fontSize: 24,
  },
  registerBtn: {
    width: '100%',
    height: 70,
    borderWidth: 1,
    borderColor: '#8af3cb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 36,
  },
  registerText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#8af3cb',
    textAlign: 'center',
    fontSize: 24,
  },
});
