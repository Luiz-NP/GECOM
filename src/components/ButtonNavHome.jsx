import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const ButtonNavHome = ({
  buttonSelected,
  setButtonSelected,
  tasks,
  number,
  text,
  isToShowCount,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={buttonSelected === number ? styles.btnNavSelected : styles.btnNav}
      onPress={() => setButtonSelected(number)}>
      {isToShowCount && <Text style={styles.count}>{tasks?.length ?? 0}</Text>}

      <Text
        style={
          buttonSelected === number
            ? styles.textBtnNavSelected
            : styles.textBtnNav
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnNavSelected: {
    width: '31%',
    borderRadius: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C4AC',
  },

  btnNav: {
    width: '32%',
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00C4AC',
  },

  textBtnNavSelected: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },

  textBtnNav: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#00c4ac',
  },

  count: {
    position: 'absolute',
    borderColor: '#00c4ac',
    backgroundColor: '#00c4ac',
    fontFamily: 'ClashGrotesk-Medium',
    color: '#FFFFFF',
    fontSize: 16,
    borderRadius: 5,
    width: 24,
    textAlign: 'center',
    top: -10,
    right: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 100,
  },
});
