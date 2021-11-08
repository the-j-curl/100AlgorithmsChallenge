export function extractEachKth(inputArray: number[], k: number): number[] {
	const filteredArray = inputArray.filter(
		(number, index) => (index + 1) % k !== 0
	)
	return filteredArray
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
