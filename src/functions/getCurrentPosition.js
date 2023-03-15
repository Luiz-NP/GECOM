import Geolocation from '@react-native-community/geolocation';
import { getPreciseDistance } from 'geolib';

export const getCurrentPosition = (
    lastLocation,
    setLastLocation,
    setLocation,
    setDelay,
    setLoading,
    positions
) => {
    Geolocation.getCurrentPosition(
        position => {
            const coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            const diference = getPreciseDistance(lastLocation, coordinates);

            setLastLocation(coordinates);

            const expression = diference < 1 &&
                !positions?.some(
                    x =>
                        coordinates.latitude === x.latitude &&
                        coordinates.longitude === x.longitude,
                )

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
        { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 },
    )
}