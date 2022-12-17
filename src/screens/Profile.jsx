import {StyleSheet, Text, View} from 'react-native';
import global from '../../assets/global.jsx';

export default function Profile() {
  return (
    <View style={global.container}>
      <View style={global.topBar}>
        <View style={global.screenInfo}>
          <View style={global.titleArea}>
            <Text style={global.title}>Perfil</Text>
            <Text style={global.subTitle}>Suas informações</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
