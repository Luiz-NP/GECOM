import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {InputOutline} from 'react-native-input-outline';

// auth
import auth from '@react-native-firebase/auth';

import global from '../../assets/global.jsx';

export default function Register({navigation}) {
  const {navigate} = navigation;

  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signUpWithEmailAndPassword() {
    if (firstName === '' || lastName === '' || email === '' || password === '') return Alert.alert("preencha todos os campos");

    setIsLoading(!isLoading);

    // formating username
    const unformatted = `${firstName} ${lastName}`;
    const formatted = unformatted.split(' ').map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }).join(' ');
      
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({
          displayName: formatted,
        });
        navigate("Login");
        Alert.alert("User created");
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  return (
    <ImageBackground
      source={require('../../assets/img/welcomeBg.webp')}
      resizeMode={'cover'}
      style={{flex: 1, width: '100%'}}>
      <KeyboardAvoidingView
        style={{...global.containerBottom, ...styles.containerBottom}}>
        <Text style={global.title}>Registrar-se</Text>
        <Text style={global.subTitle}>
          Informe seus dados para realizar o cadastro de seu usuário.
        </Text>
        <View style={styles.inputArea}>
          <InputOutline
            onChangeText={setFirstName}
            placeholder="Nome"
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
            ref={inputRef}
            onChangeText={setLastName}
            placeholder="Sobrenome"
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
            characterCount={12}
            characterCountFontSize={16}
            characterCountColor="#19E5A6"
            characterCountFontFamily="ClashGrotesk-Medium"
            backgroundColor="transparent"
            activeColor="#19E5A6"
            secureTextEntry
          />
          <InputOutline
            placeholder="Autorização de técnico"
            fontFamily="ClashGrotesk-Medium"
            paddingVertical={8}
            bgColor="#121212"
            fontColor="white"
            fontSize={24}
            roundness={15}
            backgroundColor="transparent"
            activeColor="#19E5A6"
          />
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={signUpWithEmailAndPassword}
            disabled={isLoading}
            style={[isLoading ? styles.isLoadingTrue : styles.isLoadingFalse]}>
            {isLoading && <ActivityIndicator size="large" color="#19E5A6" />}
            <Text
              style={{
                ...styles.textSubmit,
                display: isLoading ? 'none' : 'flex',
              }}>
              Finalizar Registro
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerBottom: {
    height: 750,
  },
  inputArea: {
    marginVertical: 6,
  },
  btnArea: {
    marginVertical: 36,
  },
  isLoadingTrue: {
    borderWidth: 1,
    borderColor: '#19E5A6',
    borderRadius: 15,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isLoadingFalse: {
    borderWidth: 1,
    borderColor: '#19E5A6',
    borderRadius: 15,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSubmit: {
    color: '#19E5A6',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
  },
});
