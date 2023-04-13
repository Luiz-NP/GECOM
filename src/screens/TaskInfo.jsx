import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Toast from 'react-native-simple-toast';

import Svg, {Path} from 'react-native-svg';

import auth from '@react-native-firebase/auth';

export function TaskInfo({route, navigation}) {
  const {data} = route.params;
  const {navigate} = navigation;
  const {displayName} = auth().currentUser;

  let meters = data.meters?.traveled ?? 0;

  if (meters === 0) {
    meters = 'Não iniciada';
  }

  if (meters > 0) {
    meters = `${meters} metros`;
  }

  console.log(data.meters?.traveled);

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
      <ScrollView style={styles.container}>
        <View style={styles.infoBubble}>
          <Text style={styles.headerText}>O.S</Text>
          <Text style={styles.osText}>{data.OSNumber}</Text>
        </View>
        <View style={styles.dataBubble}>
          <Svg
            width={24}
            height={24}
            style={[{marginBottom: 6}]}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M18.157 16.882l-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 01-3.128 0l-3.49-3.396c-.44-.431-.807-.794-1.103-1.09a8.707 8.707 0 1112.314 0zM14.501 11a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
              fill="white"
            />
          </Svg>
          <Text style={styles.dataInfo}>{data.location.street}</Text>
          <Text style={styles.dataInfo}>
            {data.location.city} - {data.location.state}
          </Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Técnico</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValueText}>{displayName}</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Empresa</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValueText}>{data.company}</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Distância</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValueText}>{meters}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1.0}
          onPress={() => {
            Toast.show(
              `${
                data.status === 'pending'
                  ? 'Tarefa em andamento'
                  : 'Tarefa concluída'
              }`,
              Toast.LONG,
            );
          }}
          style={styles.statusBadge}>
          <Text style={styles.statusText}>
            {data.status === 'pending'
              ? 'Tarefa em andamento'
              : 'Tarefa concluída'}
          </Text>
        </TouchableOpacity>
        {data.status === 'pending' && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('CameraView', {taskID: data.id})}
            style={styles.initTaskButton}>
            <Text style={styles.initTaskButtontext}>Iniciar tarefa</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#025248',
  },

  container: {
    paddingHorizontal: 24,
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
    borderColor: '#00c4ac',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataBubble: {
    width: '100%',
    height: 100,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: {
    width: '100%',
    paddingVertical: 24,
    borderRadius: 25,
    borderColor: '#00c4ac',
    borderWidth: 2,
    paddingHorizontal: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    paddingHorizontal: 6,
    justifyContent: 'space-between',
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
    marginVertical: 2,
  },
  infoLabel: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 20,
    color: '#FFFFFF',
  },
  infoValueContainer: {
    backgroundColor: '#006458',
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 6,
    justifyContent: 'center',
    padding: 8,
  },
  infoValueText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },

  initTaskButton: {
    width: '100%',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 2,
    height: 80,
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

  statusBadge: {
    width: '100%',
    height: 100,
    borderRadius: 15,
    paddingVertical: 8,
    borderColor: '#00c4ac',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 48,
  },

  statusBadgeFinished: {
    width: '100%',
    height: 100,
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#025248',
    marginTop: 24,
    marginBottom: 48,
  },

  statusText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
});
