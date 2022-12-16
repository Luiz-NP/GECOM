import {BlurView, VibrancyView} from '@react-native-community/blur';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ForgotPassword() {
  return (
    <View style={modal.container}>
      <BlurView
        style={modal.container}
        blurType="light"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      <View style={modal.modalContainer}>
        <Text style={modal.modalText}>Recuperar acesso</Text>
        <Text style={modal.modalsubText}>
          Insira seu e-mail abaixo para enviar um link de recuperação de acesso.
        </Text>
        <TextInput cursorColor={'white'} style={modal.input} />
        <View style={modal.buttonContainer}>
          <TouchableOpacity
            style={[modal.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={modal.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[modal.buttonSend]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={modal.sendText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const modal = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    marginTop: 'auto',
    backgroundColor: 'black',
    padding: 24,
    height: 300,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 24,
    fontFamily: 'Raleway-Bold',
    color: 'white',
  },
  modalsubText: {
    fontSize: 16,
    fontFamily: 'Raleway-Medium',
    marginBottom: 12,
    color: 'white',
  },
  buttonClose: {
    backgroundColor: 'black',
    width: 205,
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  buttonSend: {
    backgroundColor: 'white',
    width: 205,
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  cancelText: {
    fontFamily: 'Raleway-Medium',
    fontSize: 18,
    color: '#fff',
  },
  sendText: {
    fontFamily: 'Raleway-Medium',
    fontSize: 18,
    color: 'black',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontSize: 18,
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
});
