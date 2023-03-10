import axios from "axios";
import Geolocation from "@react-native-community/geolocation";

export const coordsToAddress = (setAddress) => {
    const apiKey = "AIzaSyACDtPI_RGlrWSaj--md9PQFctUHi-PtV8";

    Geolocation.getCurrentPosition(
        async position => {
            const coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            // google geocode api, this converts coords to a real address 
            const apiResult = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${apiKey}`
            );
            
            const formattedAddress = await apiResult.data.results[0].formatted_address.split(', ');
            
            const address = {
                street: formattedAddress[0],
                number: formattedAddress[1],
                city: formattedAddress[2].slice(0, 10),
                state: formattedAddress[2].slice(13),
                CEP: formattedAddress[3],
                contry: formattedAddress[4],
            }
            setAddress(address)
        },
        error => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 },
    )

};