export function characterParity(symbol: string): string {
	const number = parseInt(symbol)
	return isNaN(number) ? 'not a digit' : number % 2 === 0 ? 'even' : 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
