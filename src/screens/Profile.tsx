import React from 'react';

import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {ProfileButton} from '../components/ProfileButton';

export const Profile = (): JSX.Element => {
  return (
    <View style={style.profileContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={style.header}>
        <Text style={style.titleScreen}>Perfil</Text>
        <Text style={style.subTitleScreen}>Suas informações</Text>
      </View>

      <View style={style.content}>
        <View style={style.user}>
          <Text style={style.userPhoto}>{''}</Text>
          <Text style={style.userName}>USER NAME</Text>
          <Text style={style.userDescription}>QuarkzPlace Ltd.</Text>
        </View>

        <View style={style.functions}>
          <View style={style.titleSection}>
            <Text style={style.textSecton}>Como podemos te ajudar?</Text>
          </View>

          <ProfileButton
            title="Algo deu errado?"
            text="Contate o nosso suporte para solução de problemas em seu aplicativo."
          />
          <ProfileButton
            title="Dúvidas?"
            text="Contate o nosso suporte para aprender sobre a plataforma."
          />
          <ProfileButton
            title=" Treinamento e/ou especialização"
            text="Entre em contato conosco para soolicitar um treinamento direto á sua equipe."
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#025248',
  },
  header: {
    backgroundColor: '#006458',
    flex: 0.17,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingLeft: 30,
    paddingBottom: 30,
    justifyContent: 'flex-end',
  },
  titleScreen: {
    fontFamily: 'ClashGrotesk-Bold',
    fontSize: 32,
    color: '#FFFFFF'
  },
  subTitleScreen: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Bold',
  },
  content: {
    flex: 0.8,
    alignItems: 'center',
  },
  user: {
    paddingTop: 30,
    width: 200,
    alignItems: 'center',
  },
  userPhoto: {
    borderRadius: 100,
    backgroundColor: '#006458',
    width: '100%',
    height: 200,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  userName: {
    fontFamily: 'ClashGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 15,
  },
  userDescription: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    color: '#00e4c8',
  },
  functions: {
    marginTop: 25,
    width: '100%',
    alignItems: 'center',
  },
  titleSection: {
    fontFamily: 'ClashGrotesk-Bold',
    borderRadius: 20,
    backgroundColor: '#006458',
    width: '80%',
    paddingVertical: 10,
  },
  textSecton: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'ClashGrotesk-Bold',
  },
});
