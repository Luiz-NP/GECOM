import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens
import {Welcome} from '../screens/Welcome';
import {Auth} from '../screens/Auth';
import {Register} from '../screens/Register';
import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

// routes
export const StackRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          navigationBarColor: '#006458',
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          navigationBarColor: '#006458',
        }}
      />
      <Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
          navigationBarColor: '#006458',
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          navigationBarColor: 'white',
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          navigationBarColor: '#025248',
        }}
      />
    </Navigator>
  );
};
