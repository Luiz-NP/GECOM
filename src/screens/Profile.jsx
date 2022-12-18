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

export default function Profile({navigation}) {
  const [onLoad, setOnLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setOnLoad(false);
    }, 1000);
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
            <Text style={global.title}>Perfil</Text>
          </View>
        </View>
      </View>
      {onLoad ? (
        <ProfileSkeleton />
      ) : (
        <View style={styles.userInfo}>
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
                color: isAutorized ? '#24BF24' : '#BF2424',
              }}>
              {isAutorized ? 'Técnico autorizado' : 'Técnico não-autorizado'}
            </Text>
          </View>
        </View>
      )}
      <ScrollView style={styles.profileContainer}>
        <View style={styles.optionsArea}>
          <TouchableOpacity activeOpacity={0.8} style={styles.option}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill={'white'}
              viewBox="0 0 24 24">
              <Path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z" />
            </Svg>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Alterar senha</Text>
              <Text style={styles.optionsubTitle}>
                Escolha uma senha forte e não a reutilize em outras contas.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.option}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill={'white'}
              viewBox="0 0 24 24">
              <Path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z" />
            </Svg>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Testar câmera</Text>
              <Text style={styles.optionsubTitle}>Debug ok?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.option}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill={'white'}
              viewBox="0 0 24 24">
              <Path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z" />
            </Svg>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Alterar senha</Text>
              <Text style={styles.optionsubTitle}>
                Escolha uma senha forte e não a reutilize em outras contas.
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
  backBtn: {
    marginRight: 16,
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
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
