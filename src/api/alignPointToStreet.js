import axios from "axios";

export const alignPointToStreet = async (position, setPosition) => {
    const apiKey = "AIzaSyACDtPI_RGlrWSaj--md9PQFctUHi-PtV8";

    return await axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=${`${position.latitude}, ${position.longitude}`}&interpolate=true&key=${apiKey}`)
        .then(res => {
            const roadPoint = JSON.parse(JSON.stringify(res.data.snappedPoints.map(value => value.location)));
            setPosition(...roadPoint);
        })
        .catch(err => console.log(err));
};