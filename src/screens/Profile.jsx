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
import { Svg, Path } from 'react-native-svg';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {ProfileButton} from '../components/ProfileButton';
import {CloseIconProfile} from '../assets/icons/CloseIconProfile';
import {LogOutIconProfile} from '../assets/icons/LogOutIconProfile';

import auth from '@react-native-firebase/auth';
import {logOut} from '../functions/logOut';

export function Profile({navigation}) {
  const {navigate} = navigation;
  const user = auth().currentUser;
  const darkMode = false;

  let profileImage = user?.photoURL?.replace('s96-c', 's400-c');

  if (profileImage === null || profileImage === undefined) {
    profileImage = 'https://i.imgur.com/yWia8IK.png';
  }

  console.log(JSON.stringify(user.displayName));

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
          {profileImage ? (
            <Image style={style.userPhoto} source={{ uri: profileImage }} />
          ) : (
            <Svg
              style={style.userPhoto}
              fill="none" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg">
              <Path clip-rule="evenodd" d="m1.25 12c0-5.93706 4.81294-10.75 10.75-10.75 5.9371 0 10.75 4.81294 10.75 10.75 0 3.0485-1.2699 5.8016-3.3075 7.7571-1.9308 1.8529-4.5543 2.9929-7.4425 2.9929-2.88818 0-5.51167-1.14-7.44249-2.9929-2.03762-1.9555-3.30751-4.7086-3.30751-7.7571zm16.8331 6.9685c-.431-1.2893-1.6492-2.2185-3.0831-2.2185h-6c-1.43387 0-2.65209.9292-3.08313 2.2185 1.62665 1.4213 3.75375 2.2815 6.08313 2.2815 2.3294 0 4.4565-.8602 6.0831-2.2815zm-6.0831-14.7185c-2.62335 0-4.75 2.12665-4.75 4.75 0 2.6234 2.12665 4.75 4.75 4.75 2.6234 0 4.75-2.1266 4.75-4.75 0-2.62335-2.1266-4.75-4.75-4.75z" 
                fill="rgb(255,255,255)" 
                fill-rule="evenodd" 
                style="fill: rgb(255, 255, 255);" 
              />
            </Svg>
          )}
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
            icon={
              'M20.25 5c-2.663 0-5.258-.943-7.8-2.85a.75.75 0 00-.9 0C9.008 4.057 6.413 5 3.75 5a.75.75 0 00-.75.75V11c0 5.001 2.958 8.676 8.725 10.948a.75.75 0 00.55 0C18.042 19.676 21 16 21 11V5.75a.75.75 0 00-.75-.75zm-8.993 2.63a.75.75 0 011.486 0l.007.102v6.5l-.007.102a.75.75 0 01-1.486 0l-.007-.102v-6.5l.007-.102zM12 18a1 1 0 110-2 1 1 0 010 2z'
            }
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
