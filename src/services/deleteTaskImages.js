import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

export const deleteTaskImages = async (taskID) => {
    try {
        const { uid } = auth().currentUser;
        const storageRef = storage().ref(`user-${uid}/task-${taskID}/`);
        const storageList = await storageRef.listAll();
        const storageImages = storageList.items;

        storageImages.map(async image => await image.delete());
    } catch (error) {
        console.log(error);
    }
}