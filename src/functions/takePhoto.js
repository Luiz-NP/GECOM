import RNFS from 'react-native-fs';

export const takePhoto = async (camera, setDelay, setLoading, setPhoto) => {

    const photo = await camera.current.takePhoto({
        // flash: 'on',
    });
    setDelay(3000);
    setLoading(true);

    const pic = await RNFS.readFile(photo.path, 'base64').then(res => {
        return res;
    });
    setPhoto(pic);
}