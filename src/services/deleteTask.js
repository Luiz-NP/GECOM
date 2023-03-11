import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const deleteTask = async (data, setUpdate, update) => {
    const taskToDelete = data.id;

    const { uid } = auth().currentUser;
    const tasksRef = firestore().collection('Tasks').doc(uid);
    const tasksData = (await tasksRef.get()).data();

    const tasksUpdated = tasksData.Tasks.filter(
        task => task.id !== taskToDelete,
    );

    tasksData.Tasks = tasksUpdated;
    await tasksRef.update(tasksData);
    setUpdate(!update);
}