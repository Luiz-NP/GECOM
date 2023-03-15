import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { useContext } from "react";

import Toast from 'react-native-simple-toast';

export const dataPointAndCableTypeLengthUpdate = async (
    cableTypes,
    taskID,
    navigate,
    meters,
) => {
    if (!cableTypes) return Toast.show(
        'Selecione pelo menos um tipo de cabo',
        Toast.LONG,
    );

    navigate('CameraView', {taskID: taskID});
    const { uid } = auth().currentUser;
    console.log(meters)

    const taskRef = firestore().collection('Tasks').doc(uid)
    const taskData = await (await taskRef.get()).data().Tasks.find(task => task.id === taskID);
    
    // data point update
    const dataPoints = dataPointUpdate(taskData, cableTypes);

    // cable type length update
    const cableTypesLength = cableTypesLengthUpdate(taskData, cableTypes, meters);

    const newDataTask = {
        Tasks: firestore.FieldValue.arrayUnion({...taskData, dataPoints: dataPoints, cableTypesLength})
    };

    // update user's tasks
    await taskRef.set({ ...newDataTask });
}

function dataPointUpdate(taskData, cableTypes) {
    const taskDataPoints = taskData?.dataPoints;
    const prevDataPointsObjectCopyPlusNewInfo = taskDataPoints ? JSON.parse(JSON.stringify(taskDataPoints)) : {};
    const prevDataPointsLengthPlusOne = taskDataPoints ? Object.keys(taskData.dataPoints).length+1 : 1;

    // new dataPoint object copied and uploaded
    return prevDataPointsObjectCopyPlusNewInfo[prevDataPointsLengthPlusOne] = cableTypes;
}

function cableTypesLengthUpdate(taskData, cableTypes, meters) {
    const taskCableTypesLength = taskData?.cableTypesLength;
    const prevCablesTypesLengthObject = taskCableTypesLength ? JSON.parse(JSON.stringify(taskCableTypesLength)) : {};

    console.log(meters)
    
    cableTypes.forEach(value => {
        Object.keys(prevCablesTypesLengthObject).includes(value) ? 
        prevCablesTypesLengthObject[value] += meters :
        prevCablesTypesLengthObject[value] = 0;
    });

    // new cableTypesLength object copied and uploaded
    return prevCablesTypesLengthObject;
}