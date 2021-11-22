export const commonCharacterCount = (s1: string, s2: string): number => {
	const string1Arr: string[] = s1.split('')
	const string2Arr: string[] = s2.split('')
	const s1CharCount = getCharList(string1Arr)
	const s2CharCount = getCharList(string2Arr)
	let total = 0

	for (const prop in s1CharCount) {
		if (s2CharCount.hasOwnProperty(prop)) {
			if (s2CharCount[prop] < s1CharCount[prop]) {
				total += s2CharCount[prop]
			} else {
				total += s1CharCount[prop]
			}
		}
	}

	return total
}

const getCharList = (chars: string[]): object => {
	const wordCount = {}

	chars.forEach(char => {
		if (wordCount.hasOwnProperty(char)) {
			wordCount[char]++
		} else {
			wordCount[char] = 1
		}
	})

	return wordCount
}

console.log(commonCharacterCount('aabcc', 'adcaa'))
