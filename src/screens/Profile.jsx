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
import Svg, {Path} from 'react-native-svg';
/*========== LOCAL FILES & COMPONENTS ==========*/
import {ProfileButton} from '../components/ProfileButton';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function Profile({navigation}) {
  const {navigate} = navigation;
  const user = auth().currentUser;
  const darkMode = false;

  const profileImage = user?.photoURL.replace('s96-c', 's400-c');

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
          <Svg
            width={32}
            height={32}
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 10.93l5.719-5.72a.749.749 0 111.062 1.062l-5.72 5.719 5.719 5.719a.75.75 0 11-1.061 1.062L12 13.053l-5.719 5.719A.75.75 0 015.22 17.71l5.719-5.719-5.72-5.719A.752.752 0 016.281 5.21z" />
          </Svg>
        </TouchableOpacity>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>Perfil</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            auth()
              .signOut()
              .then(() => navigate('Welcome'));

            GoogleSignin.signOut();
          }}
          activeOpacity={0.8}
          style={darkMode ? dark.logOutContainer : style.logOutContainer}>
          <Svg
            width={28}
            height={28}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M12.75 17.5a.75.75 0 000-1.5H6.5a2 2 0 01-2-2V6a2 2 0 012-2h6.25a.75.75 0 000-1.5H6.5A3.5 3.5 0 003 6v8a3.5 3.5 0 003.5 3.5h6.25zm.991-11.301a.75.75 0 011.06.042l3 3.25a.75.75 0 010 1.018l-3 3.25A.75.75 0 1113.7 12.74l1.838-1.991H7.75a.75.75 0 010-1.5h7.787l-1.838-1.991a.75.75 0 01.042-1.06z"
              fill="white"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View style={style.content}>
        <View style={style.user}>
          <Image style={style.userPhoto} source={{uri: profileImage}} />
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
  logOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006458',
    borderRadius: 100,
    width: 40,
    height: 40,
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
