import { Alert } from "react-native";

import XLSX from "xlsx";
import RNFetchBlob from "rn-fetch-blob";

export const downloadExcel = async (data) => {

    try {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);

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