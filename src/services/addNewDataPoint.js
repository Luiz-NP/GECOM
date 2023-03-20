import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"

export const addNewDataPoint = async (cables, position, taskID, navigate, target, imageRef) => {

    const { uid } = auth().currentUser;

    const tasksRef = firestore().collection('users').doc(uid).collection('Tasks').doc(`Task-${taskID}`).collection('Points');
    const prevPoints = (await tasksRef.get()).docs.map(point => point.data());
    const newDataPoint = tasksRef.doc(`Point-${prevPoints.length+1}`);

    const newData = {
        coords: position,
        cables: {
            in: prevPoints[prevPoints.length-1]?.cables?.out ?? {},
            out: cables
        },
        photo: imageRef,
    };

    try {
        // set new data point
        await newDataPoint.set(newData);
        navigate(target, {taskID: taskID});

    } catch (error) {
        console.log(error);
    }
}