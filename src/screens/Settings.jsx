import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function Settings({navigation}) {
  const {navigate} = navigation;
  return (
    <View style={style.settingsContainer}>
      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigate('Home')}
          activeOpacity={0.8}
          style={style.backContainer}>
          <Text style={style.backText}>Voltar</Text>
        </TouchableOpacity>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>Configurações</Text>
        </View>
        <View activeOpacity={0.8} style={style.invisibleContainer}></View>
      </View>
      <View style={style.optionsContainer}>
        <View style={style.optionContainer}>
          <View style={style.textContainer}>
            <Text style={style.optionText}>Notificações</Text>
            <Text style={style.optionDescription}>
              Receba notificações sobre novas vistorias e novas tarefas.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: '#025248',
  },
  optionsContainer: {
    padding: 24,
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

  invisibleContainer: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: 100,
    paddingHorizontal: 15,
  },
});
