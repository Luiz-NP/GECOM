import {useState} from "react"
import DropDownPicker from 'react-native-dropdown-picker';

export const DropDown = ({items, setItems, value, setValue, multiple}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={multiple}
      theme="DARK"
      mode="BADGE"
      listMode="SCROLLVIEW"
      scrollViewProps={{
        nestedScrollEnabled: true
      }}
      badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#00c4ac", "#8ac926", "#00b4d8", "#e9c46a"]}
      searchable
      searchPlaceholder="Pesquisar. . ."
      
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
        position: "relative",
        top: 0,
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