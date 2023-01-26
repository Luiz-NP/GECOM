import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

// components
import App from "../../App";

// routes
export const StackRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        navigationBarColor: '#121212',
      }}
    >
      <Screen 
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
