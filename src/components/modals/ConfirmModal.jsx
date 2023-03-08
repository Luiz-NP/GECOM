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

export const ConfirmModal = ({modal, setModal}) => {
  return (
    <Modal
      visible={modal}
      transparent={true}
      statusBarTranslucent
      animationType="fade">
      <StatusBar barStyle="light-content" translucent />
      <View style={styles.container}></View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginBottom: 24,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
