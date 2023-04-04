import { Alert } from "react-native";

import XLSX from "xlsx";
import RNFetchBlob from "rn-fetch-blob";
import { getTaskData } from "./getTaskData";

export const downloadExcel = async (taskID, cableTypesLength) => {

    const taskData = await getTaskData(taskID);
    const startedDate = taskData.started;
    const formattedStartedDate = `${startedDate.day}/${startedDate.month}/${startedDate.year} ${taskData.started.hour}`
    
    const finishedDate = taskData.finished;
    const formattedFinishedDate = `${finishedDate.day}/${finishedDate.month}/${finishedDate.year} ${taskData.finished.hour}`

    const organizedTaskData = {
        ["Número da OS"]: taskData.OSNumber,
        Vistoriador: taskData.owner,
        Empresa: taskData.company,
        ["Local da vistoria"]: taskData.location,
        ["Início"]: formattedStartedDate,
        Fim: formattedFinishedDate,
        ["Metros percorridos"]: taskData.meters.traveled,
    };

    const columnWidth = [];

    // traversing organizedTaskData to get number of characters
    for (key in organizedTaskData) {
        const keyCharsLength = key.split('').length;
        const valueCharsLength = organizedTaskData[key].toString().split('').length;

        keyCharsLength > valueCharsLength ?
        columnWidth.push({wch: keyCharsLength}) :
        columnWidth.push({wch: valueCharsLength});
    }

    // traversing cableTypesLength to get number of characters
    for (key in cableTypesLength) {
        const keyCharsLength = key.split('').length;
        const valueCharsLength = cableTypesLength[key].toString().split('').length;

        keyCharsLength > valueCharsLength ?
        columnWidth.push({wch: keyCharsLength}) :
        columnWidth.push({wch: valueCharsLength});
    }

    try {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([organizedTaskData, ...cableTypesLength]);

        ws["!cols"] = columnWidth;

        XLSX.utils.book_append_sheet(wb, ws, "Dados GECOM", true);
        const file = XLSX.write(wb, { type: 'base64' });

        const filePath = RNFetchBlob.fs.dirs.DownloadDir + "/GECOM.xlsx";
        await RNFetchBlob.fs.writeFile(filePath, file, 'base64')

        // Send notification to phone of user
        await RNFetchBlob.android.addCompleteDownload({
            title: "GECOM.xlsx",
            description: "Download complete",
            mime: "application/xlsx",
            path: filePath,
            showNotification: true
        })

        // Show a message telling that dowload of excel is completed
        Alert.alert("Download completed", "Verifique suas notificações")

    } catch (error) {
        console.log(error);
    }
}