import {Routes} from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';
import {DataProvider} from './src/contexts/DataContext';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Routes />
      </DataProvider>  
    </AuthProvider>
  );
};

export default App;
