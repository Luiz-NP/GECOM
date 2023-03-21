/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

/********************************************************************************
AUTH SIGNOUT signs the user out of the app using Google's Authentication service.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export const authSignOut = (navigate) => {
    auth()
        .signOut()
        .then(() => navigate('Welcome'));

    GoogleSignin.signOut();
}