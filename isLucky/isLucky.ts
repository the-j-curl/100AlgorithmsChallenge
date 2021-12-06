export const isLucky = (n: number): boolean => {
	const noOfDigits = n.toString().length
	const firstHalf = n
		.toString()
		.slice(0, noOfDigits / 2)
		.split('')
		.map(char => +char)
	const secondHalf = n
		.toString()
		.slice(noOfDigits / 2, noOfDigits)
		.split('')
		.map(char => +char)
	const firstSum = firstHalf.reduce((total, current) => {
		return total + current
	})
	const secondSum = secondHalf.reduce((total, current) => {
		return total + current
	})

	return firstSum === secondSum
}

console.log(isLucky(1230))
console.log(isLucky(239017))
