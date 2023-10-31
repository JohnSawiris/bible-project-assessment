import { TouchableHighlight, Text, StyleSheet } from "react-native";

// Utils
import { SQUARE_WIDTH } from "../../utils";

interface SquareProps {
	onPress?: () => void;
	value?: string;
	disabled?: boolean;
}

export function Square({ onPress, value = "", disabled = false }: SquareProps) {
	return (
		<TouchableHighlight
			underlayColor={"#eee"}
			onPress={onPress}
			style={styles.square}
			disabled={disabled}
		>
			<Text style={styles.squareValue}>{value}</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
	square: {
		borderColor: "#999",
		borderWidth: 1,
		width: SQUARE_WIDTH,
		height: SQUARE_WIDTH,
		marginRight: -1,
		marginTop: -1,
		justifyContent: "center",
		alignItems: "center",
	},
	squareValue: {
		fontSize: 40,
		fontWeight: "bold",
	},
});
