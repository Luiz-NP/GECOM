import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const DropDown = ({options, value, setValue, id}) => {
  const [dropdown, setDropdown] = useState(false);

  console.log(value);

  return (
    <>
      <TouchableOpacity onPress={() => setDropdown(!dropdown)} style={styles.select}>
        <Text style={value ? '' : styles.placeholder}>{value ?? "Selecione"}</Text>
      </TouchableOpacity>

      {dropdown && id && (
        options.map((value, index) => (
          <TouchableOpacity key={index} onPress={() => {
            setDropdown(!dropdown);
            setValue(prev => [...prev, value]);
          }} style={styles.option}>
            <Text>{value}</Text>
          </TouchableOpacity>
        ))
      )}
      
      {dropdown && !id && (
        options.map((value, index) => (
          <TouchableOpacity key={index} onPress={() => {
            setDropdown(!dropdown);
            setValue(value);
          }} style={styles.option}>
            <Text>{value}</Text>
          </TouchableOpacity>
        ))
      )}
    </>
  );
};

const styles = StyleSheet.create({
  select: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
  },

  placeholder: {
    color: "#444"
  },

  option: {
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    borderWidth: 1,
  },
});