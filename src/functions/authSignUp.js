/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { capitalizeFirst } from './capitalizeFirst';

/********************************************************************************
AUTH SIGNUP creates a new the user to the app, using Google's Firebase 
Authentication service with the user's Gmail account.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export const authSignUp = async (
    firstName,
    lastName,
    email,
    password,
    navigate
) => {
    const { alert } = Alert;

    try {
        if (!(email.trim() || password.trim() || firstName.trim() || lastName.trim())) { 
            throw Error('Empty fields');
        };

        // Capitalize name
        const unformattedName = `${firstName} ${lastName}`;
        const formattedName = capitalizeFirst(unformattedName);

        const { user } = await auth().createUserWithEmailAndPassword(email, password);
        await user.updateProfile({
            displayName: formattedName
        });

        const newUser = auth().currentUser;
        await newUser.sendEmailVerification();

        alert(
            'Verifique seu email',
            'enviamos um link de verificação no seu email, veifique para continuar',
        );

        navigate('Welcome');
    } catch (error) {
        console.log(error.code)
        if (error.message == 'Empty fields') {
            alert(
              'Campos vazios',
              'Por favor preencha todos os campos'
            );
        };
        if (error.code == 'auth/email-already-in-use') {
            alert(
              'Email em uso',
              'Este email já está em uso'
            );
        };
    };
};