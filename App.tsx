import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// UI
import { Game } from "./ui";

export default function App() {
	return (
		<View style={styles.container}>
			<Game />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#090810",
		alignItems: "center",
		justifyContent: "center",
	},
});
