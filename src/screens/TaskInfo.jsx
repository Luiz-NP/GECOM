import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';

export function TaskInfo({route, navigation}) {
  const {data} = route.params;

  const {navigate} = navigation;

  console.log(data);

  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
        <Text style={styles.contentTextBtn}>Voltar</Text>
      </Pressable>

      <Pressable style={styles.btn}>
        <Text style={styles.contentTextBtn}>Editar</Text>
      </Pressable>

      <View>
        <Text style={styles.field}>
          Localização: <Text style={styles.info}>{data.location}</Text>
        </Text>

        <Text style={styles.field}>
          Postes: <Text style={styles.info}>{data.poles}</Text>
        </Text>

        <Text style={styles.field}>
          Variedade de cabos:<Text style={styles.info}> São Paulo</Text>
        </Text>

        <Text style={styles.field}>
          Distancia: <Text style={styles.info}>{data.distance}</Text>
        </Text>

        <Text style={styles.field}>
          Status: <Text style={styles.info}>{data.status}</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigate('Camera')}>
        <Text style={styles.contentTextBtn}>{data.distance > 0 ? 'Continuar' : 'Iniciar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#025248',
  },

  btn: {
    borderRadius: 25,
    backgroundColor: '#006458',
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  contentTextBtn: {
    width: '85%',
    paddingLeft: 10,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#FFFFFF',
    fontSize: 18,
  },

  field: {
    fontFamily: 'ClashGrotesk-Bold',
    fontSize: 20,
  },

  info: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 20,
  },
});
