export function allLongestStrings(inputArray: string[]): string[] {
	let longestStringLength = 0
	const longestWords = []

	for (let i = 0; i < inputArray.length; i++) {
		longestStringLength =
			inputArray[i].length > longestStringLength
				? inputArray[i].length
				: longestStringLength

		if (inputArray[i].length === longestStringLength) {
			longestWords.push(inputArray[i])
		}
	}

	return longestWords
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']))
