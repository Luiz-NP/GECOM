import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// auth
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import "../configs/google.config";

import global from '../../assets/global.jsx';

export default function Login({navigation}) {

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <ImageBackground
      source={require('../../assets/img/welcomeBg.webp')}
      resizeMode={'cover'}
      style={{flex: 1, width: '100%'}}>
      <View style={global.containerBottom}>
        <Text style={global.title}>Autenticação</Text>
        <Text style={global.subTitle}>
          Informe seus dados para realizar a autenticação de seu usuário.
        </Text>
        <View style={global.inputArea}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={'#19E5A6'}
            style={global.input}></TextInput>
          <TextInput
            placeholder="Senha"
            placeholderTextColor={'#19E5A6'}
            style={global.input}></TextInput>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnSubmit} activeOpacity={0.8}>
            <Text style={styles.submitText}>Autenticar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnForgot} activeOpacity={0.8}>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnSubmit: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  submitText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: 'black',
  },
  btnForgot: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  forgotText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 20,
    color: '#f5f5f5',
  },
  btnArea: {
    flexDirection: 'column',
  },
});
