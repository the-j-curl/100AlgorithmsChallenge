export function allLongestStrings(inputArray: string[]): string[] {
	let longestStringLength = 0
	const longestStrings = []

	inputArray.forEach((string: string) => {
		longestStringLength =
			longestStringLength < string.length ? string.length : longestStringLength
		console.log(longestStringLength)
	})

	inputArray.forEach((string: string) => {
		if (string.length === longestStringLength) {
			longestStrings.push(string)
		}
	})

	return longestStrings
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']))
