import { getPreciseDistance } from "geolib";

/********************************************************************************
DISTANCE BETWEEN POINTS passes GPS coordinates of a point in space to an array 
and calculates the distance between the last two points.
********************************************************************************/
export function distanceBetweenPoints(coordinates, setDistance) {
  const allCoordinates = [];
    allCoordinates.push(coordinates);
    if (allCoordinates.length > 1) {
      const distance = getPreciseDistance(allCoordinates[allCoordinates.length-2], allCoordinates[allCoordinates.length-1]);
      setDistance(prev => prev + distance);
    }
}