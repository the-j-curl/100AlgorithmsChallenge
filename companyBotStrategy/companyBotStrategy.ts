export function companyBotStrategy(trainingData: number[][]): number {
	let time = 0
	let scoreArray = []

	trainingData.forEach((data: number[]) => {
		if (data[1] === 1) {
			scoreArray.push(data[0])
		}
		if (scoreArray.length > 0) {
			time = scoreArray.reduce((total, currenValue) => {
				return (total += currenValue)
			})
		}
	})

	return time / scoreArray.length || 0
}

console.log(
	companyBotStrategy([
		[3, 1],
		[6, 1],
		[4, 1],
		[5, 1],
	])
)
console.log(
	companyBotStrategy([
		[4, 1],
		[4, -1],
		[0, 0],
		[6, 1],
	])
)
console.log(
	companyBotStrategy([
		[4, -1],
		[0, 0],
		[5, -1],
	])
)
