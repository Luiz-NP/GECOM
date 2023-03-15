import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { calcMeters } from '../api/calcMeters';

export const continueAndSendPhoto = async (
    positions,
    setPositions,
    setLocation,
    location,
    setPhoto,
    photo,
    meters,
    setMeters,
    taskID,
    replace
) => {
    replace('DataPoint', {taskID: taskID, meters: meters});
    if (positions.length > 1) calcMeters(positions, setMeters);
    console.log("meters in continueAndSendPhoto", meters);

    setPositions(prev => [...prev, location]);
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