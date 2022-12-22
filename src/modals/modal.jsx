import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerBottom: {
    marginTop: 'auto',
    backgroundColor: '#1e1e1e',
    height: 400,
    padding: 24,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'column',
  },
  listItem: {
    backgroundColor: '#121212',
    borderRadius: 25,
    padding: 24,
    marginVertical: 3,
  },
  listCancel: {
    color: '#ff0000',
  },
  listItemText: {
    color: 'white',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 32,
    marginVertical: 12,
  },
  subTitle: {
    color: 'white',
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 24,
    marginBottom: 6,
  },
});
