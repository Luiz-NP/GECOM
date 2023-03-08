import {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export const DropDown = ({options, value, setValue}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setDropdown(!dropdown)}
        style={styles.select}>
        <Text style={styles.optionText}>
          {value ?? 'Selecione'}
        </Text>
      </TouchableOpacity>

      {/* {dropdown &&
        id &&
        options.map((value, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => {
              setDropdown(!dropdown);
              setValue(prev => [...prev, value]);
            }}
            style={styles.option}>
            <Text style={styles.optionText}>{value}</Text>
          </TouchableOpacity>
        ))} */}

      {dropdown && options.map((value, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => {
              setDropdown(!dropdown);
              setValue(value);
            }}
            style={styles.option}>
            <Text style={styles.optionText}>{value}</Text>
          </TouchableOpacity>
        )
      )}
    </>
  );
};

const styles = StyleSheet.create({
  select: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  optionText: {
    color: '#ccc',
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
  },

  option: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#2e2e2e',
  },
});
