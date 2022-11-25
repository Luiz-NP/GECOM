import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens

import {Login} from '../screens/Login';

// routes
export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        animationDuration: 150,
      }}>
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
