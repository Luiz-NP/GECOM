import {Routes} from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';
import {DataProvider} from './src/contexts/DataContext';
import {UpdateProvider} from './src/contexts/UpdateContext';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <UpdateProvider>
          <Routes />
        </UpdateProvider>
      </DataProvider>  
    </AuthProvider>
  );
};

export default App;
