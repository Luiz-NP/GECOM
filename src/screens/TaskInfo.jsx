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
import {InfoBar} from '../components/InfoBar';

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
      <InfoBar title={'Informações da OS'} />
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
            onPress={() => navigate('CameraView')}
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
