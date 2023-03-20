import Geolocation from '@react-native-community/geolocation';
import { getPreciseDistance } from 'geolib';

export const getCurrentPosition = (
    lastLocation,
    setLastLocation,
    setLocation,
    setDelay,
    setLoading,
    position
) => {
    Geolocation.getCurrentPosition(
        info => {
            const coordinates = {
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
            };

            const diference = getPreciseDistance(lastLocation, coordinates);

            setLastLocation(coordinates);

            const expression = diference < 1 && (position.latitude !== coordinates.latitude && position.longitude !== coordinates.longitude);
            console.log(diference, position, coordinates);

            if (expression) {
                setLocation(coordinates);
                setDelay(null);
                setLoading(false);
            }
        },
        error => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 60000, maximumAge: 10000 },
    )
}