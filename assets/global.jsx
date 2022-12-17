import {StyleSheet} from 'react-native';

accent = '#19E5A6';

export default StyleSheet.create({
  containerBottom: {
    marginTop: 'auto',
    backgroundColor: '#121212',
    height: 550,
    padding: 24,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 32,
  },
  subTitle: {
    color: 'white',
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 24,
    marginBottom: 6,
  },
  input: {
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#19E5A6',
    padding: 16,
    width: '100%',
    height: 70,
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 24,
  },
  accent: {
    color: '#007aff',
  },
  accentBg: {
    backgroundColor: '#19E5A6',
  },
});
