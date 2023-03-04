import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './stack.routes';
import LogRocket from '@logrocket/react-native';
LogRocket.init('82yinr/gecom');

// create route context
export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
