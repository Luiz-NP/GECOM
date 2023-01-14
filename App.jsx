import {StatusBar} from 'react-native';
import {AuthProvider} from './src/contexts/AuthContext';
import {DataProvider} from './src/contexts/DataContext';
import {Routes} from './src/routes';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <DataProvider>
        <Routes />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
