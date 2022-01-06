export const firstDuplicate = (a: number[]): number => {
	const numbers: number[] = []
	const duplicate: number[] = []

	a.forEach((num: number) => {
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

// Alternative solution

// export const firstDuplicate = (a: number[]): number => {
// 	let firstDuplicate = -1
// 	const arr = []

// 	for (let i = 0; i < a.length; i++) {
// 		if (!arr.includes(a[i])) {
// 			arr.push(a[i])
// 		} else {
// 			firstDuplicate = a[i]
// 		}
// 		if (firstDuplicate !== -1) {
// 			return firstDuplicate
// 		}
// 	}

// 	return -1
// }

// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))
// console.log(firstDuplicate([2, 4, 3, 5, 1]))
