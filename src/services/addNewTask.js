import uuid from 'react-native-uuid';

/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addNewTask = async (
    target,
    data,
    address,
    setUpdate,
    update,
    navigate,
) => {
    const { uid } = auth().currentUser;
    const taskID = uuid.v4();

    // // get reference of firestore's doc for this user
    const userUidRef = firestore().collection('users').doc(uid);
    const tasksRef = userUidRef.collection('Tasks').doc(`Task-${taskID}`);

    const newTaskData = {
        id: taskID,
        distance: 0,
        location: `${address.city} - ${address.state}`,
        company: data.company,
        OSNumber: data.OSNumber ?? 'Não informado',
        status: 'pending',
    }

    try {
        // set user uid doc
        await userUidRef.set({});

        // set user's task
        await tasksRef.set({ ...newTaskData })
        setUpdate(!update);
        navigate(target, {taskID: taskID});

    } catch (error) {
        console.log(error);
    }
}
