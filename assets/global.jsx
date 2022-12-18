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
  container: {
    height: '100%',
    backgroundColor: '#121212',
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    height: 180,
    marginBottom: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 24,
    backgroundColor: '#1e1e1e',
  },
  screenInfo: {
    width: '100%',
    marginTop: 64,
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionArea: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  },
});
