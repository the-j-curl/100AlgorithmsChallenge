export const fancyRide = (l: number, fares: number[]): string => {
	let i: number = 0
	const uberRide: string[] = [
		'UberX',
		'UberXL',
		'UberPlus',
		'UberBlack',
		'UberSUV',
	]

	fares
		.map(fare => {
			return fare * l
		})
		.forEach((ride: number, index: number) => {
			if (ride <= 20 && index === 0) {
				return (i = 0)
			}
			if (ride <= 20 && index === 1) {
				return (i = 1)
			}
			if (ride <= 20 && index === 2) {
				return (i = 2)
			}
			if (ride <= 20 && index === 3) {
				return (i = 3)
			}
			if (ride <= 20 && index === 4) {
				return (i = 4)
			} else return null
		})

	return uberRide[i]
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]))
