import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import Svg, {Defs, Path, ClipPath, Use} from 'react-native-svg';

export const Register = (): JSX.Element => {
  return (
    <View style={styles.registerContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Registrar-se</Text>
          <Text style={styles.subTitle}>
            Informe seus dados para realizar o cadastro de seu usuário.
          </Text>
        </View>
        <TextInput
          placeholder="Nome"
          placeholderTextColor={'#8af3cb'}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="Sobrenome"
          placeholderTextColor={'#8af3cb'}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor={'#8af3cb'}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="Senha"
          placeholderTextColor={'#8af3cb'}
          secureTextEntry={true}
          maxLength={8}
          style={styles.input}></TextInput>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.registerBtn} activeOpacity={0.8}>
            <Text style={styles.registerText}>Finalizar registro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: '#025248',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: 600,
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
