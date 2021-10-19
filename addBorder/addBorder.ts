export function addBorder(picture: string[]): string[] {
	const borderLength = picture[0].length + 2
	let border = ''

	for (let i = 0; i < borderLength; i++) {
		border = border.concat('*')
	}

	picture.push(border)
	picture.unshift(border)

	for (let i = 1; i < picture.length - 1; i++) {
		picture[i] = '*'.concat(picture[i], '*')
	}

	return picture
}

console.log(addBorder(['abc', 'ded']))

// ALTERNATIVE CLEANER SOLUTION
// export function addBorder(picture: string[]): string[] {
// 	const border = '*'.repeat(picture[0].length + 2);

// 	picture.unshift(border);
// 	picture.push(border);

// 	for (let i = 1; i < picture.length - 1; i++) {
// 		picture[i] = '*'.concat(picture[i], '*');
// 	}
// 	return picture;
// }

// console.log(addBorder(['abc', 'ded']));
