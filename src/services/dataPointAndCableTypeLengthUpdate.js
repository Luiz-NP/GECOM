import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"

import Toast from 'react-native-simple-toast';

export const dataPointAndCableTypeLengthUpdate = async (
    cableTypes,
    taskID,
    navigate,
) => {
    if (!cableTypes) return Toast.show(
        'Selecione pelo menos um tipo de cabo',
        Toast.LONG,
    );

    navigate('CameraView', {taskID: taskID});
    const { uid } = auth().currentUser;

    const taskRef = firestore().collection('Tasks').doc(uid)
    const taskData = await (await taskRef.get()).data().Tasks.find(task => task.id === taskID);
    
    // data point update
    const dataPoints = await dataPointUpdate(taskData, cableTypes);

    // cable type length update
    // const cableTypesLength = cableTypesLengthUpdate(taskData, cableTypes);

    const newDataTask = {
        Tasks: firestore.FieldValue.arrayUnion({...taskData, dataPoints: dataPoints})
    };

    // update user's tasks
    await taskRef.set({ ...newDataTask });
}

async function dataPointUpdate(taskData, cableTypes) {
    const taskDataPoints = taskData?.dataPoints;
    const prevDataPoints = taskDataPoints ? JSON.parse(JSON.stringify(taskDataPoints)) : [];
    const IOcables = {
        incomingCables: prevDataPoints[prevDataPoints.length-1]?.comingOutCables ?? [],
        comingOutCables: cableTypes,
    };

    console.log(prevDataPoints)

    const newDataPoints = [...prevDataPoints, IOcables];
    
    return newDataPoints;
}

// function cableTypesLengthUpdate(taskData, cableTypes) {
//     const taskCableTypesLength = taskData?.cableTypesLength;
//     const prevCablesTypesLengthObject = taskCableTypesLength ? JSON.parse(JSON.stringify(taskCableTypesLength)) : {};

//     console.log(meters)
    
//     cableTypes.forEach(value => {
//         Object.keys(prevCablesTypesLengthObject).includes(value) ? 
//         prevCablesTypesLengthObject[value] += meters :
//         prevCablesTypesLengthObject[value] = 0;
//     });


//     // new cableTypesLength object copied and uploaded
//     return prevCablesTypesLengthObject;
// }