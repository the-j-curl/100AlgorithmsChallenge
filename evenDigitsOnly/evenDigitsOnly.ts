export function evenDigitsOnly(n: number): boolean {
	const digitArray = n.toString().split('')
	return digitArray.every(digit => +digit % 2 === 0)
}
console.log(evenDigitsOnly(248622))
console.log(evenDigitsOnly(642386))
