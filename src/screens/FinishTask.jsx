import { Button, StyleSheet, View, Text, Alert } from "react-native";
import {getPreciseDistance} from 'geolib';
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import axios from "axios";
import XLSX from "xlsx";
import RNFetchBlob from "rn-fetch-blob";

export const FinishTask = ({ navigation }) => {

	const {navigate} = navigation;
 
  const [meters, setMeters] = useState(0);
	const [loading, setLoading] = useState(true);
	const [roadPoints, setRoadPoints] = useState();

	const { data, setData } = useContext(DataContext);

	useEffect(() => {
		calcMeters(data)
	}, []);

	async function calcMeters(location) {
    setLoading(true);
		const apiKey = "AIzaSyCwLHHw9LKuO4QjkKw3cZ84S0NbBpG44DM";

		await axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=${
			location.map(value => `${value.location.latitude}, ${value.location.longitude}`).join('|')
			}&interpolate=true&key=${apiKey}`)
			.then(res => {
				const roadPoints = JSON.parse(JSON.stringify(res.data.snappedPoints.map(value => value.location)));
				setRoadPoints(roadPoints);

				console.log("roadPoints:",roadPoints);
				let meters = 0;

				for (let count = 0; count <= roadPoints.length - 2; count++) {
					meters += getPreciseDistance(
						roadPoints[count],
						roadPoints[count + 1]
					);
				}

				console.log("meters:", meters);

				setMeters(prev => prev + meters);
				setData([]);
				
				setLoading(false);
		})
		.catch(err => console.log(err));
  };

	function downloadExcel(location) {

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

	// loading state
  if (loading) {
    return (
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white'}}>Carregando...</Text>
      </View>
    );
  }

	return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Task Finalizada!</Text>
      <Text style={styles.info}>{meters} metros percorridos.</Text>
    	<Button onPress={() => downloadExcel(roadPoints)} title="Download Excel" />
			<View style={styles.space}></View>
			<Button onPress={() => navigate("Home")} title="Voltar" />
   </View>
    );
};

const styles = StyleSheet.create({
	wrapper: {
    flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "black",
	},

	title: {
		fontSize: 24,
		marginBottom: 24,
	},

	info: {
		marginBottom: 24,
	},

	space: {
		marginVertical: 24,
	}

});