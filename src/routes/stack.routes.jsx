import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens
import {Welcome} from '../screens/Welcome';
import {Auth} from '../screens/Auth';
import {Register} from '../screens/Register';
import {Profile} from '../screens/Profile';
import {Setitngs} from '../screens/Settings';
import {Home} from '../screens/Home';
import {TaskInfo} from '../screens/TaskInfo';
import {AddNewTask} from '../screens/AddNewTask';
import {CameraView} from '../components/CameraView';
import {DataPoint} from '../screens/DataPoint';
import {FinishTask} from '../screens/FinishTask';

// routes
export function StackRoutes() {
  return (
    <Navigator
      // initialRouteName="FinishTask"
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
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}
      />
      <Screen
        name="Settings"
        component={Setitngs}
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
        name="TaskInfo"
        component={TaskInfo}
        options={{
          headerShown: false,
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
        name="DataPoint"
        component={DataPoint}
        options={{
          headerShown: false,
          navigationBarColor: '#025248',
        }}
      />
      <Screen
        name="FinishTask"
        component={FinishTask}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
