import { Alert } from "react-native";

import XLSX from "xlsx";
import RNFetchBlob from "rn-fetch-blob";

export const downloadExcel = (location) => {

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(location);

    XLSX.utils.book_append_sheet(wb, ws, "Dados GECOM", true);

    const file = XLSX.write(wb, { type: 'base64' });

    const filePath = RNFetchBlob.fs.dirs.DownloadDir + "/GECOM.xlsx";

    RNFetchBlob.fs.writeFile(filePath, file, 'base64')
        .then(() => RNFetchBlob.android.addCompleteDownload({
            title: "GECOM.xlsx",
            description: "Download complete",
            mime: "application/xlsx",
            path: filePath,
            showNotification: true
        }))
        .then(() => Alert.alert("Download completed", "Verifique suas notificações"))
        .catch(err => console.log("error:", err));
}