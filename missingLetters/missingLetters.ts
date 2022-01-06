export const missingLetters = (str: string): string => {
	const charValues: number[] = str.split('').map((char: string) => {
		return char.charCodeAt(0)
	})

	if (charValues[0] !== 97) {
		return 'a'
	}

	for (let i = 0; i < charValues.length - 1; i++) {
		if (charValues[i] !== charValues[i + 1] - 1) {
			return String.fromCharCode(charValues[i] + 1)
		}
	}
	return undefined
}

console.log(missingLetters('bce'))
console.log(missingLetters('abce'))
console.log(missingLetters('abcdefghjklmno'))
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'))
