import {StyleSheet, Text, View} from 'react-native';

export const Welcome = (): JSX.Element => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.title}>Olá,</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'ClashGrotesk-Bold',
  },
});
