import {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import global from '../../assets/global.jsx';
import ProfileSkeleton from '../Skeletons/ProfileSkeleton.jsx';

import Animated, {FadeInDown, FadeOut} from 'react-native-reanimated';
import {FadeInUp, FadeOutDown} from 'react-native-reanimated';

export default function Profile({navigation}) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const {navigate} = navigation;

  const displayName = 'Victor Lima';
  const displayCompany = 'QuarkzPlace Ltd.';

  const isAutorized = true;

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
          <Image
            style={styles.userAvatar}
            source={{
              uri: 'https://i.pinimg.com/736x/36/c6/e5/36c6e5a05b323b35f185b9cfe8ce8255.jpg',
            }}
          />
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
          <TouchableOpacity activeOpacity={0.8} style={styles.option}>
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
                Alterar código de Autorização
              </Text>
              <Text style={styles.optionsubTitle}>
                Informe o seu código de autorização, caso esteja expirado ou
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
    color: 'white',
  },
  userCompany: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 18,
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
});
