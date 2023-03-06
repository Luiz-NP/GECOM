import { Button, StyleSheet, View, Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";

import { calcMeters } from "../api/calcMeters";
import { downloadExcel } from "../services/downloadExcel";

import { LoadingIndicator } from "../components/LoadingIndicator";

export const FinishTask = ({ navigation }) => {

	const { navigate } = navigation;

	const [meters, setMeters] = useState(0);
	const [loading, setLoading] = useState(true);
	const [roadPoints, setRoadPoints] = useState();

	const { data, setData } = useContext(DataContext);

	useEffect(() => {
		calcMeters(
			setLoading,
			data,
			setRoadPoints,
			setMeters,
			setData
		)
	}, []);

	// loading state
	if (loading) return <LoadingIndicator />

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