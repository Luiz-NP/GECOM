import {Routes} from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';
import {PositionsProvider} from './src/contexts/PositionsContext';
import {UpdateProvider} from './src/contexts/UpdateContext';

const App = () => {
  return (
    <AuthProvider>
      <PositionsProvider>
        <UpdateProvider>
          <Routes />
        </UpdateProvider>
      </PositionsProvider> 
    </AuthProvider>
  );
};

export default App;
