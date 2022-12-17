import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const {Screen, Navigator} = createNativeStackNavigator();

// screens

import Login from '../screens/Login';
import Privacy from '../screens/Privacy';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';

// routes
export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        animationDuration: 150,
        navigationBarColor: '#121212',
      }}>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Privacy"
        component={Privacy}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
