/*========== ROOT IMPORTS ==========*/
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {ProfileButton} from '../components/ProfileButton';

import auth from '@react-native-firebase/auth';

export function Profile({navigation}) {
  const {navigate} = navigation;
  const user = auth().currentUser;

  const profileImage = user?.photoURL.replace('s96-c', 's400-c');

  /*========== FRONT ==========*/
  return (
    <View style={style.profileContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigate('Home')}
          activeOpacity={0.8}
          style={style.backContainer}>
          <Text style={style.backText}>Voltar</Text>
        </TouchableOpacity>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>Perfil</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={style.editContainer}>
          <Text style={style.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={style.content}>
        <View style={style.user}>
          <Image style={style.userPhoto} source={{uri: profileImage}} />
          <Text style={style.userName}>{user?.displayName}</Text>
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
            title="Treinamento e/ou especialização"
            text="Entre em contato conosco para soolicitar um treinamento direto á sua equipe."
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#025248',
  },
  header: {
    marginTop: 36,
    paddingHorizontal: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backContainer: {
    backgroundColor: '#006458',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: 100,
    paddingHorizontal: 15,
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
  },

  titleContainer: {
    borderRadius: 20,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
  },
  editContainer: {
    backgroundColor: '#006458',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: 100,
    paddingHorizontal: 15,
  },

  editText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
  },

  subTitleScreen: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
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
    fontFamily: 'ClashGrotesk-Medium',
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
    fontFamily: 'ClashGrotesk-Medium',
    borderRadius: 20,
    backgroundColor: '#006458',
    width: '60%',
    paddingVertical: 10,
  },
  textSecton: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'ClashGrotesk-Medium',
  },
});
