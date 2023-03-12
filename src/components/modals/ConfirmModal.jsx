/*========== ROOT IMPORTS ==========*/
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  useState,
} from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';

import {deleteTask} from '../../services/deleteTask';
import {deleteTaskImages} from '../../services/deleteTaskImages';

let loadingDelete = false;

console.log(loadingDelete);

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
          <LottieView
            autoPlay
            source={require('../../assets/img/confirm.json')}
            style={
              loadingDelete
                ? {display: 'flex', transform: [{scale: 0.8}]}
                : {display: 'none'}
            }
          />
          <View style={loadingDelete ? {display: 'none'} : styles.content}>
            <View style={styles.topArea}>
              <Text style={styles.title}>
                Deseja realmente excluir a tarefa?
              </Text>
            </View>
            <View style={styles.btnArea}>
              <TouchableOpacity
                onPress={() => setModal(false)}
                activeOpacity={0.8}
                style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  loadingDelete = true;
                  deleteTask(data, setUpdate, update);
                  setTimeout(() => {
                    setUpdate(!update);
                    setModal(false);
                    loadingDelete = false;
                  }, 1000);
                }}
                activeOpacity={0.8}
                style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
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

  content: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
  },

  btnArea: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 24,
  },

  cancelBtn: {
    width: 175,
    height: 70,
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
    width: 175,
    height: 70,
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

  title: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: 'white',
    marginVertical: 24,
  },

  topArea: {
    width: '100%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmDelete: {
    width: 100,
    height: 100,
    marginTop: 24,
    transform: [{scale: 0.5}],
  },
});
