import LottieView from 'lottie-react-native';
import {StyleSheet, Text, View} from 'react-native';

export const LoadingIndicator = ({ text }) => {
  return (
    <View style={style.container}>
      <LottieView
        source={require('../assets/img/loadingDots.json')}
        autoPlay
        loop
      />
      <Text style={style.text}>{text ? text : 'Aguarde um momento...'}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#025248',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
    marginTop: 72,
  },
});
