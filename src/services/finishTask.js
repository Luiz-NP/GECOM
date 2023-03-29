import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const finishTask = async (taskID, meters, cableTypesLengthObject) => {
	const { uid } = auth().currentUser;

  const tasksRef = firestore().collection('users').doc(uid).collection('Tasks').doc(`Task-${taskID}`);
  
  await tasksRef.update({
    meters: {
      traveled: meters,
      byCableType: cableTypesLengthObject,
    },
    status: "completed"
  });
}