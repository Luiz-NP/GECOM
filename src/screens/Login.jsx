import {useState} from 'react';
import {
  Pressable,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Svg, Path} from 'react-native-svg';

export default function Login({navigation}) {
  const {navigate} = navigation;

  return (
    <ImageBackground
      source={require('../../assets/img/welcomeBg.webp')}
      resizeMode={'cover'}
      style={{flex: 1, width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Autenticação</Text>
        <Text style={styles.subTitle}>
          Informe seus dados para realizar a autenticação de seu usuário.
        </Text>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={'#19E5A6'}
            style={styles.input}></TextInput>
          <TextInput
            placeholder="Senha"
            placeholderTextColor={'#19E5A6'}
            style={styles.input}></TextInput>
        </View>

        <TouchableOpacity style={styles.btnSubmit} activeOpacity={0.8}>
          <Text style={styles.submitText}>Autenticar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnForgot} activeOpacity={0.8}>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    backgroundColor: '#121212',
    height: 480,
    padding: 24,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 32,
  },
  subTitle: {
    color: 'white',
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 24,
    marginBottom: 6,
  },
  input: {
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#19E5A6',
    padding: 16,
    width: '100%',
    height: 70,
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 24,
  },
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
});
