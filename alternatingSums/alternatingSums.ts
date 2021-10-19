export function alternatingSums(a: number[]): number[] {
	let evenTotal = 0
	let oddTotal = 0
	a.forEach((number, index) => {
		if (index % 2 === 0) {
			evenTotal = evenTotal += number
		} else {
			oddTotal += number
		}
	})

	return [evenTotal, oddTotal]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
