/*========== ROOT IMPORTS ==========*/
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
/*========== LOCAL FILES & COMPONENTS ==========*/

/*========== LIBRARY IMPORTS ==========*/
import Svg, {Path} from 'react-native-svg';

export function TaskInfo({route, navigation}) {
  const {data} = route.params;
  const {navigate} = navigation;

  console.log(data);

  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <View style={styles.userArea}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigate('Home')}
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
          <Text style={styles.title}>Informações da tarefa</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.infoBubble}>
          <Text style={styles.headerText}>O.S</Text>
          <Text style={styles.osText}>23578</Text>
        </View>
        <View style={styles.dataBubble}>
          <Svg
            width={32}
            height={32}
            style={[{marginBottom: 6}]}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M18.157 16.882l-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 01-3.128 0l-3.49-3.396c-.44-.431-.807-.794-1.103-1.09a8.707 8.707 0 1112.314 0zM14.501 11a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
              fill="white"
            />
          </Svg>
          <Text style={styles.dataInfo}>Uberaba - MG</Text>
        </View>
        <View style={styles.cableBubble}>
          <Text style={styles.cableText}>Tipos de cabos</Text>
          <View style={styles.cableComponent}>
            <View style={styles.cableItem}>
              <Text style={styles.cableType}>CTP APL XDSL</Text>
            </View>
            <View style={styles.cableItem}>
              <Text style={styles.cableType}>CTP APL 10P</Text>
            </View>
            <View style={styles.cableItem}>
              <Text style={styles.cableType}>CTP APL 200P</Text>
            </View>
            <View style={styles.cableItem}>
              <Text style={styles.cableType}>CTP APL 1000P</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigate('CameraView', {taskId: data.id})}
            style={styles.initTaskButton}>
            <Text style={styles.initTaskButtontext}>Iniciar Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#025248',
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
  },
  title: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
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

  spacer: {
    marginTop: 24,
  },
  headerText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 32,
    color: '#FFFFFF',
  },
  osText: {
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 32,
    color: '#FFFFFF',
  },
  infoBubble: {
    width: '100%',
    height: 100,
    paddingHorizontal: 24,
    marginTop: 24,
    borderBottomWidth: 1,
    borderColor: '#006458',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataBubble: {
    width: '100%',
    height: 100,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: '#006458',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cableBubble: {
    width: '100%',
    paddingVertical: 24,
    borderColor: '#006458',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataTitle: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  dataInfo: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  cableText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
  cableComponent: {
    width: '100%',
    paddingHorizontal: 72,
    marginTop: 12,
  },
  cableItem: {
    backgroundColor: '#006458',
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 6,
    justifyContent: 'center',
    paddingVertical: 8,
  },

  cableType: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },

  initTaskButton: {
    width: '80%',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00c4ac',
    marginTop: 24,
    marginBottom: 48,
  },

  initTaskButtontext: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
});
