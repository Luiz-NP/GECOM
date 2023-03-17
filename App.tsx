import {Routes} from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';
import {PositionProvider} from './src/contexts/PositionContext';
import {UpdateProvider} from './src/contexts/UpdateContext';

const App = () => {
  return (
    <AuthProvider>
      <PositionProvider>
        <UpdateProvider>
          <Routes />
        </UpdateProvider>
      </PositionProvider> 
    </AuthProvider>
  );
};

export default App;
