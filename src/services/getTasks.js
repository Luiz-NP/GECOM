/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const getTasks = async (
    setTasks,
    setPendingTasks,
    setCompletedTasks
) => {
    const { uid } = auth().currentUser;

    const tasksRef = firestore().collection('Tasks').doc(uid)
    const tasksData = (await tasksRef.get()).data()

    // all tasks
    setTasks(tasksData?.Task)

    // pending tasks
    const tasksPending = tasksData?.Task.filter(
        task => task.status === 'pending',
    );
    setPendingTasks(tasksPending)

    // completed tasks
    const tasksCompleted = tasksData?.Task.filter(
        task => task.status === 'completed',
    );
    setCompletedTasks(tasksCompleted);

}