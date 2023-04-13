/*========== ROOT IMPORTS ==========*/
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useContext, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Toast from 'react-native-simple-toast';

/*========== LOCAL FILES & COMPONENTS ==========*/
import {UpdateContext} from '../contexts/UpdateContext';
import {Path, Svg} from 'react-native-svg';
import {NotificationLocation} from '../components/NotificationLocation';
import {useEffect} from 'react';
import {addNewTask} from '../services/addNewTask';
import {coordsToAddress} from '../api/coordsToAddress';
import {LoadingIndicator} from '../components/LoadingIndicator';
import {DropDown} from '../components/DropDown';

export const AddNewTask = ({navigation}) => {
  const {navigate} = navigation;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [address, setAddress] = useState();
  const company = [
    {label: 'Algar Telecom', value: 'Algar Telecom'},
    {label: 'Claro', value: 'Claro'},
    {label: 'Tim', value: 'Tim'},
    {label: 'Vivo', value: 'Vivo'},
  ];

  const {update, setUpdate} = useContext(UpdateContext);

  useEffect(() => {
    if (errors?.company) return Toast.show(errors.company.message, Toast.LONG);
  }, [errors?.company]);

  useEffect(() => {
    coordsToAddress(setAddress);
  }, []);

  const onSubmit = (data, target) => {
    addNewTask(target, data, address, setUpdate, update, navigate);
  };

  if (!address) return <LoadingIndicator text="Obtendo localização..." />;

  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <View style={styles.userArea}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={styles.backBtn}
            activeOpacity={0.8}>
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
          <TouchableOpacity
            activeOpacity={1.0}
            onPress={() => navigate('Profile')}></TouchableOpacity>
          <Text style={styles.titleScreen}>Adicionar tarefa</Text>
        </View>
      </View>
      <NotificationLocation address={address} />
      <View showsVerticalScrollIndicator={false} style={styles.form}>
        <View style={[styles.inputArea, styles.spacer]}>
          <View style={styles.localInput}></View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Adicionar OS (opcional)</Text>

            <Controller
              control={control}
              name="OSNumber"
              render={({field: {value, onChange}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  maxLength={5}
                  keyboardType="numeric"
                  placeholder="Numero da OS"
                  placeholderTextColor={'#444'}
                />
              )}
            />

            <View style={styles.required}>
              <Text style={styles.label}>Empresa</Text>
              <Text style={styles.requiredText}>*</Text>
            </View>

            <Controller
              control={control}
              name="company"
              rules={{
                required: 'Selecione uma empresa.',
              }}
              render={({field: {onChange}}) => (
                <DropDown data={company} onChange={onChange} />
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSubmit(data => onSubmit(data, 'Home'))}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Adicionar tarefa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSubmit(data => onSubmit(data, 'CameraView'))}>
          <View style={styles.buttonHighlight}>
            <Text style={styles.buttonText}>Iniciar inspeção</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },

  spacer: {
    marginTop: 24,
    zIndex: 1,
  },

  backBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#1e1e1e',
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
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    borderBottomColor: 'white',
  },
  titleScreen: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },

  form: {
    paddingHorizontal: 24,
  },

  required: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 6,
    marginTop: 12,
  },

  requiredText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FF0000',
    marginTop: 6,
    marginLeft: 2,
  },

  input: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
  },

  localInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionArea: {
    marginTop: 12,
    marginBottom: 36,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 48,
    width: '100%',
  },

  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#1e1e1e',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHighlight: {
    width: '100%',
    height: 60,
    backgroundColor: '#025248',
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 16,
    color: 'white',
  },
});
