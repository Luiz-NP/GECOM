import { getPreciseDistance } from "geolib";
import { finishTask } from "../services/finishTask";
import { getDataPoints } from "../services/getDataPoints";

export const calcMetersAndFinishTask = async (taskID, setMeters, setLoading, setCableTypesLength) => {
	const cableTypesLengthObject = {};
	const allCoords = [];
	let meters = 0;

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
			const metersBetweenPoints = getPreciseDistance(allCoords[allCoords.length-2], allCoords[allCoords.length-1]);
			meters += metersBetweenPoints;

			cableTypes.forEach(cables => {
				for (key in cables) cableTypesLengthObject[cables[key]] += meters;
			})
		}
	}

	for (key in cableTypesLengthObject) setCableTypesLength(prev => [...prev, {cabos: key, metros: cableTypesLengthObject[key]}]);
	console.log(cableTypesLengthObject);

	finishTask(taskID, meters, cableTypesLengthObject);
	setMeters(prev => prev + meters);
	setLoading(false);
};