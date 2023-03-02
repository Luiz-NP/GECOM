/*========== ROOT IMPORTS ==========*/
import {Pressable, StyleSheet, Text, View} from 'react-native';
const darkMode = false;
/*========== COMPONENT DECLARATION ==========*/
export function ProfileButton({title, text}) {
  return (
    <Pressable style={darkMode ? dark.btn : style.btn}>
      <View style={style.icon}></View>
      <Text style={style.contentTextBtn}>
        {title} {'\n'}
        <Text style={style.descriptionText}>{text}</Text>
      </Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  btn: {
    borderRadius: 25,
    backgroundColor: '#006458',
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  icon: {
    width: '15%',
    height: 45,
  },
  contentTextBtn: {
    width: '85%',
    paddingLeft: 10,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#FFFFFF',
    fontSize: 18,
  },
  descriptionText: {
    fontFamily: 'ClashGrotesk-Light',
    fontSize: 16,
  },
});

const dark = StyleSheet.create({
  btn: {
    borderRadius: 25,
    backgroundColor: '#1e1e1e',
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
