/*========== ROOT IMPORTS ==========*/
import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
/*========== LOCAL FILES & COMPONENTS ==========*/

export function Setitngs({navigation}) {
  const {navigate} = navigation;
  const [isEnabled, setIsEnabled] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

    async function toggleDarkMode() {
    setDarkMode(!darkMode);
    }

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    


  /*========== FRONT ==========*/
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={darkMode ? dark.profileContainer : style.profileContainer}
      >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={style.header}>
        <View style={style.userArea}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={darkMode ? dark.backBtn : style.backBtn}
            activeOpacity={0.8}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill={'white'}
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M9.474 5.209L3.22 11.468c-.147.146-.22.338-.22.53s.073.384.22.53l6.252 6.257a.742.742 0 00.527.217.753.753 0 00.534-1.278l-4.976-4.976h14.692a.75.75 0 000-1.5H5.557l4.978-4.979a.745.745 0 00-.006-1.054.749.749 0 00-1.055-.006z"
                fillRule="nonzero"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1.0}
            onPress={() => navigate('Profile')}></TouchableOpacity>
          <Text style={style.titleScreen}>Configurações</Text>
        </View>
      </View>
      <View style={darkMode ? dark.settingBubble : style.settingBubble}>
        <Text style={style.typeText}>Alertas</Text>
        <View style={darkMode ? dark.settingContainer : style.settingContainer}>
          <View style={style.textArea}>
            <Text style={style.settingTitle}>Suas tarefas</Text>
            <Text style={style.settingsInfo}>
              Receber alertas de novas tarefas ou alteração de status de suas
              tarefas.
            </Text>
          </View>
          <View style={style.switchArea}>
            <Switch
              trackColor={{false: '#767577', true: '#018c7b'}}
              thumbColor={isEnabled ? '#00c4ac' : '#025248'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={darkMode ? dark.settingContainer : style.settingContainer}>
          <View style={style.textArea}>
            <Text style={style.settingTitle}>Atualizações do aplicativo</Text>
            <Text style={style.settingsInfo}>
              Receber alerta de novas atualizações do aplicativo, incluindo
              novas funções.
            </Text>
          </View>
          <View style={style.switchArea}>
            <Switch
              trackColor={{false: '#767577', true: '#018c7b'}}
              thumbColor={isEnabled ? '#00c4ac' : '#025248'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      <View style={darkMode ? dark.settingBubble : style.settingBubble}>
        <View style={style.specialIndicator}>
          <Text style={style.typeText}>Personalização</Text>
          <Text style={style.indicator}>✨</Text>
        </View>
        <View style={darkMode ? dark.themeContainer : style.themeContainer}>
          <View style={style.textArea}>
            <Text style={style.settingTitle}>Tema escuro</Text>
          </View>
          <View style={style.switchArea}>
            <Switch
              trackColor={{false: '#767577', true: '#018c7b'}}
              thumbColor={darkMode ? '#00c4ac' : '#025248'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDarkMode}
              value={darkMode}
            />
          </View>
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
  backBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#006458',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 64,
    paddingBottom: 12,
    borderBottomColor: 'white',
  },
  titleScreen: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
  settingBubble: {
    borderRadius: 12,
    backgroundColor: '#00574d',
    width: '100%',
    marginTop: 12,
    padding: 12,
  },
  typeText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    letterSpacing: -0.5,
    color: '#ccc',
    marginBottom: 6,
    paddingHorizontal: 12,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#006458',
    borderRadius: 12,
    padding: 12,
    height: 75,
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  textArea: {
    flexDirection: 'column',
    width: '80%',
  },
  settingTitle: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  settingsInfo: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 14,
    color: '#ccc',
  },
  switchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specialIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    },
    indicator: {
      fontFamily: 'ClashGrotesk-Medium',
      fontSize: 16,
      color: '#fff',
      paddingHorizontal: 12,
    },
    themeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#006458',
      borderRadius: 12,
      padding: 12,
      height: 50,
      justifyContent: 'space-between',
      marginVertical: 2,
    },
});

const dark = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  settingBubble: {
    borderRadius: 12,
    backgroundColor: '#1e1e1e',
    width: '100%',
    marginTop: 12,
    padding: 12,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e2e2e',
    borderRadius: 12,
    padding: 12,
    height: 75,
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  backBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#1e1e1e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e2e2e',
    borderRadius: 12,
    padding: 12,
    height: 50,
    justifyContent: 'space-between',
    marginVertical: 2,
  },
});
