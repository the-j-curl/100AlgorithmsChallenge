export function arrayReplace(
	inputArray: number[],
	elemToReplace: number,
	substitutionElem: number
): number[] {
	inputArray.forEach((number, index) => {
		if (number === elemToReplace) {
			inputArray[index] = substitutionElem
		}
	})
	return inputArray
}

console.log(arrayReplace([1, 2, 1], 1, 3))

// Alternative solution

// export function arrayReplace(
// 	inputArray: number[],
// 	elemToReplace: number,
// 	substitutionElem: number
// ): number[] {
// 	inputArray.forEach((num: number, index: number) => {
// 		if (num === elemToReplace) {
// 			return inputArray.splice(index, 1, substitutionElem)
// 		}
// 	})
// 	return inputArray
// }
