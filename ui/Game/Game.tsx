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

	const status = winner
		? `Winner ${winner}`
		: `Next Player: ${isXNext ? "X" : "O"}`;

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
				<Text>{status}</Text>
				<TouchableHighlight underlayColor={"#eee"} onPress={reset} style={styles.reset}>
					<Feather name="refresh-ccw" size={24} color="black" />
				</TouchableHighlight>
			</View>
			<Board squares={squares} onPlay={handleOnPlay} />
			<Board squares={squares} onPlay={handleOnPlay} />
		</View>
	);
}

const styles = StyleSheet.create({
	game: {
		flex: 1,
		justifyContent: "space-evenly",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	reset: {
		padding: 8
	}
});
