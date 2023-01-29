import {Routes} from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
