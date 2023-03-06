import Toast from 'react-native-simple-toast';

import auth from '@react-native-firebase/auth';

export const signInWithEmailAndPassword = async (email, password, navigate) => {

    try {
        await auth().signInWithEmailAndPassword(email, password)
        const user = auth().currentUser

        user?.emailVerified ?
            navigate('Home') :
            (Toast.show(
                'Enviado um link de verificação para seu email',
                Toast.LONG)
            );

    } catch (error) {

        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        console.error(error);
    }
}