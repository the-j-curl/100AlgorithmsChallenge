export function areEquallyStrong(
	yourLeft: number,
	yourRight: number,
	friendsLeft: number,
	friendsRight: number
): boolean {
	const yourStrongestArm = yourLeft >= yourRight ? yourLeft : yourRight
	const friendsStrongestArm =
		friendsLeft >= friendsRight ? friendsLeft : friendsRight
	const yourWeakestArm = yourLeft <= yourRight ? yourLeft : yourRight
	const friendsWeakestArm =
		friendsLeft <= friendsRight ? friendsLeft : friendsRight

	return yourStrongestArm === friendsStrongestArm &&
		yourWeakestArm === friendsWeakestArm
		? true
		: false
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
