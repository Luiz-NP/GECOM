import {useState} from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {BlurView, VibrancyView} from '@react-native-community/blur';

import {Svg, Path} from 'react-native-svg';

export const Login = ({navigation}) => {
  const {navigate} = navigation;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <View style={styles.logo}>
        <Svg
          width={48}
          height={48}
          style={styles.logoSvg}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M24 0C10.746 0 0 10.746 0 24s10.746 24 24 24 24-10.746 24-24S37.254 0 24 0zm11.46 40.366a29.4 29.4 0 00-.796-3.11c1.794-1.622 1.72-4.394-.144-5.766a30.1 30.1 0 00-.004-14.576c.372-.222.696-.508.95-.85a27.154 27.154 0 018.104 3.822c.28 1.33.43 2.704.43 4.114 0 6.764-3.384 12.744-8.54 16.366zM4 24c0-1.71.24-3.364.646-4.95a26.722 26.722 0 014.294.064l.08.452a30.06 30.06 0 00-4.974 5.348L4 24zm6.366-2.38a3.665 3.665 0 005.324-.98 27.445 27.445 0 0113.88 11.332c-1.532 1.55-1.512 3.996.038 5.39a27.505 27.505 0 01-5.12 6.614C14.684 44.21 6.64 37.452 4.55 28.582a27.44 27.44 0 015.816-6.962zm5.772-3.802a27.157 27.157 0 0112.648-2.754 4.342 4.342 0 003.332 2.332h.012a27.345 27.345 0 01.058 13.4l-.446.046c-3.448-5.65-8.866-10.262-15.526-12.602l-.078-.422zm12.124 25.714a29.626 29.626 0 003.626-5.254l.54-.016c.344 1.124.616 2.278.816 3.458a19.937 19.937 0 01-4.982 1.812zm14.206-27.196a29.273 29.273 0 00-6.378-2.622c-.216-1.99-2.082-3.648-4.238-3.632a29.592 29.592 0 00-4.048-5.708c6.642 1.284 12.122 5.86 14.664 11.962zM29.524 10.92a3.224 3.224 0 00-1.048 1.716c-4.912-.06-9.556 1.052-13.696 3.13a3.667 3.667 0 00-5.292.966 29.412 29.412 0 00-4.048-.144C8.392 9.222 15.592 4 24 4h.002a27.391 27.391 0 015.522 6.92z"
            fill="#000"
          />
        </Svg>
        <Text style={styles.logoText}>GECOM</Text>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput secureTextEntry style={styles.input} />
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.registerText}>Esqueceu sua senha?</Text>
          </Pressable>
          <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            // statusBarTranslucent={true}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
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
                  Insira seu e-mail abaixo para enviar um link de recuperação de
                  acesso.
                </Text>
                <TextInput cursorColor={'white'} style={modal.input} />
                <View style={modal.buttonContainer}>
                  <Pressable
                    style={[modal.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={modal.cancelText}>Cancelar</Text>
                  </Pressable>
                  <Pressable
                    style={[modal.buttonSend]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={modal.sendText}>Enviar</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.bottomArea}>
          <TouchableOpacity style={styles.button}>
            <Svg
              width={36}
              height={36}
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <Path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomArea: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24,
    // backgroundColor: 'red',
    width: '100%',
    height: 100,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    width: '100%',
    height: 100,
    marginBottom: 24,
  },
  logoSvg: {
    // backgroundColor: 'red',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'JetBrainMono',
    color: '#000',
  },
  userContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Raleway-Medium',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontFamily: 'Raleway-Medium',
    fontSize: 18,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  registerText: {
    color: '#000',
    marginLeft: 'auto',
    fontSize: 14,
    marginTop: 6,
    fontFamily: 'Ralway-Medium',
  },
});

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
