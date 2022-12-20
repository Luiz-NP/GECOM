import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {InputOutline} from 'react-native-input-outline';
import {ClipPath, Defs, Path, Svg, Use} from 'react-native-svg';

import { useState } from 'react';

// auth
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import "../configs/google.config";

import global from '../../assets/global.jsx';

export default function Login({navigation}) {
  const {navigate} = navigation;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // email/password sign-in
  async function handleSignInWithEmailAndPassword() {
    if (email === '' || password === '') return Alert.alert("preencha todos os campos")
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("Home");
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error.code);
      })
  }

  // google sign-in
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
        <View style={styles.inputArea}>
          <InputOutline
            onChangeText={setEmail}
            placeholder="E-mail"
            fontFamily="ClashGrotesk-Medium"
            paddingVertical={8}
            bgColor="#121212"
            fontColor="white"
            fontSize={24}
            roundness={15}
            backgroundColor="transparent"
            activeColor="#19E5A6"
          />
          <InputOutline
            onChangeText={setPassword}
            placeholder="Senha"
            fontFamily="ClashGrotesk-Medium"
            paddingVertical={8}
            bgColor="#121212"
            fontColor="white"
            fontSize={24}
            roundness={15}
            backgroundColor="transparent"
            activeColor="#19E5A6"
            secureTextEntry
          />
        </View>
        <View style={styles.btnArea}>
          <View style={styles.authArea}>
            <TouchableOpacity 
              onPress={() => onGoogleButtonPress().then(() => {
                console.log('Signed in with Google!')
                navigate("Home");
              })} style={styles.btnGoogle} activeOpacity={0.8}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 48 48"
                width={36}
                height={36}>
                <Defs>
                  <Path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </Defs>
                <ClipPath id="b">
                  <Use xlinkHref="#a" overflow="visible" />
                </ClipPath>
                <Path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <Path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <Path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <Path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignInWithEmailAndPassword} style={styles.btnSubmit} activeOpacity={0.8}>
              <Text style={styles.submitText}>Autenticar</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#19E5A6',
    borderRadius: 15,
    width: '75%',
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
  inputArea: {
    marginVertical: 8,
  },
  authArea: {
    flexDirection: 'row',
  },
  btnGoogle: {
    borderWidth: 1,
    borderColor: '#19E5A6',
    borderRadius: 15,
    width: '22%',
    marginRight: 12,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
});
