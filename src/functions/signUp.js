import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

export const signUp = async (
    firstName,
    lastName,
    email,
    password,
    navigate
) => {
    const { alert } = Alert;

    try {
        if (!(email.trim() || password.trim() || firstName.trim() || lastName.trim())) { 
            throw Error("Empty fields")
        }

        // Capitalize name
        const unformattedName = `${firstName} ${lastName}`;
        const formattedName = unformattedName
            .split(' ')
            .map(name => {
                return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
            })
            .join(' ');

        const { user } = await auth().createUserWithEmailAndPassword(email, password);
        await user.updateProfile({
            displayName: formattedName
        })

        const newUser = auth().currentUser;
        await newUser.sendEmailVerification();

        alert(
            'Verifique seu email',
            'enviamos um link de verificação no seu email, veifique para continuar',
        );

        navigate("Welcome");
    } catch (error) {
        console.log(error.code)
        if (error.message == 'Empty fields') {
            alert(
                'Campos vazios',
                'Por favor preencha todos os campos'
            );
        }
        if (error.code == 'auth/email-already-in-use') {
            alert(
                'Email em uso',
                'Este email já está em uso'
            );
        }
    }
}