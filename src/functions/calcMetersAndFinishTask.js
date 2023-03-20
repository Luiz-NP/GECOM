import { getPreciseDistance } from "geolib";
import { getDataPoints } from "../services/getDataPoints";

export const calcMetersAndFinishTask = async (taskID, setMeters, setLoading, setCableTypesLength) => {
	const cableTypesLengthObject = {};
	const allCoords = [];

	const dataPoints = await getDataPoints(taskID);
	const cableTypes = dataPoints.map(value => JSON.parse(JSON.stringify(value.cables.in)));

	cableTypes.forEach(cables => incrementCableTypesLengthObjectWithNewProperties(cables));
	dataPoints.forEach(point => calcMetersBetweenPoints(point.coords));
	
	function incrementCableTypesLengthObjectWithNewProperties(cables) {
		for (key in cables) cableTypesLengthObject[cables[key]] = 0;
	}
	
	function calcMetersBetweenPoints(coords) {
		allCoords.push(coords);
		if (allCoords.length > 1) {
			const meters = getPreciseDistance(allCoords[allCoords.length-2], allCoords[allCoords.length-1]);
			setMeters(prev => prev+meters);

			cableTypes.forEach(cables => {
				for (key in cables) cableTypesLengthObject[cables[key]] += meters;
			})
		}
	}

	for (key in cableTypesLengthObject) setCableTypesLength(prev => [...prev, {cabos: key, metros: cableTypesLengthObject[key]}]);
	console.log(cableTypesLengthObject);

	setLoading(false);
};