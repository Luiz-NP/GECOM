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
    replace,
    setLoading
) => {
    setLoading(true);
    alignPointToStreet(location, setPosition);
    
    try {
        const user = auth().currentUser;
        const imgID = new Date().toLocaleString().split(', ').join('-').split('/').join('-');
        
        const storageRef = storage().ref(`user-${user.uid}/task-${taskID}/img-${imgID}.jpg`);
        
        replace('DataPoint', {taskID: taskID, imageRef: storageRef.path});
        
        await storageRef.putString(photo, 'base64');
        
        setLocation(null);
        setPhoto(null);
        setLoading(false);
    } catch (error) {
        console.log(error);
    }
}