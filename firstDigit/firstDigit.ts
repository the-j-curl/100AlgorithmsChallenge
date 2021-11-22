export const firstDigit = (inputString: string): string => {
	const inputArray: string[] = inputString.split('')
	let digit = ''
	inputArray.forEach(char => {
		if (digit === '' && !isNaN(parseInt(char))) {
			digit = char
		}
	})
	return digit
}

console.log(firstDigit('var_1__Int'))
console.log(firstDigit('q2q-q'))
console.log(firstDigit('0ss'))
console.log(firstDigit('Jam1e C00k'))
