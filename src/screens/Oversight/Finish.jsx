import { useContext } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { DataContext } from "../../contexts/DataContext";

export const Finish = ({ navigation }) => {
  // navigation prop to navigate
  const { navigate } = navigation;

  // data context
  const { data, setData, distance, setDistance } = useContext(DataContext); 

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{data.length} fotos tiradas</Text>
      <Text style={styles.text}>{distance} metros percorridos</Text>

      <Pressable 
        style={styles.pressable}
        onPress={() => {
          // cleaning
          setData([]);
          setDistance(0);

          navigate("Home");
        }}
      >
        <Text style={styles.text}>Finalizar</Text>  
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
   
    height: "100%",
    backgroundColor: "black",
  },
  pressable: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,

    backgroundColor: "blue",

    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});
