import axios from "axios";

import { getPreciseDistance } from 'geolib';

export const calcMeters = async (
    positions,
    setPositions,
    setMeters
) => {
    const apiKey = "AIzaSyACDtPI_RGlrWSaj--md9PQFctUHi-PtV8";
    const twoPointsLocation = [
        {
            latitude: positions[positions.length-2].latitude, 
            longitude: positions[positions.length-2].longitude,
        },
        {
            latitude: positions[positions.length-1].latitude, 
            longitude: positions[positions.length-1].longitude,
        },
    ];

    await axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=${twoPointsLocation.map(value => `${value.latitude}, ${value.longitude}`).join('|')
        }&interpolate=true&key=${apiKey}`)
        .then(res => {
            const roadPoints = JSON.parse(JSON.stringify(res.data.snappedPoints.map(value => value.location)));

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
            setPositions([]);
        })
        .catch(err => console.log(err));
};