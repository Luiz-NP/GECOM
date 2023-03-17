import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { alignPointToStreet } from '../api/alignPointToStreet';

export const continueAndSendPhoto = async (
    setPosition,
    location,
    setLocation,
    setPhoto,
    photo,
    taskID,
    replace
) => {
    replace('DataPoint', {taskID: taskID});
    alignPointToStreet(location, setPosition);

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