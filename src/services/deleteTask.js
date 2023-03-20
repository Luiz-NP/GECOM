import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { getDataPoints } from './getDataPoints';

export const deleteTask = async (taskID, setUpdate, update) => {
    const { uid } = auth().currentUser;
    const tasksRef = firestore().collection('users').doc(uid).collection('Tasks').doc(`Task-${taskID}`);
    const dataPoints = await getDataPoints(taskID);

    await tasksRef.delete();
    
    // deleting dataPoints
    dataPoints.map(async (_, index) => {
        await firestore()
            .collection('users')
            .doc(uid)
            .collection('Tasks')
            .doc(`Task-${taskID}`)
            .collection('Points')
            .doc(`Point-${index+1}`)
            .delete();
    });

    setUpdate(!update);
}