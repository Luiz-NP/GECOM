/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

/********************************************************************************
AUTH SIGNIN WITH EMAIL AND PASSWORD authenticates the user to the app, using 
Google's Firebase Authentication service with the provided email and password.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export const authSignInWithEmailAndPassword = async (email, password, navigate) => {

    try {
        await auth().signInWithEmailAndPassword(email, password)
        const user = auth().currentUser

        user?.emailVerified ?
            navigate('Home') :
            (Toast.show(
                'Por favor, verifique seu email para continuar',
                Toast.LONG)
            );

    } catch (error) {

        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        };

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        };

        console.error(error);
    };
};