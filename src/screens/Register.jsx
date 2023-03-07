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

import LottieView from 'lottie-react-native';

import { signUp } from '../functions/signUp';

import { ComeBackAuthIcon } from '../assets/icons/ComeBackAuthIcon';

/*========== COMPONENT DECLARATION ==========*/
export function Register({ navigation }) {
  /*========== DESTRUCTURING ==========*/
  const { navigate } = navigation;

  /*========== STATES ==========*/
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*========== FRONT ==========*/
  return (
    <View style={styles.registerContainer}>

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

      <TouchableOpacity
        style={styles.backBtn}
        activeOpacity={1}
        onPress={() => navigate('Welcome')}>
        <ComeBackAuthIcon />
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Registrar-se</Text>
          <Text style={styles.subTitle}>
            Informe seus dados para realizar o cadastro de seu usuário.
          </Text>
        </View>

        <TextInput
          onChangeText={setFirstName}
          placeholder="Nome"
          placeholderTextColor={'#8af3cb'}
          style={styles.input} />
        <TextInput
          onChange={setLastName}
          placeholder="Sobrenome"
          placeholderTextColor={'#8af3cb'}
          style={styles.input} />
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
            onPress={() => signUp(firstName, lastName, email, password)}
            style={styles.registerBtn}
            activeOpacity={0.8}>
            <Text style={styles.registerText}>Finalizar registro</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
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
    top: 212,
    zIndex: 1,
  },
  bottomContainer: {
    width: '100%',
    height: 600,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    backgroundColor: '#006458',
    marginTop: 'auto',
    zIndex: 0,
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
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#8af3cb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 18,
  },
  registerText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#006458',
    textAlign: 'center',
    fontSize: 24,
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
