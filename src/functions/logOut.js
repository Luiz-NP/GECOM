import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const logOut = (navigate) => {
    auth()
        .signOut()
        .then(() => navigate('Welcome'));

    GoogleSignin.signOut();
}