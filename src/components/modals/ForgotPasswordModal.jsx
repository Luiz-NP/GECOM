/*========== ROOT IMPORTS ==========*/
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {Path, Svg} from 'react-native-svg';

/*========== FIREBASE IMPORTS ==========*/
import auth from '@react-native-firebase/auth';

export const ForgotPasswordModal = ({modal, setModal}) => {
  /*========== STATES ==========*/
  const [email, setEmail] = useState('');

  /*========== FUNCTIONS ==========*/
  function handleForgotPassword() {
    if (email.trim()) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setModal(false);
        });
    }
  }

  /*========== FRONT ==========*/
  return (
    <Modal
      visible={modal}
      transparent={true}
      statusBarTranslucent
      animationType="fade">
      <StatusBar barStyle="light-content" translucent />
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Esqueceu sua senha?</Text>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={styles.closeButton}>
              <Svg
                width={32}
                height={32}
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="M12 10.93l5.719-5.72a.749.749 0 111.062 1.062l-5.72 5.719 5.719 5.719a.75.75 0 11-1.061 1.062L12 13.053l-5.719 5.719A.75.75 0 015.22 17.71l5.719-5.719-5.72-5.719A.752.752 0 016.281 5.21z" />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.optionType}>
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder="E-mail"
              placeholderTextColor={'#fff'}
              style={styles.inputText}></TextInput>
          </View>
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={styles.forgotBtn}
            activeOpacity={0.8}>
            <Text style={styles.forgotText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    // <Modal visible={modal} transparent={true} animationType="slide">
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Nos informe seu email:</Text>
    //     <TextInput
    //       onChangeText={text => setEmail(text)}
    //       placeholder="Email.."
    //       style={styles.input}
    //     />
    //     <TouchableOpacity
    //       style={styles.authBtn}
    //       activeOpacity={0.8}
    //       onPress={handleForgotPassword}>
    //       <Text style={styles.authText}>Enviar</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity activeOpacity={0.8} style={styles.cancel}>
    //       <Text onPress={() => setModal(false)}>Cancelar</Text>
    //     </TouchableOpacity>
    //   </View>
    // </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: -1,
  },
  bottomContainer: {
    marginTop: 'auto',
    height: 'auto',
    backgroundColor: '#006458',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  closeButton: {
    marginLeft: 'auto',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
  },
  titleContainer: {
    marginBottom: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionItem: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  optionType: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputText: {
    color: 'white',
    fontSize: 18,
    width: '100%',
    borderRadius: 8,
    borderColor: '#8af3cb',
    padding: 16,
    borderWidth: 2,
    fontFamily: 'ClashGrotesk-Regular',
  },
  forgotBtn: {
    width: '100%',
    height: 60,
    backgroundColor: '#025248',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  forgotText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'ClashGrotesk-Medium',
  },
});
