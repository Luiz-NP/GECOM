import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens

import DebugCamera from '../screens/Debug/DebugCamera';
import Home from '../screens/Home/Home';
import Login from '../screens/Welcome/Login';
import AddCode from '../screens/Profile/AddCode';
import Privacy from '../screens/Profile/Privacy';
import Profile from '../screens/Profile/Profile';
import RegisterCar from '../screens/Profile/RegisterCar';
import Register from '../screens/Welcome/Register';
import Settings from '../screens/Settings/Settings';
import Welcome from '../screens/Welcome/Welcome';

// routes
export function StackRoutes() {
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
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}
      />
      <Screen
        name="RegisterCar"
        component={RegisterCar}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="AddCode"
        component={AddCode}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
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
      <Screen
        name="DebugCamera"
        component={DebugCamera}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
