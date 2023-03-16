import {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

/*========== THIRD PARTY IMPORTS ==========*/
import LogRocket from '@logrocket/react-native';

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => setUser(user));
    if (auth().currentUser !== null) {
      LogRocket.identify(auth().currentUser.uid, {
        name: auth().currentUser.displayName,
        email: auth().currentUser.email,
      });
    } else {
      LogRocket.identify('anonymous', {
        name: 'Usuário Anônimo',
        email: 'Nenhum',
      });
    }
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}
