import { View, StyleSheet } from "react-native";
import { SQUARE_WIDTH } from "../../utils";

import { Square } from "../Square";

interface BoardProps {
	squares: string[];
	onPlay: (idx: number) => void;
}

export function Board({ squares, onPlay }: BoardProps) {
	return (
		<View style={styles.board}>
			<Row>
				<Square
					value={squares[0]}
					onPress={() => onPlay(0)}
					disabled={!!squares[0]}
				/>
				<Square
					value={squares[1]}
					onPress={() => onPlay(1)}
					disabled={!!squares[1]}
				/>
				<Square
					value={squares[2]}
					onPress={() => onPlay(2)}
					disabled={!!squares[2]}
				/>
			</Row>
			<Row>
				<Square
					value={squares[3]}
					onPress={() => onPlay(3)}
					disabled={!!squares[3]}
				/>
				<Square
					value={squares[4]}
					onPress={() => onPlay(4)}
					disabled={!!squares[4]}
				/>
				<Square
					value={squares[5]}
					onPress={() => onPlay(5)}
					disabled={!!squares[5]}
				/>
			</Row>
			<Row>
				<Square
					value={squares[6]}
					onPress={() => onPlay(6)}
					disabled={!!squares[6]}
				/>
				<Square
					value={squares[7]}
					onPress={() => onPlay(7)}
					disabled={!!squares[7]}
				/>
				<Square
					value={squares[8]}
					onPress={() => onPlay(8)}
					disabled={!!squares[8]}
				/>
			</Row>
		</View>
	);
}

interface RowProps {
	children: React.ReactNode;
}

function Row({ children }: RowProps) {
	return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
	board: {
		width: SQUARE_WIDTH * 3,
		height: SQUARE_WIDTH * 3,
		alignItems: "stretch",
	},
	row: {
		flexDirection: "row",
	},
});
