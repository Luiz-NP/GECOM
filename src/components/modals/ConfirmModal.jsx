/*========== ROOT IMPORTS ==========*/
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

import {deleteTask} from '../../services/deleteTask';
import {deleteTaskImages} from '../../services/deleteTaskImages';

export const ConfirmModal = ({modal, setModal, update, setUpdate, data}) => {
  return (
    <Modal
      visible={modal}
      transparent={true}
      statusBarTranslucent
      animationType="fade">
      <StatusBar barStyle="light-content" translucent />
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>Deseja realmente excluir a tarefa?</Text>
          <View style={styles.btnArea}>
            <TouchableOpacity
              onPress={() => setModal(false)}
              activeOpacity={0.8}
              style={styles.cancelBtn}>
              <Text style={styles.cancelBtnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                deleteTask(data, setUpdate, update);
                deleteTask(data, setUpdate, update);
                setModal(false);
              }}
              activeOpacity={0.8}
              style={styles.confirmBtn}>
              <Text style={styles.confirmBtnText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  bottomContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#025248',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },

  btnArea: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 24,
  },

  cancelBtn: {
    width: 150,
    height: 60,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelBtnText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: 'white',
  },

  confirmBtn: {
    width: 150,
    height: 60,
    backgroundColor: '#00c4ac',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmBtnText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#1e1e1e',
  },
});
