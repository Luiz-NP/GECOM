/*========== ROOT IMPORTS ==========*/
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

/*========== LIBRARY IMPORTS ==========*/
import Svg, {Path} from 'react-native-svg';
import {NotificationLocation} from '../components/NotificationLocation';

export function TaskInfo({route, navigation}) {
  const {data} = route.params;
  const {navigate} = navigation;

  console.log(data);

  if (data.status === 'pending') {
    taskStatus = 'Tarefa pendente';
  } else if (data.status === 'running') {
    taskStatus = 'Tarefa em andamento';
  } else if (data.status === 'concluded') {
    taskStatus = 'Tarefa concluída';
  }

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
            onPress={() => navigate('Home')}
            style={styles.backBtn}
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
          <Text style={styles.titleScreen}>Fiscalização de Campo</Text>
        </View>
      </View>
      <NotificationLocation />
      <View style={[styles.infoContainer, styles.spacer]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.infoBox}>
          <Image
            source={{
              uri: 'https://snazzy-maps-cdn.azureedge.net/assets/38-shades-of-grey.png?v=20170626083726',
            }}
            blurRadius={3}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              borderRadius: 15,
            }}
          />
          <Svg
            width={32}
            height={32}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M39.014 28.98A16.925 16.925 0 0041 21c0-9.389-7.611-17-17-17S7 11.611 7 21a16.922 16.922 0 004 10.955l.02.025c.007.006.013.014.018.02H11l10.088 10.71a4 4 0 005.823 0L37 32h-.038l.016-.019.002-.002c.072-.086.144-.172.215-.26a17.038 17.038 0 001.82-2.74zm-15.01-1.48a6 6 0 110-12 6 6 0 010 12z"
              fill="white"
            />
          </Svg>
          <Text style={styles.infoText}>{data.location}</Text>
        </TouchableOpacity>
        <View style={styles.infoBox}>
          <Svg
            width={32}
            height={32}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M37 32L26.912 42.71a4 4 0 01-5.824 0L11 32h.038l-.017-.02-.021-.025A16.922 16.922 0 017 21c0-9.389 7.611-17 17-17s17 7.611 17 17a16.922 16.922 0 01-4 10.955l-.021.025-.017.02H37zM25.116 16.884l2.866 2.866H17a1.25 1.25 0 100 2.5h10.982l-2.866 2.866a1.25 1.25 0 001.768 1.768l5-5a1.25 1.25 0 000-1.768l-5-5a1.25 1.25 0 00-1.768 1.768z"
              fill="white"
            />
          </Svg>
          <Text style={styles.infoText}>{data.distance} km</Text>
          <Text style={styles.descText}>de retirada</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={32}
            height={32}
            fill="white"
            viewBox="0 0 1000 1000">
            <Path
              d="M1281.8 4998.5c-249.5-63-399.7-251.9-399.7-506.3 0-331.9 344-571.7 663.7-465.1 239.8 77.5 380.3 331.9 324.6 591-53.3 254.4-344 441-588.6 380.4zM3331 4996.1c-360.9-87.2-506.3-537.7-261.6-813.9 251.9-290.7 702.5-215.6 850.2 140.5 55.7 133.2 48.4 259.2-26.7 409.4-106.5 205.9-341.4 317.3-561.9 264zM6431.6 4996.1c-360.9-87.2-506.3-537.7-261.6-813.9 314.9-358.5 889-138.1 889 344 0 41.2-29.1 133.2-65.4 205.9-106.6 205.9-341.6 317.3-562 264zM8466.3 4984c-339.1-106.6-462.7-535.3-230.1-806.6 298-348.8 884.1-138.1 881.7 319.7-2.4 348.8-324.6 591-651.6 486.9zM349.2 2961.4v-508.7h840.5l1644.7-1409.8L4479.2-369.3l7.3-2209.2 4.8-2211.6h1017.4l2.4 2211.6v2209.2l1649.6 1412.2 1649.6 1409.8h840.6V3470H349.2v-508.6zm4142.1-1247.5c0-406.9-4.8-738.8-12.1-738.8-17 0-1707.7 1453.4-1707.7 1467.9 0 4.8 387.6 9.7 859.9 9.7h859.9v-738.8zM7228.5 2443c0-14.5-1690.8-1467.9-1707.7-1467.9-7.3 0-12.1 331.9-12.1 738.8v738.8h859.9c472.4 0 859.9-4.9 859.9-9.7z"
              transform="matrix(.1 0 0 -.1 0 511)"
            />
          </Svg>
          <Text style={styles.infoText}>{data.poles}</Text>
          <Text style={styles.descText}>Postes</Text>
        </View>
        <View style={styles.infoBox}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill={'white'}
            viewBox="0 0 512.000000 512.000000">
            <Path
              d="M3670 4379c-116-23-240-116-296-223l-29-56H2060c-852 0-1307-4-1350-11-179-29-325-104-455-234-119-120-177-220-222-386-27-99-24-300 5-404 82-289 302-505 597-587l80-23 1855-5 1855-5 53-22c219-89 341-278 342-525 0-112-13-175-57-267-65-137-209-249-361-280-37-8-446-11-1345-11H1765l-25 47c-38 72-114 141-199 182l-76 36-517 3-518 3v-311H0v-300h430V730h479c278 0 501 4 532 10 128 24 262 128 315 245l25 55h1297c1228 0 1302 1 1388 19 304 63 548 297 630 606 26 98 26 371 0 465-80 287-267 487-551 587l-80 28-1860 5-1860 5-66 22c-246 84-398 325-361 574 28 194 156 348 350 422l57 22 1311 3 1310 2 25-52c47-102 172-200 290-227 26-6 241-11 537-11h492v310h430v300h-430v270l-487-1c-269-1-508-5-533-10zm720-429v-140h-332c-315 0-335 1-366 20-97 59-92 191 9 242 30 16 69 18 362 18h327v-140zM1431 1287c93-62 87-189-12-239-30-16-69-18-361-18H730v280h334c330 0 333 0 367-23z"
              transform="matrix(.1 0 0 -.1 0 512)"
            />
          </Svg>
          <Text style={styles.infoText}>1</Text>
          <Text style={styles.descText}>Tipos de cabos</Text>
        </View>
      </View>
      <View style={styles.taskStatus}>
        <Text style={styles.taskStatusText}>{taskStatus}</Text>
      </View>
      <View style={styles.actionArea}>
        <TouchableOpacity
          onPress={() => navigate('CameraView')}
          activeOpacity={0.8}
          style={styles.startBtn}>
          <Text style={styles.startBtnText}>Iniciar tarefa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  spacer: {
    marginTop: 24,
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
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    borderBottomColor: 'white',
  },
  titleScreen: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },

  infoContainer: {
    paddingHorizontal: 24,
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoBox: {
    width: 180,
    height: 180,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: 'white',
    marginTop: 6,
  },

  descText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 12,
    color: '#ccc',
  },

  taskStatus: {
    marginTop: 24,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskStatusText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#00c4ac',
    borderWidth: 1,
    borderColor: '#00c4ac',
    borderRadius: 15,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  actionArea: {
    marginTop: 'auto',
    marginBottom: 36,
    paddingHorizontal: 24,
  },

  startBtn: {
    width: '100%',
    height: 60,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  startBtnText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: 'white',
  },
});
