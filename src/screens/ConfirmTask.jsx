import {View, Button, StyleSheet} from 'react-native';
import {useContext} from 'react';
import {DataContext} from '../contexts/DataContext';

export function ConfirmTask({navigation}) {
  const {data} = useContext(DataContext);

  return (
    <View style={styles.wrapper}>
      <Button
        onPress={() => navigation.navigate('CameraView')}
        title="Tirar outra foto"
      />
      {data.length > 1 ? <Button title="Finalizar" /> : ''}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
