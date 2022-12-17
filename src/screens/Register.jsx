import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {InputOutline} from 'react-native-input-outline';

import global from '../../assets/global.jsx';

export default function Register() {
  return (
    <ImageBackground
      source={require('../../assets/img/welcomeBg.webp')}
      resizeMode={'cover'}
      style={{flex: 1, width: '100%'}}>
      <KeyboardAvoidingView
        style={{...global.containerBottom, ...styles.containerBottom}}>
        <Text style={global.title}>Registrar-se</Text>
        <Text style={global.subTitle}>
          Informe seus dados para realizar o cadastro de seu usuário.
        </Text>
        <InputOutline
          placeholder="Nome"
          fontFamily="ClashGrotesk-Medium"
          paddingVertical={8}
          bgColor="#121212"
          fontColor="white"
          fontSize={24}
          roundness={15}
          backgroundColor="transparent"
          activeColor="#19E5A6"
        />
        <InputOutline
          placeholder="Sobrenome"
          fontFamily="ClashGrotesk-Medium"
          paddingVertical={8}
          bgColor="#121212"
          fontColor="white"
          fontSize={24}
          roundness={15}
          backgroundColor="transparent"
          activeColor="#19E5A6"
        />
        <InputOutline
          placeholder="E-mail"
          fontFamily="ClashGrotesk-Medium"
          paddingVertical={8}
          bgColor="#121212"
          fontColor="white"
          fontSize={24}
          roundness={15}
          backgroundColor="transparent"
          activeColor="#19E5A6"
        />
        <InputOutline
          placeholder="Senha"
          fontFamily="ClashGrotesk-Medium"
          paddingVertical={8}
          bgColor="#121212"
          fontColor="white"
          fontSize={24}
          roundness={15}
          trailingIcon={true}
          backgroundColor="transparent"
          activeColor="#19E5A6"
          secureTextEntry
        />
        <InputOutline
          placeholder="Autorização de técnico"
          fontFamily="ClashGrotesk-Medium"
          paddingVertical={8}
          bgColor="#121212"
          fontColor="white"
          fontSize={24}
          roundness={15}
          backgroundColor="transparent"
          activeColor="#19E5A6"
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerBottom: {
    height: 700,
  },
});
