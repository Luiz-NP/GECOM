import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Welcome = ({ navigation }: any): JSX.Element => {
  const { navigate } = navigation;

  return (
    <View style={styles.welcomeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Vistoria Técnica</Text>
          <Text style={styles.subTitle}>
            Confiabilidade em seus processos, com a garantia de resultados
          </Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigate("login")}
          style={styles.authBtn} 
          activeOpacity={0.8}>
          <Text style={styles.authText}>Autenticar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigate("register")}
          style={styles.registerBtn} 
          activeOpacity={0.8}>
          <Text style={styles.registerText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#025248',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: 350,
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
});
