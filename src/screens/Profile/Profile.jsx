import {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import {Path, Svg} from 'react-native-svg';
import global from '../../../assets/global.jsx';
import modal from '../../modals/modal.jsx';
import {BlurView} from '@react-native-community/blur';
import ProfileSkeleton from '../../Skeletons/ProfileSkeleton.jsx';

import Animated, {FadeInDown, FadeOut} from 'react-native-reanimated';
import {FadeInUp, FadeOutDown} from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';

export default function Profile({navigation}) {
  const [Loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const {navigate} = navigation;

  const userImage = auth().currentUser.photoURL;
  const displayName = auth().currentUser.displayName;
  const displayCompany = 'QuarkzPlace Ltd.';

  const isAutorized = true;

  function logOutSession() {
    navigate('Login');
    auth()
      .signOut()
      .then(() => {
        console.log('Deslogado com sucesso.');
      });
  }

  return (
    <View style={global.container}>
      <View style={global.topBar}>
        <View style={global.screenInfo}>
          <TouchableOpacity
            onPress={() => {
              navigate('Home');
            }}
            style={global.backBtn}
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
            <Text style={global.title}>Perfil</Text>
          </View>
        </View>
      </View>
      {Loading ? (
        <Animated.View entering={FadeInUp.duration(800)}>
          <ProfileSkeleton />
        </Animated.View>
      ) : (
        <Animated.View style={styles.userInfo}>
          <View style={styles.profileImage}>
            <Image
              style={styles.userAvatar}
              source={{
                uri: `${userImage}`,
              }}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.attachBtn}
              activeOpacity={1.0}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M18.75 4A3.25 3.25 0 0122 7.25v11.5A3.25 3.25 0 0118.75 22H7.25A3.25 3.25 0 014 18.75v-6.248c.474.198.977.34 1.5.422v5.826c0 .208.036.408.103.594l5.823-5.701a2.25 2.25 0 013.02-.116l.128.116 5.822 5.702c.067-.186.104-.386.104-.595V7.25a1.75 1.75 0 00-1.75-1.75h-5.826a6.457 6.457 0 00-.422-1.5h6.248zm-6.191 10.644l-.084.07-5.807 5.687c.182.064.378.099.582.099h11.5c.203 0 .399-.035.58-.099l-5.805-5.686a.75.75 0 00-.966-.071zM16.252 7.5a2.252 2.252 0 110 4.504 2.252 2.252 0 010-4.504zM6.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm9.752 8a.752.752 0 100 1.504.752.752 0 000-1.504zM6.5 3l-.09.007a.5.5 0 00-.402.402L6 3.5V6L3.498 6l-.09.008a.5.5 0 00-.402.402l-.008.09.008.09a.5.5 0 00.402.402l.09.008H6v2.503l.008.09a.5.5 0 00.402.402l.09.009.09-.009a.5.5 0 00.402-.402l.008-.09V7L9.505 7l.09-.008a.5.5 0 00.402-.402l.008-.09-.008-.09a.5.5 0 00-.403-.402L9.504 6H7V3.5l-.008-.09a.5.5 0 00-.402-.403L6.5 3z"
                  fill="#19E5A6"
                />
              </Svg>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              statusBarTranslucent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <StatusBar backgroundColor={'transparent'} translucent={true} />
              <BlurView
                style={{flex: 1}}
                blurType="light"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
              />
              <View style={modal.containerBottom}>
                <Text style={modal.title}>Escolha a origem de sua imagem</Text>
                <TouchableOpacity activeOpacity={0.8} style={modal.listItem}>
                  <Text style={modal.listItemText}>Galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={modal.listItem}>
                  <Text style={modal.listItemText}>Câmera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  activeOpacity={0.8}
                  style={modal.listItem}>
                  <Text style={{...modal.listItemText, ...modal.listCancel}}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <Text style={styles.userName}>{displayName}</Text>
          <Text style={styles.userCompany}>{displayCompany}</Text>
          <View style={styles.authorizationArea}>
            <Text
              style={{
                ...styles.authorizationType,
                color: isAutorized ? '#19E5A6' : '#BF2424',
              }}>
              {isAutorized ? 'Técnico autorizado' : 'Técnico não-autorizado'}
            </Text>
          </View>
        </Animated.View>
      )}
      <ScrollView style={styles.profileContainer}>
        <View style={styles.optionsArea}>
          <TouchableOpacity
            onPress={() => {
              navigate('RegisterCar');
            }}
            activeOpacity={0.8}
            style={styles.option}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill={'#19E5A6'}
              viewBox="0 0 24 24">
              <Path d="M21.739 14.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.735.547-.069 1-.743.602-1.62 1.38-2.258 2.027-1.436 1.455-2.185 2.385-2.185 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm-10.768-14.135c.71-.751 1.688-1.215 2.768-1.215s2.058.464 2.768 1.215l1.164-1.236c-1.006-1.067-2.397-1.727-3.932-1.727-1.535 0-2.926.66-3.932 1.727l1.164 1.236zm-2.038-2.163c1.23-1.304 2.929-2.11 4.806-2.11s3.576.806 4.806 2.11l1.194-1.266c-1.535-1.629-3.656-2.636-6-2.636s-4.465 1.007-6 2.636l1.194 1.266zm6.806 4.098h-4c.035-.906.749-1.737 2-1.737 1.243 0 1.965.831 2 1.737z" />
            </Svg>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Cadastrar carro</Text>
              <Text style={styles.optionsubTitle}>
                Informe as informações de seu carro para que seja possível a
                realização de suas tarefas.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('AddCode');
            }}
            activeOpacity={0.8}
            style={styles.option}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill={'#19E5A6'}
              viewBox="0 0 24 24">
              <Path d="M10 17c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm2-7v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.795-4 4-4s4 1.794 4 4v4h-8v-4zm11 16h-14v-10h14v10z" />
            </Svg>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                Adicionar código de Autorização
              </Text>
              <Text style={styles.optionsubTitle}>
                Informe o seu código de autorização, caso esteja expirado e/ou
                inválido.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.option}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill={'#19E5A6'}
              viewBox="0 0 24 24">
              <Path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z" />
            </Svg>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Alterar suas informações</Text>
              <Text style={styles.optionsubTitle}>
                Altere seus dados caso estejam inválidos e/ou necessitam de
                atualização.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={logOutSession}
            activeOpacity={0.8}
            style={styles.option}>
            <Svg
              width={36}
              height={36}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M12.75 17.5a.75.75 0 000-1.5H6.5a2 2 0 01-2-2V6a2 2 0 012-2h6.25a.75.75 0 000-1.5H6.5A3.5 3.5 0 003 6v8a3.5 3.5 0 003.5 3.5h6.25zm.991-11.301a.75.75 0 011.06.042l3 3.25a.75.75 0 010 1.018l-3 3.25A.75.75 0 1113.7 12.74l1.838-1.991H7.75a.75.75 0 010-1.5h7.787l-1.838-1.991a.75.75 0 01.042-1.06z"
                fill={'#19E5A6'}
              />
            </Svg>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Encerrar sessão</Text>
              <Text style={styles.optionsubTitle}>
                Finalize sua sessão e volte para a área de autenticação.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('Privacy');
            }}
            style={styles.privacyBtn}
            activeOpacity={0.8}>
            <Text style={styles.privacyText}>Privacidade e termos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    marginBottom: 48,
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  iconBg: {
    borderRadius: 25,
  },
  userAvatar: {
    width: 200,
    height: 200,
    marginVertical: 12,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  userName: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    height: 30,
    marginTop: 2,
    color: 'white',
  },
  userCompany: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    height: 25,
    color: '#818181',
  },
  authorizationArea: {
    backgroundColor: '#1e1e1e',
    padding: 6,
    borderRadius: 25,
    marginVertical: 12,
  },
  authorizationType: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
    paddingHorizontal: 12,
    color: 'white',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsArea: {
    padding: 12,
  },
  option: {
    backgroundColor: '#1e1e1e',
    borderRadius: 25,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  optionText: {
    marginHorizontal: 18,
  },
  optionTitle: {
    fontFamily: 'ClashGrotesk-Medium',
    color: 'white',
    fontSize: 18,
  },
  optionsubTitle: {
    fontFamily: 'ClashGrotesk-Regular',
    color: 'white',
    fontSize: 18,
  },
  privacyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  privacyText: {
    fontFamily: 'ClashGrotesk-Regular',
    color: 'white',
    fontSize: 18,
  },
  profileImage: {
    flexDirection: 'row',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachBtn: {
    position: 'absolute',
    left: '70%',
    top: 170,
    backgroundColor: '#1e1e1e',
    padding: 6,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#19E5A6',
  },
});
