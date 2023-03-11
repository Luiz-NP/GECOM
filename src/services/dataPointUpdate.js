import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"

import Toast from 'react-native-simple-toast';

export const dataPointUpdate = async (
    cableTypes,
    taskID
) => {
    if (!cableTypes) return Toast.show(
        'Selecione pelo menos um tipo de cabo',
        Toast.LONG,
    );

    const { uid } = auth().currentUser;

    const cableTypesObject = cableTypes.map((value, index) => {
        const key = `cableType${index+1}`;
        return { [key]: value };
    });

    console.log(...cableTypesObject)

    console.log(cableTypesObject);

    const taskRef = firestore().collection('Tasks').doc(uid)
    
    const taskData = await (await taskRef.get()).data().Tasks.find(task => task.id === taskID);
    const taskDataPoints = taskData?.dataPoints;
    const prevDataPointsObjectCopyPlusNewInfo = taskDataPoints ? JSON.parse(JSON.stringify(taskDataPoints)) : {};
    const prevDataPointsLengthPlusOne = taskDataPoints ? Object.keys(taskData.dataPoints).length+1 : 1;
    
    // new object copied and uploaded
    prevDataPointsObjectCopyPlusNewInfo[prevDataPointsLengthPlusOne] = cableTypes;

    const newDataTask = {
        Tasks: firestore.FieldValue.arrayUnion({...taskData, dataPoints: prevDataPointsObjectCopyPlusNewInfo})
    };

    // update user's tasks
    await taskRef.set({ ...newDataTask });
}