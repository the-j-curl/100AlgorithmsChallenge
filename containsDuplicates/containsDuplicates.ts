export function containsDuplicates(a: number[]): boolean {
	const singleArray = [...new Set(a)]
	return singleArray.length !== a.length
}

console.log(containsDuplicates([1, 2, 3, 1]))
console.log(containsDuplicates([3, 1]))
