import { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// Components
import { Board } from "../Board";

// Utils
import { determineWinner } from "../../utils";

const defaultSquareValues = Array(9).fill(null);

export function Game() {
	const [squares, setSquares] = useState(defaultSquareValues);
	const [isXNext, setIsXNext] = useState(true);

	let winner = determineWinner(squares);

	let status;

	if (winner) {
		status = `Winner ${winner}`;
	} else if (!squares.includes(null) && !winner) {
		status = "Game is draw";
	} else {
		status = `Next Player: ${isXNext ? "X" : "O"}`;
	}

	const handleOnPlay = (idx: number) => {
		if (squares[idx] || determineWinner(squares)) {
			return;
		}

		const newSquares = [...squares];

		newSquares[idx] = isXNext ? "X" : "O";
		setSquares(newSquares);
		setIsXNext((prev) => !prev);
	};

	const reset = () => {
		setSquares(defaultSquareValues);
		setIsXNext(true);
	};

	return (
		<View style={styles.game}>
			<View style={styles.header}>
				<Text style={styles.status}>{status}</Text>
				<TouchableHighlight
					underlayColor={"#203640"}
					activeOpacity={0.1}
					onPress={reset}
					style={styles.reset}
				>
					<Feather name="refresh-ccw" size={24} color="white" />
				</TouchableHighlight>
			</View>
			<View>
				<Board squares={squares} onPlay={handleOnPlay} />
				<View style={styles.separator} />
				<Board squares={squares} onPlay={handleOnPlay} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	game: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		alignSelf: "stretch",
	},
	status: {
		fontSize: 18,
		color: "#ffffff"
	},
	reset: {
		padding: 8,
	},
	separator: { height: 20 },
});
