export const firstDuplicate = (a: number[]): number => {
	const numbers: number[] = []
	const duplicate: number[] = []

	a.forEach(num => {
		if (!numbers.includes(num)) {
			numbers.push(num)
		} else {
			duplicate.push(num)
		}
	})

	return duplicate[0] || -1
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))
console.log(firstDuplicate([2, 4, 3, 5, 1]))
