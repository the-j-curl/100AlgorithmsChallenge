export function chessBoardCellColor(cell1: string, cell2: string): boolean {
	const board = {
		A: 1,
		B: 2,
		C: 3,
		D: 4,
		E: 5,
		F: 6,
		G: 7,
		H: 8,
	}

	const cellOneTotal = board[cell1[0]] + parseInt(cell1[1])
	const cellTwoTotal = board[cell2[0]] + parseInt(cell2[1])
	return cellOneTotal % 2 === cellTwoTotal % 2
}

console.log(chessBoardCellColor('A1', 'C3'))
console.log(chessBoardCellColor('A1', 'H3'))
console.log(chessBoardCellColor('B3', 'G2'))
