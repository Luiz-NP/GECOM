import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import Svg, {Defs, Path, ClipPath, Use} from 'react-native-svg';
import LottieView from 'lottie-react-native';

export const Auth = ({navigation}: any): JSX.Element => {
  const {navigate} = navigation;
  return (
    <View style={styles.authContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LottieView
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/img/lines.json')}
        loop
        autoPlay
      />
      <TouchableOpacity
        style={styles.backBtn}
        activeOpacity={1}
        onPress={() => navigate('Welcome')}>
        <Svg width={48} height={48} viewBox="0 0 24 24" fill="none">
          <Defs>
            <ClipPath id="prefix__clip0">
              <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
          </Defs>
          <Path
            d="M20.5 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20.5v-2z"
            fill="#8af3cb"
            clipPath="url(#prefix__clip0)"
          />
        </Svg>
      </TouchableOpacity>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8}>
            <Svg viewBox="0 0 32 32" width={36} height={36}>
              <Defs>
                <Path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </Defs>
              <ClipPath id="b">
                <Use xlinkHref="#a" />
              </ClipPath>
              <Path
                d="M0 37V11l17 13z"
                clipPath="url(#b)"
                fill="#006458"
                transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
              />
              <Path
                d="M0 11l17 13 7-6.1L48 14V0H0z"
                clipPath="url(#b)"
                fill="#006458"
                transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
              />
              <Path
                d="M0 37l30-23 7.9 1L48 0v48H0z"
                clipPath="url(#b)"
                fill="#006448"
                transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
              />
              <Path
                d="M48 48L17 24l-4-3 35-10z"
                clipPath="url(#b)"
                fill="#006458"
                transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authBtn} activeOpacity={0.8}>
            <Text style={styles.authText}>Autenticar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
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
  backBtn: {
    position: 'absolute',
    width: 70,
    height: 70,
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
