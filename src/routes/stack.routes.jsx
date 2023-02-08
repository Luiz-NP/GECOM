import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens
import {Welcome} from '../screens/Welcome';
import {Auth} from '../screens/Auth';
import {Register} from '../screens/Register';
import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {CameraView} from '../components/CameraView';
import {AddNewTask} from '../screens/AddTask';
import {Settings} from '../screens/Settings';
import {TaskInfo} from '../screens/TaskInfo';

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
export function StackRoutes() {
  return (
    <Navigator
      // initialRouteName="TaskInfo"
      screenOptions={{
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="AddNewTask"
        component={AddNewTask}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="CameraView"
        component={CameraView}
        options={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}
      />
      <Screen
        name="TaskInfo"
        component={TaskInfo}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
