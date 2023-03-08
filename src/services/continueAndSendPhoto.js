import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

export const continueAndSendPhoto = async (
    setData,
    setLocation,
    location,
    setPhoto,
    photo,
    taskID,
    navigate
) => {
    const data = {
        photo: photo,
        location: location,
    };

    setData(prev => [...prev, data]);
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