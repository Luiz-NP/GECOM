import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

export const signUp = async (
    firstName,
    lastName,
    email,
    password
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

        const { user } = await auth().createUserWithEmailAndPassword(email, password)
        await user.updateProfile({
            displayName: formattedName
        })

        const newUser = auth().currentUser
        await newUser.sendEmailVerification()

        alert(
            'Verifique seu email',
            'enviamos um link de verificação no seu email, veifique para continuar',
        )

    } catch (error) {
        if (error.message == 'Empty fields') {
            alert(
                'Campos vazios',
                'Por favor preencha todos os campos'
            )
        }
    }
}