/*========== ROOT IMPORTS ==========*/
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

/*========== LOCAL FILES & COMPONENTS ==========*/
import { ProfileButton } from '../components/ProfileButton';
import { CloseIconProfile } from '../assets/icons/CloseIconProfile';
import { LogOutIconProfile } from '../assets/icons/LogOutIconProfile';

import { FirstBubble } from '../assets/icons/FirstBubble';

import auth from '@react-native-firebase/auth';
import { logOut } from '../functions/logOut';
import { SecondBubble } from '../assets/icons/SecondBubble';
import { ThirdBubble } from '../assets/icons/ThirdBubble';

export function Profile({ navigation }) {
  const { navigate } = navigation;
  const user = auth().currentUser;
  const darkMode = false;

  let profileImage = user?.photoURL?.replace('s96-c', 's400-c');

  if (!profileImage) profileImage = 'https://i.imgur.com/yWia8IK.png';

  /*========== FRONT ==========*/
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={darkMode ? dark.profileContainer : style.profileContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigate('Home')}
          activeOpacity={0.8}
          style={darkMode ? dark.backContainer : style.backContainer}>
          <CloseIconProfile />
        </TouchableOpacity>

        <View style={style.titleContainer}>
          <Text style={style.titleText}>Perfil</Text>
        </View>

        <TouchableOpacity
          onPress={() => logOut(navigate)}
          activeOpacity={0.8}
          style={darkMode ? dark.logOutContainer : style.logOutContainer}>
          <LogOutIconProfile />
        </TouchableOpacity>
      </View>

      <View style={style.content}>
        <View style={style.user}>
          <Image style={style.userPhoto} source={{ uri: profileImage }} />
          <Text style={style.userName}>{user?.displayName}</Text>
          <Text style={style.userDescription}>QuarkzPlace Ltd.</Text>
        </View>

        <View style={style.functions}>
          <View style={darkMode ? dark.titleSection : style.titleSection}>
            <Text style={style.textSecton}>Como podemos te ajudar?</Text>
          </View>

          <ProfileButton
            title="Algo deu errado?"
            text="Contate o nosso suporte para solução de problemas em seu aplicativo."
            icon={<FirstBubble />}
          />
          <ProfileButton
            title="Dúvidas?"
            text="Contate o nosso suporte para aprender sobre a plataforma."
            icon={<SecondBubble />}
          />
          <ProfileButton
            title="Treinamento e/ou especialização"
            text="Entre em contato conosco para soolicitar um treinamento direto á sua equipe."
            icon={<ThirdBubble />}
          />
        </View>
      </View>
    </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006458',
    borderRadius: 100,
    width: 40,
    height: 40,
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
  logOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006458',
    borderRadius: 100,
    width: 40,
    height: 40,
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
    borderRadius: 15,
    backgroundColor: '#006458',
    width: '60%',
    paddingVertical: 10,
  },
  textSecton: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
  },
});

const dark = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  backContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  logOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  titleSection: {
    fontFamily: 'ClashGrotesk-Medium',
    borderRadius: 15,
    backgroundColor: '#1E1E1E',
    width: '60%',
    paddingVertical: 10,
  },
});
