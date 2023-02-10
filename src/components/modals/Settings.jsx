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
import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const Settings = ({modal, setModal}) => {
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
            <Text style={styles.titleText}>Configurações</Text>
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
          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionType}>
              <Svg
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M9.042 19.003h5.916a3 3 0 01-5.916 0zm2.958-17a7.5 7.5 0 017.5 7.5v4l1.418 3.16A.95.95 0 0120.052 18h-16.1a.95.95 0 01-.867-1.338l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0112 2.004z"
                  fill="white"
                />
              </Svg>
              <Text style={styles.optionText}>Notificações</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionType}>
              <Svg
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2V4a8 8 0 110 16z"
                  fill="white"
                />
              </Svg>
              <Text style={styles.optionText}>Tema</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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
    backgroundColor: '#025248',
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

  optionText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12,
    fontFamily: 'ClashGrotesk-Regular',
  },
});
