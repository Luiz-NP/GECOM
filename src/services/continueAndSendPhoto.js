import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

export const continueAndSendPhoto = async (
    setData,
    setLocation,
    location,
    setPhoto,
    photo,
    taskId
) => {
    const data = {
        photo: photo,
        location: location,
    };

    setData(prev => [...prev, data]);
    setLocation(null);
    setPhoto(null);

    try {
        const user = auth().currentUser
        const folderRef = storage().ref(`${user.uid}/task${taskId}/`);

        const imagesFromStorage = await folderRef.listAll()
        const imagesFromStorageLength = imagesFromStorage.items.length + 1

        const storageRef = storage().ref(`${user.uid}/task${taskId}/img${imagesFromStorageLength}.jpg`)

        storageRef.putString(photo, 'base64')

    } catch (error) {
        console.log(error);
    }
}