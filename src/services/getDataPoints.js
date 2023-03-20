import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"

export const getDataPoints = async (taskID) => {
	const { uid } = auth().currentUser;

	const tasksRef = firestore().collection('users').doc(uid).collection('Tasks').doc(`Task-${taskID}`).collection('Points');
	const dataPoints = (await tasksRef.get()).docs.map(point => point.data());

	return dataPoints;
}