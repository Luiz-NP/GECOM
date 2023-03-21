/*========== ROOT IMPORTS ==========*/
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { useState } from 'react';

/*========== LIBRARY IMPORTS ==========*/
import LottieView from 'lottie-react-native';

/*========== LOCAL FILES & COMPONENTS ==========*/
import { ForgotPasswordModal } from '../components/modals/ForgotPasswordModal';
import { authSignInWithEmailAndPassword } from '../functions/authSignInWithEmailAndPassword';
import { authSignInWithGoogle } from '../functions/authSignInWithGoogle';

import { GoogleIcon } from '../assets/icons/GoogleIcon';
import { ComeBackAuthIcon } from '../assets/icons/ComeBackAuthIcon';

/*========== COMPONENT DECLARATION ==========*/
export function Auth({ navigation }) {
  /*========== DESTRUCTURING ==========*/
  const { navigate } = navigation;

  /*========== STATES ==========*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState(false); // sets modal visibility

  /*========== FUNCTIONS ==========*/
  const handleSignInWithGoogle = () => {
    authSignInWithGoogle()
      .then(() => {
        console.log('Signed in with Google!');
        navigate('Home');
      })
      .catch(err => console.log(err))
  }

  /*========== FRONT ==========*/
  return (
    <View style={styles.authContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LottieView
        style={{ width: '100%', height: '100%' }}
        source={require('../assets/img/lines.json')}
        loop
        autoPlay
      />

      <ForgotPasswordModal modal={modal} setModal={setModal} />

      <TouchableOpacity
        style={styles.backBtn}
        activeOpacity={1}
        onPress={() => navigate('Welcome')}>
        <ComeBackAuthIcon />
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Autenticação</Text>
          <Text style={styles.subTitle}>
            Informe seus dados para realizar a autenticação de seu usuário.
          </Text>
        </View>

        <TextInput
          onChangeText={setEmail}
          placeholder="E-mail"
          placeholderTextColor={'#8af3cb'}
          style={styles.input} />
        <TextInput
          onChangeText={setPassword}
          placeholder="Senha"
          placeholderTextColor={'#8af3cb'}
          secureTextEntry={true}
          maxLength={8}
          style={styles.input} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={handleSignInWithGoogle}
            style={styles.googleBtn}
            activeOpacity={0.8}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => authSignInWithEmailAndPassword(email, password, navigate)}
            style={styles.authBtn}
            activeOpacity={0.8}>
            <Text style={styles.authText}>Autenticar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={() => setModal(true)}>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: '#025248',
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    width: 70,
    height: 70,
    left: 6,
    backgroundColor: '#006458',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    top: 360,
    zIndex: 1,
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
    marginTop: 6,
    marginBottom: 6,
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
    width: '73%',
    height: 70,
    backgroundColor: '#8af3cb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  googleBtn: {
    width: '25%',
    height: 70,
    backgroundColor: '#8af3cb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  authText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#006458',
    textAlign: 'center',
    fontSize: 24,
  },
  forgotText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
    paddingBottom: 36,
  },
  input: {
    width: '100%',
    height: 70,
    borderWidth: 2,
    borderColor: '#8af3cb',
    padding: 12,
    backgroundColor: 'transparent',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#fff',
    fontSize: 24,
  },
});
