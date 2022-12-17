import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Welcome({navigation}) {
  const {navigate} = navigation;

  return (
    <ImageBackground
      source={require('../../assets/img/welcomeBg.webp')}
      resizeMode={'cover'}
      style={{flex: 1, width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Vistoria Técnica</Text>
        <Text style={styles.subTitle}>
          Confiabilidade em seus processos, com a garantia de resultados.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigate('Login');
            }}
            style={styles.authBtn}
            activeOpacity={0.9}>
            <Text style={styles.authText}>Autenticar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('Register');
            }}
            style={styles.registerBtn}
            activeOpacity={0.9}>
            <Text style={styles.registerText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    backgroundColor: '#121212',
    height: 350,
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
  authBtn: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  registerBtn: {
    borderWidth: 1,
    borderColor: '#19E5A6',
    borderRadius: 15,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  authText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: 'black',
  },
  registerText: {
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 24,
    color: '#19E5A6',
  },
});
