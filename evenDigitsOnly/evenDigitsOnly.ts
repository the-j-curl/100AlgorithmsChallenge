export function evenDigitsOnly(n: number): boolean {
	const numArray = n.toString().split('')
	let evenArray: number[] = []

	numArray.forEach(num => {
		if (+num % 2 === 0) {
			evenArray.push(+num)
		}
	})
	return numArray.length === evenArray.length
}

console.log(evenDigitsOnly(248622))
console.log(evenDigitsOnly(642386))
