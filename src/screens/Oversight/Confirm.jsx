import { View , Pressable, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { getDistance } from "geolib";

export const Confirm = ({ navigation }) => {
  // navigation prop to navigate
  const { navigate } = navigation; 

  const { data, setDistance } = useContext(DataContext);

  return (
    <View style={styles.wrapper}>
      <Pressable 
        style={styles.pressable}
        onPress={() => navigate("Camera")}
      >
        <Text style={styles.text}>outra foto</Text>  
      </Pressable>
      
      {data.length >= 2 ? (
         <Pressable
          style={styles.pressable}
          onPress={() => {
            let distance = 0;
            
            for (let count = 0; count <= data.length-2; count++) {
              distance += getDistance(data[count].location, data[count+1].location);
            }

            setDistance(distance);
            navigate("Finish");
        }}
      >
        <Text style={styles.text}>finalizar</Text>
      </Pressable>

      ) : ''}
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
    marginVertical: 20,
    paddingHorizontal: 100,
    paddingVertical: 20,

    backgroundColor: "blue",

    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});
