import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { calcMeters } from '../api/calcMeters';

export const continueAndSendPhoto = async (
    positions,
    setPositions,
    setLocation,
    setPhoto,
    photo,
    meters,
    setMeters,
    taskID,
    replace
) => {
    replace('DataPoint', {taskID: taskID});
    if (positions.length > 1) calcMeters(positions, setPositions, setMeters);
    console.log(positions);

    setLocation(null);
    setPhoto(null);

    try {
        const user = auth().currentUser;
        const imgID = new Date().toLocaleString().split(', ').join('-').split('/').join('-');

        const storageRef = storage().ref(`user-${user.uid}/task-${taskID}/img-${imgID}.jpg`);

        await storageRef.putString(photo, 'base64');
    } catch (error) {
        console.log(error);
    }
}