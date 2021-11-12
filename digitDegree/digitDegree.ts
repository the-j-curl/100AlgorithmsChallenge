export const digitDegree = (n: number): number => {
	let count = 0

	if (n <= 9) {
		return count
	}

	const nArray = n.toString().split('')

	for (let i = 0; i < nArray.length; i++) {
		const sum = parseInt(nArray[i]) + parseInt(nArray[i + 1])
		count++
		if (sum < 10) {
			return count
		}
	}

	return count
}

console.log(digitDegree(5))
console.log(digitDegree(100))
console.log(digitDegree(91))
