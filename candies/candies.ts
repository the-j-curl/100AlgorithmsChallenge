export function candies(n: number, m: number): number {
	const candiesRemaining = m % n
	return m - candiesRemaining
}

console.log(candies(3, 10))
console.log(candies(5, 20))
