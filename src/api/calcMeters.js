import axios from "axios";

import { getPreciseDistance } from 'geolib';

export const calcMeters = async (
    setLoading,
    location,
    setRoadPoints,
    setMeters,
    setData
) => {
    setLoading(true);
    const apiKey = "AIzaSyACDtPI_RGlrWSaj--md9PQFctUHi-PtV8";

    await axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=${location.map(value => `${value.location.latitude}, ${value.location.longitude}`).join('|')
        }&interpolate=true&key=${apiKey}`)
        .then(res => {
            const roadPoints = JSON.parse(JSON.stringify(res.data.snappedPoints.map(value => value.location)));
            setRoadPoints(roadPoints);

            console.log("roadPoints:", roadPoints);
            let meters = 0;

            for (let count = 0; count <= roadPoints.length - 2; count++) {
                meters += getPreciseDistance(
                    roadPoints[count],
                    roadPoints[count + 1]
                );
            }

            console.log("meters:", meters);

            setMeters(prev => prev + meters);
            setData([]);

            setLoading(false);
        })
        .catch(err => console.log(err));
};