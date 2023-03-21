/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import '../configs/google.config';

/********************************************************************************
AUTH SIGNIN WITH GOOGLE authenticates the user to the app, using Google's Firebase 
Authentication service with the user's Gmail account.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export const authSignInWithGoogle = async () => {

    try {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);

    } catch (error) {
        console.log(error);
    }
}