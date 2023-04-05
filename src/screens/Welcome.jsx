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
import {Path, Svg} from 'react-native-svg';

/*========== COMPONENT DECLARATION ==========*/
export function Welcome({navigation}) {
  /*========== DESTRUCTURING ==========*/
  const {navigate} = navigation;

  setTimeout(() => setSpeed(0), 2700);

  /*========== STATES ==========*/
  const [loading, setLoading] = useState(true);
  const [speed, setSpeed] = useState(1);

  /*========== CONTEXTS ==========*/
  const {user} = useContext(AuthContext);

  /*========== USE EFFECTS ==========*/
  useEffect(() => {
    setTimeout(() => {
      if (user?.emailVerified) navigate('Home');
      
      setTimeout(() => setLoading(false), 1000);

    }, 2000);
    
  }, [user]);

  /*========== FRONT ==========*/
  // loads while verifying the user
  if (loading)
    return (
      <View style={loadingStyle.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <LottieView
          source={require('../assets/img/checklist.json')}
          autoPlay
          speed={speed}
        />
        <View style={loadingStyle.bottomContainer}>
          <Text style={loadingStyle.subTitle}>from</Text>
          <View style={loadingStyle.brandName}>
            <Svg
              width={24}
              height={24}
              fill={'#02c5ad'}
              style={{marginTop: 3}}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 824.89 812.31">
              <Path
                d="M614.52 1099.62c-54.41.6-97.19-.88-139.24-10.84a139.76 139.76 0 01-33.61-12.32c-39.48-20.92-47.83-67.2-17.82-100.48 17.61-19.54 40.09-32.4 63.3-44C495 928 503 924 511.39 921.5c8-2.44 8.42-6.49 7-13.74-10.33-52.76-28.58-103.06-47.64-153.07-28.37-74.43-59-147.93-91.32-220.74a305 305 0 01-19.11-60.15c-1.73-8.05 1.59-14.87 5.84-21.24 8.67-13 19.92-23.54 32.31-32.94 57.12-43.29 121.82-70.62 190.28-89.77 64.36-18 129.68-31.71 196-39.62A380.64 380.64 0 01931.92 301c26 7.15 38.81 22.11 40.85 49.13 3 39.29 5.65 78.6 9.5 117.83q7.31 74.3 18 148.18c5.87 40.51 12.21 81 20.1 121.12 3.14 16 8.14 31.67 12.1 47.53 1.12 4.49 3.72 4.94 7.68 4.37a330.39 330.39 0 0184.88-1.53 84.23 84.23 0 0134.7 11.41c21.48 13 29.36 36.51 22.67 65.65-3.8 16.54-12.63 29.8-24.31 41.88-39.6 41-86.93 70.67-137.9 94.9-86.41 41.09-177.5 67.16-271.56 83.53-48.16 8.33-96.63 13.53-134.11 14.62zm401.68-343.84a72.16 72.16 0 01-17.59 19.64 476.78 476.78 0 01-90.67 55.89c-95.88 45.06-197.16 63.48-302.58 62.58-29.15-.25-57.71-2.26-85-16.29.41 2.95.55 5.1 1 7.18 5.92 26.39 12.22 52.7 17.61 79.19 1.49 7.34 4.91 10.94 11.65 12.76 19.6 5.29 39.66 7 59.81 7.7 55.4 2 110.11-4.12 164.32-15.09 77.66-15.71 151.83-40.94 220.06-82a135.32 135.32 0 0037.45-32.9c5.36-6.87 8.2-13.61 4.75-22.47-2.61-6.7-3.87-13.92-5.76-20.9-4.84-17.74-9.67-35.51-15.05-55.29zM778.05 405.7c-2.34.72-4.7 1.39-7 2.19-52.36 18.05-105.27 34.2-159 47.48-48.33 11.94-97 21.87-146.85 24.85-27.86 1.67-55.44.19-82.51-12.36A30.34 30.34 0 00396.26 480c13.84 6.81 28.63 9.46 43.82 10.25 32.64 1.71 64.73-3.18 96.79-8.31 59.58-9.54 116.65-28.35 173.57-47.54 23.19-7.77 46.09-16.56 67.61-28.7z"
                transform="translate(-359.85 -287.42)"
              />
            </Svg>
            <Text style={loadingStyle.title}>Cartola Preta</Text>
          </View>
        </View>
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

const loadingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#025248',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    marginBottom: 36,
    marginTop: 'auto',
  },
  title: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#02c5ad',
    marginLeft: 6,
    textAlign: 'center',
    fontSize: 24,
  },
  subTitle: {
    fontFamily: 'ClashGrotesk-Light',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  brandName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
