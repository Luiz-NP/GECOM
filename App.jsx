import {StatusBar} from 'react-native';
import {AuthProvider} from './src/contexts/AuthContext';
import {Routes} from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Routes />
    </AuthProvider>
  );
}
