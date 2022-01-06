export function alphabetSubsequence(s: string): boolean {
	const chars: string[] = s.split('')
	const charValues: string[] = []

	chars.forEach((char: string) => {
		charValues.push(char.charAt(0))
	})
	const singleCharValues = [...new Set(charValues)]

	if (chars.length !== singleCharValues.length) {
		return false
	}

	for (let i = 0; i < singleCharValues.length - 1; i++) {
		if (singleCharValues[i] >= singleCharValues[i + 1]) {
			return false
		}
	}
	return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
