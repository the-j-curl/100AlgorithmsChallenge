export function depositProfit(
	deposit: number,
	rate: number,
	threshold: number
): number {
	let years: number = 0
	let balance = deposit

	while (threshold > balance) {
		balance += balance * (rate / 100)
		years++
	}

	return years
}

console.log(depositProfit(100, 20, 170))
