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
import {TaskInfo} from '../screens/TaskInfo';

// routes
export function StackRoutes() {
  return (
    <Navigator
      // initialRouteName="TaskInfo"
      screenOptions={{
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        navigationBarColor: 'rgba(0,0,0,0.002))',
        statusBarColor: 'transparent',
      }}>
      <Screen
        name="Welcome"
        component={Welcome}
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
        name="Auth"
        component={Auth}
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
        name="AddNewTask"
        component={AddNewTask}
        options={{
          headerShown: false,
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
        name="CameraView"
        component={CameraView}
        options={{
          headerShown: false,
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
