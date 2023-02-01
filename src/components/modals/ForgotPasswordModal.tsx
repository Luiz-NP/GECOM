import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import auth from '@react-native-firebase/auth';

interface IModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ForgotPasswordModal = ({modal, setModal}: IModalProps) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (email.trim()) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setModal(false);
        });
    }
  };

  return (
    <Modal visible={modal} transparent={true} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Nos informe seu email:</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          placeholder="Email.."
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.authBtn}
          activeOpacity={0.8}
          onPress={handleForgotPassword}>
          <Text style={styles.authText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.cancel}>
          <Text onPress={() => setModal(false)}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#025248',
  },

  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontFamily: 'ClashGrotesk-Bold',
  },

  input: {
    width: '90%',
    height: 70,
    borderWidth: 2,
    borderColor: '#8af3cb',
    padding: 12,
    backgroundColor: 'transparent',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#fff',
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

  authText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#006458',
    textAlign: 'center',
    fontSize: 24,
  },

  cancel: {
    width: '73%',
    marginTop: 20,
  },
});
