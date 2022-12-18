import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import global from '../../assets/global.jsx';

export default function Settings({navigation}) {
  const {navigate} = navigation;
  return (
    <View style={global.container}>
      <View style={global.topBar}>
        <View style={global.screenInfo}>
          <TouchableOpacity
            onPress={() => {
              navigate('Home');
            }}
            style={styles.backBtn}
            activeOpacity={0.8}>
            <Svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill={'white'}
              xmlns="http://www.w3.org/2000/svg">
              <Path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" />
            </Svg>
          </TouchableOpacity>
          <View style={global.titleArea}>
            <Text style={global.title}>Configurações</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.settingsContainer}>
        <View style={styles.exampleArea}>
          <View style={styles.exampleIndicator}>
            <Text style={styles.indicatorText}>Texto de exemplo</Text>
          </View>
          <View style={styles.exampleItem}>
            <Text style={styles.exampleText}>
              Lorem ipsum dolor sit amet. Et optio amet nam dignissimos animi in
              necessitatibus nesciunt. Ut voluptatem reiciendis sed dicta
              voluptas id doloremque soluta sit ipsa dolorem est doloremque
              saepe.
            </Text>
          </View>
        </View>
        <View style={styles.settingsArea}>
          <View style={styles.betaBadge}>
            <Text style={styles.betaText}>✨ BETA</Text>
          </View>
          <View style={styles.settingsItem}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill={'#19E5A6'}
              viewBox="0 0 24 24">
              <Path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z" />
            </Svg>
            <View style={styles.settingsText}>
              <Text style={styles.settingTitle}>Alterar tema</Text>
              <Text style={styles.settingsubTitle}>
                Escolha o tema que mais atenda sua necessidade.
              </Text>
            </View>
          </View>
          <View style={styles.settingsItem}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.settingOptionDark}>
              <Svg
                width={36}
                height={36}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2V4a8 8 0 110 16z"
                  fill="white"
                />
              </Svg>
              <Text style={styles.settingDarkText}>Escuro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.settingOptionLight}>
              <Svg
                width={36}
                height={36}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2V4a8 8 0 110 16z"
                  fill="black"
                />
              </Svg>
              <Text style={styles.settingLightText}>Claro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingOverall}>
            <View style={styles.settingsItem}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill={'#19E5A6'}
                viewBox="0 0 24 24">
                <Path d="M4.5.257l3.771 3.771c.409 1.889-2.33 4.66-4.242 4.242l-3.771-3.77c-.172.584-.258 1.188-.258 1.792 0 1.602.607 3.202 1.83 4.426 1.351 1.351 3.164 1.958 4.931 1.821.933-.072 1.852.269 2.514.931l9.662 9.662c.578.578 1.337.868 2.097.868 1.661 0 3.001-1.364 2.966-3.03-.016-.737-.306-1.47-.868-2.033l-9.662-9.663c-.662-.661-1.002-1.581-.931-2.514.137-1.767-.471-3.58-1.82-4.93-1.225-1.224-2.825-1.83-4.428-1.83-.603 0-1.207.086-1.791.257zm17.5 20.743c0 .553-.447 1-1 1-.553 0-1-.448-1-1s.447-1 1-1 1 .447 1 1z" />
              </Svg>
              <View style={styles.settingsText}>
                <Text style={styles.settingTitle}>Solução de Problemas</Text>
                <Text style={styles.settingsubTitle}>
                  Entre em contato conosco para uma maior resolução de dúvidas e
                  problemas.
                </Text>
              </View>
            </View>
            <View style={styles.settingsItem}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.settingOptionContact}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24">
                  <Path
                    fill={'#19E5A6'}
                    d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"
                  />
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.settingOptionContact}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24">
                  <Path
                    fill={'#19E5A6'}
                    d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginRight: 16,
  },
  settingsContainer: {
    marginBottom: 48,
  },
  settingsArea: {
    flexDirection: 'column',
    padding: 12,
  },
  exampleArea: {
    flexDirection: 'column',
    padding: 12,
  },
  exampleItem: {
    padding: 24,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
  },
  exampleIndicator: {
    top: 20,
    zIndex: 1,
    backgroundColor: '#0a0a0a',
    padding: 6,
    borderRadius: 15,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingOverall: {
    marginVertical: 24,
  },
  indicatorText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#19E5A6',
  },
  exampleText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'ClashGrotesk-Medium',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
    marginVertical: 2,
    padding: 24,
    borderRadius: 15,
  },
  settingsText: {
    flexDirection: 'column',
    marginHorizontal: 18,
  },
  settingTitle: {
    fontSize: 18,
    fontFamily: 'ClashGrotesk-Medium',
    color: 'white',
  },
  settingsubTitle: {
    fontSize: 18,
    fontFamily: 'ClashGrotesk-Regular',
    color: 'white',
  },
  settingOptionDark: {
    marginHorizontal: 12,
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 6,
    width: 150,
    borderRadius: 15,
  },
  settingOptionLight: {
    marginHorizontal: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 6,
    width: 150,
    borderRadius: 15,
  },
  settingOptionContact: {
    marginHorizontal: 12,
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 12,
    width: 150,
    borderRadius: 15,
  },
  settingDarkText: {
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
    color: 'white',
  },
  settingLightText: {
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
    color: 'black',
  },
  betaBadge: {
    top: 20,
    zIndex: 2,
    backgroundColor: 'black',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 6,
  },
  betaText: {
    fontFamily: 'ClashGrotesk-Medium',
    color: '#19E5A6',
  },
});
