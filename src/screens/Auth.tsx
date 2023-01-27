import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export const Auth = (): JSX.Element => {
  return (
    <View style={styles.authContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Autenticação</Text>
          <Text style={styles.subTitle}>
            Informe seus dados para realizar a autenticação de seu usuário.
          </Text>
        </View>
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
        <TouchableOpacity style={styles.authBtn} activeOpacity={0.8}>
          <Text style={styles.authText}>Autenticar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: '#025248',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: 450,
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
    width: '100%',
    height: 70,
    backgroundColor: '#8af3cb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  authText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: 'black',
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
  },
  registerText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#8af3cb',
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
