import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Utils
import { SQUARE_WIDTH } from "../../utils";

interface SquareProps {
	onPress?: () => void;
	value?: string;
	disabled?: boolean;
}

export function Square({ onPress, value = "", disabled = false }: SquareProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.75}
			onPress={onPress}
			style={styles.square}
			disabled={disabled}
		>
			<Text style={styles.squareValue}>{value}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
	square: {
		borderColor: "#000000",
		borderWidth: 2,
		width: SQUARE_WIDTH,
		height: SQUARE_WIDTH,
		marginRight: -1,
		marginTop: -1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#203640",
	},
	squareValue: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#ffffff",
	},
});
