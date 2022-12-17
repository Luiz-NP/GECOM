import global from '../../assets/global.jsx';

import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import Task from '../components/Task';

import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useContext, useEffect} from 'react';

import {AuthContext} from '../contexts/AuthContext';

export default function Home({navigation}) {
  const {navigate} = navigation;
  const {user} = useContext(AuthContext);

  console.log(user?.displayName);
  // defining back button behavior
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  return (
    <View style={global.container}>
      <View style={global.topBar}>
        <View style={global.screenInfo}>
          <View style={global.titleArea}>
            <Text style={global.title}>Ínicio</Text>
            <Text style={global.subTitle}>Suas tarefas</Text>
          </View>
          <View style={global.actionArea}>
            <TouchableOpacity
              onPress={() => {
                navigate('Profile');
              }}
              activeOpacity={0.8}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 20.996 20.995">
                <Path
                  id="Account"
                  d="M13,14.049V14H4.253A2.249,2.249,0,0,0,2,16.248v.92a2.75,2.75,0,0,0,.51,1.6C4.056,20.928,6.579,22,10,22q.536,0,1.043-.035A2.518,2.518,0,0,1,11,21.5v-5A2.5,2.5,0,0,1,13,14.049ZM10,2A5,5,0,1,1,5,7,5,5,0,0,1,10,2Zm4,13h-.5A1.5,1.5,0,0,0,12,16.5v5A1.5,1.5,0,0,0,13.5,23h8A1.5,1.5,0,0,0,23,21.5v-5A1.5,1.5,0,0,0,21.5,15H21v-1.25A1.75,1.75,0,0,0,19.25,12h-3.5A1.75,1.75,0,0,0,14,13.749Zm1.5-1.25a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25V15h-4Z"
                  transform="translate(-2.004 -2.004)"
                  fill="#fff"
                />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Svg
                style={styles.iconGap}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 18.724 19.5">
                <Path
                  id="Settings"
                  d="M12.013,2.25a10.583,10.583,0,0,1,2.182.253.75.75,0,0,1,.582.649l.17,1.527a1.384,1.384,0,0,0,1.375,1.233,1.358,1.358,0,0,0,.553-.117l1.4-.615a.75.75,0,0,1,.849.174,9.793,9.793,0,0,1,2.2,3.792.75.75,0,0,1-.271.826l-1.241.915a1.381,1.381,0,0,0,0,2.226l1.243.915a.75.75,0,0,1,.271.826,9.8,9.8,0,0,1-2.2,3.792.75.75,0,0,1-.849.175L16.872,18.2a1.381,1.381,0,0,0-1.926,1.113l-.169,1.527a.75.75,0,0,1-.572.647,9.518,9.518,0,0,1-4.406,0,.75.75,0,0,1-.572-.647L9.058,19.32a1.382,1.382,0,0,0-1.925-1.111l-1.407.616a.75.75,0,0,1-.849-.175,9.8,9.8,0,0,1-2.2-3.8.75.75,0,0,1,.272-.826l1.243-.916a1.381,1.381,0,0,0,0-2.226L2.946,9.973a.75.75,0,0,1-.272-.826,9.793,9.793,0,0,1,2.2-3.792.75.75,0,0,1,.849-.174l1.4.615A1.388,1.388,0,0,0,9.059,4.678l.17-1.526A.75.75,0,0,1,9.812,2.5,10.665,10.665,0,0,1,12.013,2.25ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  transform="translate(-2.641 -2.25)"
                  fill="#fff"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Task />
    </View>
  );
}

const styles = StyleSheet.create({
  iconGap: {
    marginLeft: 12,
  },
});
