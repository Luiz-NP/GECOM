import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export function InfoBar({title}) {
  return (
    <View style={styles.header}>
      <View style={styles.userArea}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.8}>
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill={'white'}
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M9.474 5.209L3.22 11.468c-.147.146-.22.338-.22.53s.073.384.22.53l6.252 6.257a.742.742 0 00.527.217.753.753 0 00.534-1.278l-4.976-4.976h14.692a.75.75 0 000-1.5H5.557l4.978-4.979a.745.745 0 00-.006-1.054.749.749 0 00-1.055-.006z"
              fillRule="nonzero"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 64,
    paddingBottom: 12,
  },
  title: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
  backBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#006458',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
});
