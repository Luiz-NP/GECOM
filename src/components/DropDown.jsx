import {useState} from "react"
import DropDownPicker from 'react-native-dropdown-picker';

export const DropDown = ({value, setValue, items, setItems}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      setOpen={setOpen}
      
      value={value}
      setValue={item => setValue(item())}
      
      items={items}
      setItems={setItems}
      
      searchable
      searchPlaceholder="Pesquisar. . ."
      
      theme="DARK"
      
      listMode="SCROLLVIEW"

      style={{
        backgroundColor: '#1e1e1e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderColor: '#1e1e1e',
      }}
      textStyle={{
        color: 'white',
        fontFamily: 'ClashGrotesk-Medium',
        fontSize: 16,
      }}
      dropDownContainerStyle={{
        backgroundColor: '#1e1e1e',
        borderColor: '#1e1e1e',
      }}
      badgeTextStyle={{
        color: 'black',
        fontFamily: 'ClashGrotesk-Medium',
        fontSize: 10,
      }}
      placeholder="Selecione"
      placeholderStyle={{
        color: "#444"
      }}
      
    />
  );
};
