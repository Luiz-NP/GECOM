import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Svg, Path } from 'react-native-svg';

export const DropDown = ({ data, onChange }) => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
            <Svg
              width={28}
              height={28}
              viewBox="0 0 512 512" 
              xmlns="http://www.w3.org/2000/svg">
              <Path 
                d="m221.997 346.762-97.809-69.414c-7.207-5.113-8.902-15.102-3.788-22.307 5.115-7.206 15.103-8.902 22.308-3.788l86.485 61.376 137.747-145.35c6.079-6.413 16.205-6.686 22.62-.608 6.414 6.078 6.686 16.205.607 22.619l-147.299 155.43c-1.654 1.122-5.394 3.334-10.668 3.73-4.716.354-8.383-.915-10.203-1.688zm290.003-90.762c0 141.159-114.841 256-256 256s-256-114.842-256-256 114.841-256 256-256 256 114.841 256 256zm-32 0c0-123.514-100.486-224-224-224s-224 100.485-224 224 100.486 224 224 224 224-100.486 224-224z" 
                fill="#FFF" 
                >
              </Path>
            </Svg>
          )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Selecione"
      searchPlaceholder="Pesquisar"
      value={value}
      onChange={item => {
        setValue(item.value);
        onChange(item.value);
      }}
      renderItem={renderItem}
      containerStyle={{backgroundColor: "#1e1e1e", borderColor: "#1e1e1e", borderRadius: 8, overflow: 'hidden'}}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    shadowColor: '#1e1e1e',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  item: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#1e1e1e",
    marginLeft: 4,
  },
  textItem: {
    flex: 1,
    fontSize: 18,
    color: "white",
    fontFamily: 'ClashGrotesk-Medium',
  },
  placeholderStyle: {
    fontSize: 18,
    color: "#444",
    fontFamily: 'ClashGrotesk-Medium',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: "white",
    fontFamily: 'ClashGrotesk-Medium',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
    backgroundColor: "#1e1e1e",
    color: "white",
    fontFamily: 'ClashGrotesk-Medium',
  },
});