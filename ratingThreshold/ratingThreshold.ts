export const ratingThreshold = (
	threshold: number,
	ratings: number[][]
): number[] => {
	const reviewArray: number[] = []

	const totalRating = ratings.map(arr => {
		return arr.reduce((acc, value) => {
			return acc + value
		}, 0)
	})

	for (let i = 0; i < totalRating.length; i++) {
		if (totalRating[i] / ratings[i].length < threshold) {
			reviewArray.push(i)
		}
	}
	return reviewArray
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]))
console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [3, 3, 3, 4], [4]]))
