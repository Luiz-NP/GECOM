import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
      <View style={styles.exampleArea}>
        <View style={styles.exampleIndicator}>
          <Text style={styles.indicatorText}>Texto de exemplo</Text>
        </View>
        <View style={styles.exampleItem}>
          <Text style={styles.exampleText}>
            Lorem ipsum dolor sit amet. Et optio amet nam dignissimos animi in
            necessitatibus nesciunt. Ut voluptatem reiciendis sed dicta voluptas
            id doloremque soluta sit ipsa dolorem est doloremque saepe.
          </Text>
        </View>
      </View>
      <View style={styles.settingsArea}>
        <TouchableOpacity activeOpacity={0.7} style={styles.settingsItem}>
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
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginRight: 16,
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
    backgroundColor: '#1e1e1e',
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
});
