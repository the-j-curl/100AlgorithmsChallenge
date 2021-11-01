export function alphabeticShift(inputString: string): string {
	const alphabet: string[] = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	]

	let inputShift: string[] = inputString.split('')
	for (let i = 0; i < inputShift.length; i++) {
		let indexValue = 0
		if (inputShift[i] !== 'z') {
			indexValue = alphabet.indexOf(inputShift[i]) + 1
		}
		inputShift[i] = alphabet[indexValue]
	}
	return inputShift.join('')
}

console.log(alphabeticShift('crazy'))
