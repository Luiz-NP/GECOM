import Toast from 'react-native-simple-toast';

/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addNewTask = async (
    target,
    company,
    OSNumber,
    setUpdate,
    update,
    navigate,
    taskID) => {

    const uid = auth().currentUser.uid;

    if (company === '')
        return Toast.show(
            'Você não preencheu os campos corretamente',
            Toast.LONG,
        );

    // get reference of firestore's doc for this user
    const tasksRef = firestore().collection('Tasks').doc(uid)
    const newDataTask = {
        Task: firestore.FieldValue.arrayUnion({
            id: taskID,
            distance: 0,
            location: `${'Uberaba'} - ${'MG'}`,
            company: company,
            OSNumber: OSNumber ?? 'Não informado',
            status: 'pending',
        }),
    }

    try {
        // update user's tasks
        await tasksRef.update({ ...newDataTask })

        console.log('task created!');
        setUpdate(!update)
        navigate(target)

    } catch (error) {
        // if does't exist a doc for this user
        if (error.message === '[firestore/not-found] Some requested document was not found.') {
            await tasksRef.set({ ...newDataTask })
            setUpdate(!update);
            navigate(target);
        }else {
            console.log(error);
        }
    }
}