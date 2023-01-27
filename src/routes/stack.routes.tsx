import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens
import { Welcome } from '../screens/Welcome';

// routes
export const StackRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        navigationBarColor: '#121212',
      }}>
      <Screen
        name="welcome"
        component={Welcome}
        options={{
          headerShown: false,
          navigationBarColor: '#006458',
        }}
      />
    </Navigator>
  );
};
