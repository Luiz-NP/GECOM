import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"

export const getTaskData = async (taskID) => {
	const { uid, displayName } = auth().currentUser;

  const tasksRef = firestore().collection('users').doc(uid).collection('Tasks').doc(`Task-${taskID}`);
  const taskData = (await tasksRef.get()).data();
  taskData.owner = displayName;

  return taskData;
}