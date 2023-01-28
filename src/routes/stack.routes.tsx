import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens
import {Welcome} from '../screens/Welcome';
import {Auth} from '../screens/Auth';
import {Register} from '../screens/Register';
import {Home} from '../screens/Home';

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
        navigationBarColor: '#121212',
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
          navigationBarColor: 'white',
        }}
      />
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
          navigationBarColor: '#006458',
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
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
    </Navigator>
  );
};
