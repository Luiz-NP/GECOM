import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../screens/Welcome';

const {Screen, Navigator} = createNativeStackNavigator();
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
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
