import {View, StatusBar, Text, StyleSheet} from 'react-native';

export const Home = ({navigation}: any): JSX.Element => {
  const {navigate} = navigation;
  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
